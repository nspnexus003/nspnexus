import Link from 'next/link';
import { useState } from 'react';

interface Domain {
  id: string;
  label: string;
  services: string[];
}

const domains: Domain[] = [
  {
    id: "domain1",
    label: "Domain 1",
    services: ["Service 1", "Service 2"]
  }
  // Add more domains as needed
];

export default function HomepageServices() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {domains.map((domain: Domain) => (
        <div key={domain.id} className="bg-white rounded-lg border border-indigo-200 shadow-sm hover:shadow-lg transition-all p-6">
          <div className="relative">
            {/* Text Label Navigates to Full Page */}
            <Link href={`/services#${domain.id}`} className="text-xl font-semibold text-purple-600 hover:text-indigo-600">
              {domain.label}
            </Link>
            {/* Dropdown Arrow Toggles Menu */}
            <button
              className="ml-2 text-purple-600 hover:text-indigo-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              ▼
            </button>
            {dropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-64 bg-white border border-indigo-200 rounded-lg shadow-lg overflow-y-auto max-h-64"
              >
                <ul className="space-y-2 p-4">
                  {domain.services.map((service) => (
                    <li key={service}>
                      <Link
                        href={`/services#${domain.id}`}
                        className="block text-sm text-indigo-600 hover:text-purple-600"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="h-px bg-indigo-200 my-3" />
          <ul className="space-y-2">
            {domain.services.map((service) => (
              <li key={service} className="text-sm text-indigo-600 hover:text-purple-600">
                • {service}
              </li>
            ))}
          </ul>
          <button
            className="mt-4 text-sm text-white bg-purple-600 hover:bg-indigo-600 px-4 py-2 rounded-lg"
            onClick={() => window.location.href = "/contact"}
          >
            Contact Us
          </button>
        </div>
      ))}
    </div>
  );
}