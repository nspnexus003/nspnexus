import { BookOpenCheck, Check, ListChecks, Share } from "lucide-react";

interface WhatWeDoSectionProps {
  className?: string;
}

export default function WhatWeDoSection({ className = "" }: WhatWeDoSectionProps) {
  const services = [
    {
      icon: Share,
      title: "Build Your Network",
      description: "Connect with like-minded professionals through our curated community platform and expand your professional circle."
    },
    {
      icon: BookOpenCheck,
      title: "Internship Certificates & Experience Letters",
      description: "Receive official certificates and experience letters for completed internships ranging from 15-45 days to boost your resume."
    },
    {
      icon: ListChecks,
      title: "Multiple Domain Opportunities",
      description: "Explore internship opportunities across various domains including technology, marketing, design, finance, and more."
    },
    {
      icon: Check,
      title: "Free Access to Past Internships",
      description: "Get complimentary access to our archive of previous internship programs and learn from past experiences."
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-dark)] mb-4">
            What We Do?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[var(--text-dark)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--text-medium)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[var(--text-medium)] mb-6">
            Ready to kickstart your career journey with us?
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}