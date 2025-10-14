"use client";

import { useState } from 'react';
import { Mail, Phone, ContactRound, SendHorizontal, MailCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message || "Message sent successfully! Your message has been sent successfully! We’ll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-16 px-4 bg-background ${className || ''}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[var(--text-medium)] max-w-2xl mx-auto">
            Have questions about our services or want to discuss your project? 
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-lg border-0 bg-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <ContactRound className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-[var(--text-dark)]">
                  Send us a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--form-label)] mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`h-12 bg-[var(--input)] border-[var(--border)] focus:border-primary focus:ring-primary`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--form-label)] mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className={`h-12 bg-[var(--input)] border-[var(--border)] focus:border-primary focus:ring-primary`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--form-label)] mb-2">
                    Question / Feedback
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or ask any questions..."
                    rows={5}
                    className={`bg-[var(--input)] border-[var(--border)] focus:border-primary focus:ring-primary resize-none`}
                  />
                </div>

                {/* Success/Error Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-3 text-green-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m2-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-medium">Message sent successfully!</p>
                    </div>
                    <p className="text-sm text-green-700 mt-1">{submitMessage}</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-3 text-red-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="font-medium">Failed to send message</p>
                    </div>
                    <p className="text-sm text-red-700 mt-1">{submitMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <SendHorizontal className="h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-dark)] mb-1">Email</h4>
                    <p className="text-[var(--text-medium)]">nspnexus003@gmail.com</p>
                    <p className="text-sm text-[var(--text-light)]">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-dark)] mb-1">Phone</h4>
                    <p className="text-[var(--text-medium)]">+91 9342994115</p>
                    <p className="text-sm text-[var(--text-light)]">Monday - Saturday, 9AM - 10PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <ContactRound className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-dark)] mb-1">Office</h4>
                    <p className="text-[var(--text-medium)]">No 66/1, Rajeswari 2nd street,</p>
                    <p className="text-[var(--text-medium)]">Gokulapuram,</p>
                    <p className="text-[var(--text-medium)]">Chengalpattu – 603001,</p>
                    <p className="text-[var(--text-medium)]">Tamil Nadu, India</p>
                    <p className="text-sm text-[var(--text-light)]">Available for in-person meetings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Card */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MailCheck className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-[var(--text-dark)]">Quick Response</h4>
                </div>
                <p className="text-sm text-[var(--text-medium)] leading-relaxed">
                  Need immediate assistance? For urgent inquiries, please call our office directly. 
                  For general questions, expect a response via email within one business day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}