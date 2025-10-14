import { 
  Code, 
  FileCode, 
  SquareCode, 
  MonitorSmartphone, 
  TabletSmartphone, 
  LayoutGrid,
  Grid3x3,
  Columns3,
  Grid2x2
} from "lucide-react";

interface InternshipCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: InternshipCategory[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Explore cutting-edge AI technologies and build intelligent systems",
    icon: Grid3x3,
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Develop predictive models and data-driven solutions",
    icon: LayoutGrid,
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Analyze complex datasets and extract meaningful insights",
    icon: Grid2x2,
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Build modern, responsive web applications and websites",
    icon: MonitorSmartphone,
  },
  {
    id: "android-dev",
    title: "Android Development",
    description: "Create innovative mobile applications for Android platform",
    icon: TabletSmartphone,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Design intuitive user interfaces and exceptional user experiences",
    icon: Columns3,
  },
  {
    id: "java",
    title: "Java Programming",
    description: "Master object-oriented programming with Java",
    icon: Code,
  },
  {
    id: "python",
    title: "Python Programming",
    description: "Learn versatile programming with Python for various applications",
    icon: FileCode,
  },
  {
    id: "cpp",
    title: "C++ Programming",
    description: "Develop high-performance applications with C++",
    icon: SquareCode,
  },
];

export default function InternshipsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[--text-dark] mb-4">
            Internship Opportunities
          </h2>
          <p className="text-lg text-[--text-medium] max-w-2xl mx-auto">
            Explore diverse internship programs designed to accelerate your career 
            in technology and innovation
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-white border border-[--border] rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[--primary] to-[--accent] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-[--text-dark] mb-3 group-hover:text-[--primary] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-[--text-medium] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[--primary] to-[--accent] rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[--primary] to-[--accent] text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}