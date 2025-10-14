"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import InternshipsSection from "@/components/InternshipsSection";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { ArrowRight, Users, Calendar, Users2, Briefcase, Network, Award, Globe, FileText, X } from "lucide-react";

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleLearnMore = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setShowContact(true);
  };

  const closeContact = () => {
    setShowContact(false);
    setSelectedService("");
  };

  const stats = [
    { number: "350+", label: "Community Members", icon: Users },
    { number: "10+", label: "Upcoming Events", icon: Calendar },
    { number: "5+", label: "Groups of Interns", icon: Users2 },
    { number: "350+", label: "Handpicked Internships", icon: Briefcase },
  ];

  const features = [
    {
      icon: Network,
      title: "Build Your Network",
      description: "Join our vibrant community and expand your professional network with peers, mentors, and industry experts."
    },
    {
      icon: Award,
      title: "Certificates & Experience Letters",
      description: "Gain recognized internship certificates and detailed experience letters (15–45 days) to showcase your skills."
    },
    {
      icon: Globe,
      title: "Multiple Domains",
      description: "Explore internships and services across diverse domain-Web Development, Data Science, AI/ML, UI/UX, Digital Marketing, and more."
    },
    {
      icon: FileText,
      title: "Free Access",
      description: "Get free access to past internship resources, learning materials, and valuable industry insights anytime."
    }
  ];

  const featuredInternships = [
    {
      title: "UI/UX Internship",
      duration: "30 Days",
      level: "Beginner to Intermediate",
      company: "TechCorp Inc."
    },
    {
      title: "Front-End Internship",
      duration: "45 Days",
      level: "Intermediate",
      company: "WebSolutions Ltd."
    },
    {
      title: "Backend Internship",
      duration: "45 Days",
      level: "Intermediate to Advanced",
      company: "DataTech Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPath="/" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 gradient-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Virtual Internship & Services Program
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Connect with opportunities, build your skills, and launch your career with our comprehensive internship platform.
              </p>
              <a
                href="https://chat.whatsapp.com/Fcdjecg24M57owVBHb70LB?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-50 text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2998186a-cfbb-4612-bf26-271366a9878e/generated_images/modern-digital-illustration-of-a-diverse-2dfe149f-20250905110640.jpg"
                  alt="Diverse team working together on internship program"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* What We Do Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Do?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end internship opportunities and IT services designed to help students grow and businesses thrive. Our platform connects learners with industry projects while delivering innovative solutions to clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Full Internships Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4">All Internship Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore diverse internship programs designed to accelerate your career in technology and innovation
            </p>
          </div>

          {/* Internships Illustration */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2998186a-cfbb-4612-bf26-271366a9878e/generated_images/professional-digital-illustration-of-stu-96281d2e-20250905110718.jpg"
                alt="Students in internship program illustration"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Artificial Intelligence", description: "Explore cutting-edge AI technologies and build intelligent systems", icon: Network },
              { title: "Machine Learning", description: "Develop predictive models and data-driven solutions", icon: Award },
              { title: "Data Science", description: "Analyze complex datasets and extract meaningful insights", icon: Users },
              { title: "Web Development", description: "Build modern, responsive web applications and websites", icon: Globe },
              { title: "Application Development", description: "Create innovative mobile applications for Android platform", icon: Briefcase },
              { title: "UI/UX Design", description: "Design intuitive user interfaces and exceptional user experiences", icon: FileText },
              { title: "Java Programming", description: "Master object-oriented programming with Java", icon: Calendar },
              { title: "Python Programming", description: "Learn versatile programming with Python for various applications", icon: Users2 },
              { title: "C++ Programming", description: "Develop high-performance applications with C++", icon: Network }
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{category.description}</p>
                    <a
                      href="https://forms.gle/DvwiPEBfsDURVo198"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-300 group-hover:shadow-lg">
                        Apply Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/internships">
              <Button className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                View All Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our services or want to discuss your project? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Illustration */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2998186a-cfbb-4612-bf26-271366a9878e/generated_images/clean-modern-illustration-of-customer-su-dd2ac835-20250905110730.jpg"
                alt="Customer support and contact illustration"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <ContactSection />
        </div>
      </section>

      {/* Contact Section Modal/Overlay */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <Button
              onClick={closeContact}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Interested in {selectedService}?
                </h2>
                <p className="text-gray-600">
                  Let's discuss how this service can help you achieve your goals.
                </p>
              </div>
              <ContactSection className="py-0" />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}