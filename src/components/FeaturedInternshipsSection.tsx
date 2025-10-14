"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LayoutTemplate, CreditCard, LayoutGrid } from "lucide-react";

interface InternshipCard {
  id: string;
  title: string;
  description: string;
  company: string;
  icon: React.ReactNode;
}

const internships: InternshipCard[] = [
  {
    id: "ui-ux",
    title: "UI/UX Internship",
    description: "Design user interfaces and create seamless user experiences for web and mobile applications.",
    company: "Design Studio Pro",
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />
  },
  {
    id: "frontend",
    title: "Front-End Internship",
    description: "Build responsive websites and interactive user interfaces using modern web technologies.",
    company: "TechFlow Solutions",
    icon: <CreditCard className="w-8 h-8 text-primary" />
  },
  {
    id: "backend",
    title: "Backend Internship",
    description: "Develop server-side applications and APIs to power modern web and mobile applications.",
    company: "CodeCraft Systems",
    icon: <LayoutGrid className="w-8 h-8 text-primary" />
  }
];

export default function FeaturedInternshipsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Featured Internships
          </h2>
          <p className="text-text-medium text-lg max-w-2xl mx-auto">
            Discover exciting internship opportunities across different tech disciplines and start your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship) => (
            <Card 
              key={internship.id}
              className="group hover:shadow-lg transition-all duration-300 border border-border bg-card hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    {internship.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {internship.title}
                  </h3>
                  
                  <p className="text-text-medium leading-relaxed mb-4">
                    {internship.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-primary">
                      {internship.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
            View All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}