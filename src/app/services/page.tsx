"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Globe, 
  Smartphone, 
  Palette, 
  BarChart3, 
  TrendingUp, 
  Bot, 
  Headphones, 
  Megaphone,
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  Trophy,
  Target,
  X
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const services = [
  {
    id: 1,
    title: "Portfolio",
    slug: "portfolio",
    description: "Create stunning personal and professional portfolios that showcase your skills and achievements effectively.",
    icon: Briefcase,
    features: ["Custom Design", "Responsive Layout", "SEO Optimized"]
  },
  {
    id: 2,
    title: "Website Development",
    slug: "website-development",
    description: "Full-stack web development solutions using modern technologies for scalable and performant applications.",
    icon: Globe,
    features: ["Modern Framework", "Database Integration", "API Development"]
  },
  {
    id: 3,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
    icon: Smartphone,
    features: ["Cross-Platform", "Native Performance", "App Store Ready"]
  },
  {
    id: 4,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-centered design solutions that create intuitive and engaging digital experiences for your audience.",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    slug: "data-science-analytics",
    description: "Transform raw data into actionable insights using advanced analytics and machine learning techniques.",
    icon: BarChart3,
    features: ["Data Mining", "Predictive Models", "Visualization"]
  },
  {
    id: 6,
    title: "Business Analytics",
    slug: "business-analytics",
    description: "Strategic business intelligence solutions to drive informed decision-making and optimize operations.",
    icon: TrendingUp,
    features: ["KPI Dashboards", "Performance Metrics", "Business Intelligence"]
  },
  {
    id: 7,
    title: "AI & Automation Services",
    slug: "ai-automation-services",
    description: "Intelligent automation solutions and AI integration to streamline processes and enhance efficiency.",
    icon: Bot,
    features: ["Process Automation", "AI Integration", "Workflow Optimization"]
  },
  {
    id: 8,
    title: "IT Consulting & Support",
    slug: "it-consulting-support",
    description: "Expert technical consulting and comprehensive IT support services for businesses of all sizes.",
    icon: Headphones,
    features: ["24/7 Support", "System Architecture", "Technical Strategy"]
  },
  {
    id: 9,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
    icon: Megaphone,
    features: ["SEO/SEM", "Social Media", "Content Strategy"]
  }
];

const stats = [
  {
    icon: Users,
    value: "350+",
    label: "Community Members"
  },
  {
    icon: Calendar,
    value: "10+",
    label: "Upcoming Events"
  },
  {
    icon: Target,
    value: "5+",
    label: "Groups of Interns"
  },
  {
    icon: Trophy,
    value: "350+",
    label: "Handpicked Internships"
  }
];

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  const domainData = [
    {
      id: "web-app-development",
      label: "Web & App Development",
      services: [
        "Full Stack Web Development (React, Node.js, Django, etc.)",
        "E-Commerce Website Solutions",
        "CMS Development (WordPress, Shopify)",
        "Mobile App Development (Android, iOS, Flutter)",
        "Progressive Web Apps (PWA)",
      ],
    },
    {
      id: "creative-design-solutions",
      label: "Creative & Design Solutions",
      services: [
        "UI/UX Design & Prototyping",
        "Graphic Design & Branding",
        "Motion Graphics & Video Editing",
        "Logo & Identity Design",
        "Presentation & Pitch Deck Design",
      ],
    },
    {
      id: "data-analytics-intelligence",
      label: "Data, Analytics & Intelligence",
      services: [
        "Data Science & Predictive Analytics",
        "Data Visualization (Power BI, Tableau)",
        "Data Engineering & Warehousing",
        "Business Intelligence & Reporting",
        "Advanced Excel & Automation",
      ],
    },
    {
      id: "ai-ml-automation",
      label: "AI, ML & Automation",
      services: [
        "Machine Learning Models",
        "AI-Powered Chatbots",
        "Natural Language Processing (NLP) Solutions",
        "Computer Vision Applications",
        "Workflow & Business Process Automation",
      ],
    },
    {
      id: "security-infrastructure",
      label: "Security & Infrastructure",
      services: [
        "Cybersecurity Audits & Consulting",
        "Penetration Testing",
        "Network Security Solutions",
        "Cloud Security & Backup",
        "IT Infrastructure Setup & Maintenance",
      ],
    },
    {
      id: "cloud-devops",
      label: "Cloud & DevOps",
      services: [
        "Cloud Migration (AWS, Azure, GCP)",
        "Server Setup & Hosting",
        "Continuous Integration & Deployment (CI/CD)",
        "Containerization (Docker, Kubernetes)",
        "API Development & Integration",
      ],
    },
    {
      id: "digital-growth-marketing",
      label: "Digital Growth & Marketing",
      services: [
        "Digital Marketing Strategy",
        "Social Media Management",
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (Google Ads)",
        "Content Marketing & Copywriting",
      ],
    },
    {
      id: "business-consulting",
      label: "Business & Consulting",
      services: [
        "IT Consulting Services",
        "Product Development Support",
        "Startup Mentorship & Tech Guidance",
        "Project Outsourcing & Freelancing Solutions",
        "Training & Corporate Workshops",
      ],
    },
  ];

  const handleLearnMore = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setShowContact(true);
  };

  const closeContact = () => {
    setShowContact(false);
    setSelectedService("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30">
      <Navigation currentPath="/services" />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="bg-gradient-to-r from-purple-300/20 to-indigo-300/20 text-purple-700 px-6 py-2 text-sm font-medium border-0 mb-6">
            Professional Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent leading-tight">
            Virtual Internship & Services Program
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive digital solutions designed to elevate your business and career. 
            From web development to AI automation, we provide cutting-edge services 
            tailored to meet your unique needs.
          </p>
        </div>
      </section>

      {/* Services Illustration */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2998186a-cfbb-4612-bf26-271366a9878e/generated_images/modern-isometric-illustration-of-various-e91b5a09-20250905110707.jpg"
                alt="Various digital services illustration" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-300/30 to-indigo-300/30 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">What We Do?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver end-to-end IT solutions, including software development, web design, digital marketing, cloud services, and consulting - helping clients achieve growth through innovation and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our domains and detailed services below
            </p>
          </div>

          {/* Domains with anchor IDs and service item anchors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domainData.map((d) => (
              <div key={d.id} id={d.id} className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg p-6 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
                <h3 className="text-xl font-bold text-purple-600 hover:text-indigo-600 mb-2">{d.label}</h3>
                <div className="h-px bg-gray-200 mb-4" />
                <ul className="space-y-2 list-none">
                  {d.services.map((s) => (
                    <li
                      key={s}
                      id={`service-${toSlug(s)}`}
                      className="text-gray-700 flex items-center gap-2"
                    >
                      <span className="text-purple-600">•</span>
                      <button
                        onClick={() => handleLearnMore(s)}
                        className="text-left hover:text-purple-700"
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-300/20 via-indigo-300/15 to-purple-300/20 border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals. 
                Get in touch with our team of experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => handleLearnMore("General Inquiry")}
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}