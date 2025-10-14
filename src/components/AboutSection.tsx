"use client";

import { useState, useRef, useEffect } from "react";
import { GraduationCap } from "lucide-react"; 
export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-purple-100/50 to-indigo-100/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl animate-pulse animate-pulse-delay"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="p-3 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)]">
              About Us
            </h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-dark)] leading-tight">
                Connecting Students with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Opportunities</span>
              </h3>
              
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                We are passionate about bridging the gap between talented students and meaningful opportunities. Along with offering diverse internships in domains like Web Development, Data Science, AI/ML, UI/UX, and more, we also deliver high-quality IT services to clients worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[var(--text-dark)]">
                Our Community-Driven Approach
              </h4>
              
              <p className="text-[var(--foreground)] leading-relaxed">
                At the heart of our platform lies a commitment to growth and collaboration. We empower students through real-time projects, skill development, and industry mentorship, while also helping businesses with web, app, data, AI, and digital solutions. By fostering meaningful connections, we ensure both learners and clients achieve long-term success beyond traditional boundaries.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-white/70 rounded-lg border border-purple-100">
                <h5 className="font-semibold text-[var(--text-dark)] mb-2">Networking</h5>
                <p className="text-sm text-[var(--text-medium)]">Connect with industry professionals and fellow students</p>
              </div>
              <div className="p-4 bg-white/70 rounded-lg border border-indigo-100">
                <h5 className="font-semibold text-[var(--text-dark)] mb-2">Skills Development</h5>
                <p className="text-sm text-[var(--text-medium)]">Build practical skills through real-world projects</p>
              </div>
              <div className="p-4 bg-white/70 rounded-lg border border-purple-100">
                <h5 className="font-semibold text-[var(--text-dark)] mb-2">Career Growth</h5>
                <p className="text-sm text-[var(--text-medium)]">Access opportunities that align with your goals</p>
              </div>
              <div className="p-4 bg-white/70 rounded-lg border border-indigo-100">
                <h5 className="font-semibold text-[var(--text-dark)] mb-2">Student Success</h5>
                <p className="text-sm text-[var(--text-medium)]">Achieve your potential with personalized support</p>
              </div>
            </div>
          </div>

          {/* Animated Element */}
          <div className={`relative transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Main animated container */}
              <div className="bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl p-8 relative overflow-hidden">
                {/* Animated circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-16 h-16 bg-purple-300/60 rounded-full animate-bounce"></div>
                  <div className="absolute top-12 right-8 w-12 h-12 bg-indigo-300/60 rounded-full animate-bounce bounce-delay-1"></div>
                  <div className="absolute bottom-8 left-12 w-20 h-20 bg-purple-400/40 rounded-full animate-bounce bounce-delay-2"></div>
                  <div className="absolute bottom-4 right-4 w-14 h-14 bg-indigo-400/40 rounded-full animate-bounce bounce-delay-3"></div>
                </div>

                {/* Central content */}
                <div className="relative z-10 text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 rounded-full mb-4 shadow-lg">
                    <GraduationCap className="w-10 h-10 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-dark)] mb-2">
                    Empowering Success
                  </h4>
                  <p className="text-[var(--text-medium)] text-sm">
                    Join thousands of students building their future
                  </p>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-indigo-400 rounded-full animate-ping ping-delay"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-indigo-300/30 rounded-2xl blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button onClick={() => window.location.href = "/contact"} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full text-white font-medium hover:from-purple-400 hover:to-indigo-400 transition-all duration-300 cursor-pointer">
              <GraduationCap className="w-5 h-5" />
                <span>Ready to start your journey?</span>
            </button>
          </div>
      </div>
    </section>
  );
}