interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 text-center border border-purple-100 hover:shadow-lg transition-shadow duration-300">
      <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
        {number}
      </div>
      <div className="text-sm md:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { number: "3000+", label: "Community Members" },
    { number: "100+", label: "Upcoming Events" },
    { number: "50+", label: "Groups of Interns" },
    { number: "3000+", label: "Handpicked Internships" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}