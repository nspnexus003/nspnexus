import { 
  Computer, 
  MonitorSmartphone, 
  LayoutGrid, 
  Grid3x3, 
  LayoutList, 
  PanelTopDashed, 
  LayoutPanelTop, 
  Proportions, 
  SquareDivide 
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const domains = [
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

const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-black-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Domains preview grid linking to Services page anchors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white rounded-lg border border-indigo-200 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <Link
                  href={`/services#${domain.id}`}
                  className="text-xl font-semibold text-purple-600 hover:text-indigo-600"
                >
                  {domain.label}
                </Link>
                <div className="h-px bg-indigo-200 my-3" />
                <ul className="space-y-2">
                  {domain.services.map((service) => (
                    <li key={service} className="text-sm text-black">
                      • {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto text-right">
                <button
                  className="mt-4 text-sm text-white bg-purple-600 hover:bg-indigo-600 px-4 py-2 rounded-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}