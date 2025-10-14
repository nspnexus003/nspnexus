"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navigationLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/services", label: "SERVICES" },
  { href: "/internships", label: "INTERNSHIPS" },
  { href: "/contact", label: "CONTACT US" },
];

interface NavigationProps {
  currentPath?: string;
}

// Dropdown data
const serviceMenu = [
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

const internshipsList = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Application Development",
  "UI/UX Design",
  "Java Programming",
  "Python Programming",
  "C++ Programming",
  "Business Intelligence",
  "Internet of Things (IoT)",
  "Product Management Fundamentals",
  "Cloud Computing",
  "Digital Marketing",
  "Game Development",
  "React JS",
  "JavaScript Developer",
  "R Language",
];

const toSlug = (label: string) =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function Navigation({ currentPath = "/" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "services" | "internships">(null);
  const [mobileOpen, setMobileOpen] = useState<{ services: boolean; internships: boolean }>({ services: false, internships: false });
  // Outside click to close dropdowns
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const internshipsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        openMenu &&
        !servicesRef.current?.contains(target) &&
        !internshipsRef.current?.contains(target)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [openMenu]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-xl font-bold text-gray-900 hover:no-underline group"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dtbsyy5zm/image/upload/v1758882488/NSP_logo_emhzbg.jpg"
                alt="NSP NEXUS Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <span className="text-2xl font-bold tracking-wide text-[#1e3a8a] group-hover:text-primary transition-colors duration-200">
              <span style={{ color: "#1D3B63" }}>NSP</span>{" "}
              <span style={{ color: "#3399FF" }}>NEXUS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {/* Home */}
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary hover:no-underline ${currentPath === "/" ? "text-primary border-b-2 border-primary pb-1" : "text-gray-600"
                }`}
            >
              HOME
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary hover:no-underline ${currentPath === "/about" ? "text-primary border-b-2 border-primary pb-1" : "text-gray-600"
                }`}
            >
              ABOUT US
            </Link>

            {/* Services with dropdown */}
            <div ref={servicesRef} className="relative">
              {/* Clickable Services */}
              <div className="flex items-center gap-1 cursor-pointer">
                <Link
                  href="/services"
                  className={`text-sm font-medium transition-colors hover:text-primary ${currentPath === "/services"
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-gray-700"
                    }`}
                >
                  SERVICES
                </Link>
                <button
                  type="button"
                  title="Toggle services menu"
                  className="text-gray-600 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === "services" ? null : "services");
                  }}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openMenu === "services" ? "rotate-180" : ""
                      }`}
                  />
                </button>
              </div>

              {/* Dropdown Mega Menu */}
              {openMenu === "services" && (
                <div
                  className="
              absolute left-1/2 top-full mt-4
              -translate-x-1/2
              w-[95vw] max-w-6xl
              bg-white shadow-2xl border border-gray-200
              rounded-2xl p-6
              grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
              z-50
            "
                >
                  {serviceMenu.map((group) => (
                    <div key={group.id}>
                      <Link
                        href={`/services#${group.id}`}
                        onClick={() => setOpenMenu(null)}
                        className="block text-sm font-semibold text-gray-900 hover:text-primary mb-2"
                      >
                        {group.label}
                      </Link>
                      <div className="h-px bg-gray-200 mb-3" />
                      <ul className="space-y-2">
                        {group.services.map((s) => (
                          <li key={s}>
                            <Link
                              href={`/services#service-${toSlug(s)}`}
                              onClick={() => setOpenMenu(null)}
                              className="block text-sm text-gray-700 hover:text-primary"
                            >
                              {s}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Internships with separate text and dropdown */}
            <div ref={internshipsRef} className="relative flex items-center gap-1">
              {/* Clickable text for navigation */}
              <Link
                href="/internships"
                className={`text-sm font-medium transition-colors hover:text-primary hover:no-underline ${currentPath === "/internships" ? "text-primary border-b-2 border-primary pb-1" : "text-gray-600"

                  }`}
              >
                INTERNSHIPS
              </Link>
              <button
                type="button"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu(openMenu === "internships" ? null : "internships");
                }}
                aria-label="Toggle internships dropdown"
                title="Toggle internships dropdown"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === "internships" ? "rotate-180" : ""}`} />
              </button>
              {openMenu === "internships" && (
                <div
                  className="
                    absolute top-full left-1/2 -translate-x-1/2 
                    mt-4 
                    w-[95vw] md:w-[80vw] max-w-3xl 
                    max-h-[60vh] overflow-auto 
                    bg-white shadow-2xl border border-gray-200 rounded-2xl p-4 
                    grid grid-cols-1 sm:grid-cols-2 gap-2 z-50
                  "
                >
                  {internshipsList.map((item) => (
                    <Link
                      key={item}
                      href={`/internships#${toSlug(item)}`}
                      onClick={() => setOpenMenu(null)}
                      className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}


              {/* Contact */}
              <Link
                href="/contact"
                className={`ml-5 text-sm font-medium transition-colors hover:text-primary hover:no-underline ${currentPath === "/contact" ? "text-primary border-b-2 border-primary pb-1" : "text-gray-600"
                  }`}
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* right spacer to perfectly center the nav on desktop */}
          <div className="hidden md:block w-10" />

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-900 hover:bg-gray-100"
                >
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center space-x-2">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src="https://res.cloudinary.com/dtbsyy5zm/image/upload/v1758882488/NSP_logo_emhzbg.jpg"
                        alt="NSP NEXUS Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-lg font-bold tracking-wide text-[#1e3a8a]">
                      <span style={{ color: "#1D3B63" }}>NSP</span>{" "}
                      <span style={{ color: "#3399FF" }}>NEXUS</span>
                    </span>
                  </SheetTitle>
                </SheetHeader>
                {/* Scrollable container to ensure long dropdowns are accessible on small/medium screens */}
                <div className="mt-2 min-h-[calc(100vh-130px)] overflow-y-auto overscroll-contain pr-1 pb-8">
                  <div className="flex flex-col space-y-4">
                    {navigationLinks
                      .filter((l) => !["/services", "/internships"].includes(l.href))
                      .map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between py-3 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50 hover:no-underline ${currentPath === link.href
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "text-gray-600"
                            }`}
                        >
                          <span>{link.label}</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      ))}
                    {/* Mobile dropdown accordion */}
                    <div className="pt-2">
                      <div className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50">
                        {/* Services text should link to /services */}
                        <Link
                          href="/services"
                          onClick={() => setIsOpen(false)}
                          className="flex-1 text-left"
                        >
                          Services
                        </Link>

                        {/* Dropdown arrow toggles only the list */}
                        <button
                          type="button"
                          title="Toggle services menu"
                          onClick={() => setMobileOpen((p) => ({ ...p, services: !p.services }))}
                          className="p-2"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${mobileOpen.services ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      {/* Dropdown list */}
                      <div
                        className={`overflow-hidden transition-[max-height] duration-300 ${mobileOpen.services ? "min-h-[1000px]" : "max-h-0"
                          }`}
                      >
                        {serviceMenu.map((d) => (
                          <div key={d.id} className="py-1">
                            <Link
                              href={`/services#${d.id}`}
                              onClick={() => setIsOpen(false)}
                              className="block px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-md"
                            >
                              {d.label}
                            </Link>
                            <div className="pl-6">
                              {d.services.map((s) => (
                                <Link
                                  key={s}
                                  href={`/services#service-${toSlug(s)}`}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                                >
                                  {s}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50">
                        {/* Internships text should link to /internships */}
                        <Link
                          href="/internships"
                          onClick={() => setIsOpen(false)}
                          className="flex-1 text-left"
                        >
                          Internships
                        </Link>

                        {/* Dropdown arrow toggles only the list */}
                        <button
                          type="button"
                          title="Toggle internships menu"
                          onClick={() => setMobileOpen((p) => ({ ...p, internships: !p.internships }))}
                          className="p-2"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${mobileOpen.internships ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      {/* Dropdown list */}
                      <div
                        className={`overflow-hidden transition-[max-height] duration-300 ${mobileOpen.internships ? "max-h-[1500px]" : "max-h-0"
                          }`}
                      >
                        {internshipsList.map((i) => (
                          <Link
                            key={i}
                            href={`/internships#${toSlug(i)}`}
                            onClick={() => setIsOpen(false)}
                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                          >
                            {i}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}