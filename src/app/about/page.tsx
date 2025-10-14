"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Lightbulb, Users, TrendingUp, Award, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower students and businesses through real-world projects, skill development, and innovative IT solutions."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To bridge the gap between learning and industry, creating future-ready talent and impactful businesses."
    },
    {
      icon: Heart,
      title: "Excellence",
      description: "We strive for quality and reliability in every project, ensuring value for students and clients."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous learning, innovation, and collaboration drive sustainable growth for individuals and organizations."
    },
    {
      icon: Users,
      title: "Community",
      description: "A connected ecosystem where students, professionals, and clients share knowledge, support, and opportunities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploring new ideas, tools, and technologies to deliver creative solutions and industry-leading experiences."
    }
  ];

  const stats = [
    { icon: Users, number: "350+", label: "Community Members" },
    { icon: Award, number: "10+", label: "Upcoming Events" },
    { icon: Globe, number: "5+", label: "Groups of Intern" },
    { icon: TrendingUp, number: "350+", label: "Handpicked Internships" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPath="/about" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-indigo-300 to-purple-400 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

        <div className="relative container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            At NSP Nexus, we empower students and businesses by delivering innovative IT services, hands-on internships, and real-time project opportunities. Our mission is to bridge learning and industry, helping individuals gain skills,
            confidence, and future-ready career opportunities
          </p>
        </div>
      </section>

      {/* About Illustration */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2998186a-cfbb-4612-bf26-271366a9878e/generated_images/professional-digital-illustration-showin-ffd256b4-20250905110656.jpg"
                alt="Professional team collaboration and company culture illustration"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Bridging Dreams with Opportunities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At NSP Nexus, we go beyond internships—we are a full-fledged IT solutions company committed to both students and businesses. We provide real-world projects, expert mentorship, and training for learners, while also delivering high-quality IT services and digital solutions for clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to create a strong bridge between learning and industry by empowering students with skills and helping businesses grow with innovative technology.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-2xl transform rotate-3 opacity-20"></div>
              <Card className="relative bg-white shadow-lg border-0 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Community First</h3>
                    </div>
                    <p className="text-gray-700">
                      We believe growth is built on collaboration. Our approach connects students, professionals, and clients—creating a supportive space where knowledge sharing, innovation, and opportunities thrive together.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Innovation, integrity, collaboration, and excellence-driving growth for students, professionals, and businesses together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Growing Community</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join a fast-growing network of students, professionals, and clients who are building skills, careers, and businesses through our platform. Together, we create opportunities, drive innovation, and deliver impactful IT solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="group bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-400">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white mb-8 opacity-90 max-w-2xl mx-auto">
            Become part of a vibrant ecosystem where learning meets industry. Whether you’re a student seeking growth or a client looking for solutions,
            your next milestone starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.location.href = "/internships"} className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Explore Internships
            </button>
            <a
              href="https://chat.whatsapp.com/Fcdjecg24M57owVBHb70LB?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
                Join Community
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}