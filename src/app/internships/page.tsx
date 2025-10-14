"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Brain,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Coffee,
  FileCode,
  Cpu,
  BarChart,
  Cloud,
  Gamepad2,
  Megaphone,
  Boxes,
  Atom,
  Layers,
  Binary
} from 'lucide-react';


interface InternshipCardProps {
  icon: React.ElementType;
  title: string;
  duration: string;
  difficulty: string;
  description: string;
}

const InternshipCard = ({ icon: Icon, title, duration, difficulty, description }: InternshipCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-200">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:from-purple-200 group-hover:to-indigo-200 transition-colors">
          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex justify-center gap-2 mt-2">
          <Badge variant="secondary" className="text-xs">
            {duration}
          </Badge>
          <Badge
            variant="outline"
            className={`text-xs ${difficulty === 'Beginner' ? 'border-green-300 text-green-700' :
              difficulty === 'Intermediate' ? 'border-yellow-300 text-yellow-700' :
                'border-red-300 text-red-700'
              }`}
          >
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {description}
        </p>
        <a
          href="https://forms.gle/UxcDoGwhGShCzCfs7"
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
};

const StatsSection = () => {
  const stats = [
    { number: '350+', label: 'Community Members' },
    { number: '10+', label: 'Upcoming Events' },
    { number: '5+', label: 'Groups of Intern' },
    { number: '350+', label: 'Handpicked Internships' }
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function InternshipsPage() {
  const internships = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      duration: "30 days",
      difficulty: "Beginner",
      description: "Dive deep into AI algorithms, neural networks, and machine learning models. Build intelligent systems and explore the future of technology."
    },
    {
      icon: Database,
      title: "Machine Learning",
      duration: "30 days",
      difficulty: "Beginner",
      description: "Master ML algorithms, data preprocessing, and model optimization. Create predictive models and analyze complex datasets."
    },
    {
      icon: FileCode,
      title: "Data Science",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Extract insights from data using statistical analysis, visualization tools, and advanced analytics techniques."
    },
    {
      icon: Globe,
      title: "Web Development",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks like React and Node.js."
    },
    {
      icon: Smartphone,
      title: "Application Development",
      duration: "30 days",
      difficulty: "Beginner",
      description: "Create native Android applications using Java/Kotlin, Android Studio, and modern development practices."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Design user-centered interfaces and experiences using Figma, Adobe XD, and design thinking methodologies."
    },
    {
      icon: Coffee,
      title: "Java Programming",
      duration: "30 days",
      difficulty: "Beginner",
      description: "Learn object-oriented programming, data structures, and build robust applications with Java."
    },
    {
      icon: Code,
      title: "Python Programming",
      duration: "30 days",
      difficulty: "Advanced",
      description: "Master Python fundamentals, libraries, and frameworks for web development, automation, and data analysis."
    },
    {
      icon: Cpu,
      title: "C++ Programming",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Deep dive into system programming, memory management, and high-performance computing with C++."
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Create dashboards and reporting solutions using BI tools to drive data-informed decisions."
    },
    {
      icon: Boxes,
      title: "Internet of Things (IoT)",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Build IoT prototypes, connect sensors, and analyze device data securely."
    },
    {
      icon: Layers,
      title: "Product Management Fundamentals",
      duration: "30 days",
      difficulty: "Beginner",
      description: "Learn product lifecycle, roadmapping, and stakeholder collaboration fundamentals."
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Get hands-on with AWS/Azure/GCP services for compute, storage, and deployment."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      duration: "30 days",
      difficulty: "Beginner",
      description: "SEO, SEM, and social strategies to grow digital presence effectively."
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Learn game design and development workflows using popular engines."
    },
    {
      icon: Atom,
      title: "React JS",
      duration: "30 days",
      difficulty: "Beginner",
      description: "Build SPA frontends with React, hooks, and modern tooling."
    },
    {
      icon: Binary,
      title: "JavaScript Developer",
      duration: "30 days",
      difficulty: "Intermediate",
      description: "Core JS, modern syntax, and project-based learning for real apps."
    },
    {
      icon: Database,
      title: "R Language",
      duration: "30 days",
      difficulty: "Beginner",
      description: "Data analysis and visualization using R and tidyverse ecosystem."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPath="/internships" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary via-purple-300 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Internship Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Launch your career with hands-on virtual internships in cutting-edge technologies.
            Gain real-world experience and build skills that matter in today's digital landscape.
          </p>
        </div>
      </section>

      {/* Internships Illustration */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2998186a-cfbb-4612-bf26-271366a9878e/generated_images/professional-digital-illustration-of-stu-96281d2e-20250905110718.jpg"
                alt="Students in internship program illustration"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Internships Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <div key={index} id={toSlug(internship.title)} className="scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
                <InternshipCard {...internship} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our comprehensive virtual internship programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/CH2PN5fPPpSep36q7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8">
                Apply Today
              </Button>
            </a>
            <Button
              size="lg"
              onClick={() => window.location.href = "/contact"}
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}