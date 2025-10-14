"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight"
              >
                Virtual Internship & Services{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Program
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-text-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Launch your career with hands-on experience through our comprehensive virtual internship program. Connect with industry professionals and build the skills that matter.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Now
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-purple-200"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-text-medium">Interns Placed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-indigo-600">50+</div>
                <div className="text-sm text-text-medium">Partner Companies</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-text-medium">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Background Decoration */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-3xl transform rotate-6 opacity-20"
              />
              
              <motion.div
                animate={{ 
                  rotate: [0, -3, 3, 0],
                  scale: [1, 1.01, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-3xl transform -rotate-3 opacity-15"
              />

              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl shadow-2xl p-8 border border-purple-100"
              >
                <div className="aspect-square bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center">
                  {/* Animated Elements */}
                  <div className="relative w-full h-full">
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-60"
                    />
                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute top-1/3 right-1/3 w-12 h-12 bg-indigo-300 rounded-full opacity-50"
                    />
                    <motion.div
                      animate={{ y: [-5, 15, -5] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-purple-200 rounded-full opacity-40"
                    />
                    
                    {/* Center Icon/Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-purple-100"
                >
                  <div className="text-xs font-semibold text-purple-600">Virtual</div>
                  <div className="text-xs text-text-medium">Experience</div>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-indigo-100"
                >
                  <div className="text-xs font-semibold text-indigo-600">Career</div>
                  <div className="text-xs text-text-medium">Ready</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}