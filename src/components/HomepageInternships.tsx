import Link from 'next/link';

interface Internship {
  id: string;
  title: string;
  description: string;
}

interface Props {
  internships: Internship[];
}

const HomepageInternships: React.FC<Props> = ({ internships }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {internships.map((internship) => (
        <div key={internship.id} className="bg-white rounded-lg border border-indigo-200 shadow-sm hover:shadow-lg transition-all p-6">
          <h3 className="text-xl font-semibold text-purple-600">{internship.title}</h3>
          <p className="text-sm text-indigo-600">{internship.description}</p>
          <Link
            href={`/internships#${internship.id}`}
            className="mt-4 text-sm text-white bg-purple-600 hover:bg-indigo-600 px-4 py-2 rounded-lg"
          >
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
};