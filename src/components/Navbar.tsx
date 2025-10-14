import Link from "next/link";
import { useState } from "react";

const domains = [
  { id: 'web-development', label: 'Web Development' },
  { id: 'mobile-development', label: 'Mobile Development' },
  { id: 'cloud-computing', label: 'Cloud Computing' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'cybersecurity', label: 'Cybersecurity' }
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <img src="/logo.png" alt="NSP Nexus" className="h-8" />
          </Link>
        </div>

        {/* Links */}
        <div className="navbar-links hidden md:flex items-center gap-6">
          <Link href="/" className="text-purple-600 hover:text-indigo-600">
            Home
          </Link>
          <Link href="/about" className="text-purple-600 hover:text-indigo-600">
            About Us
          </Link>
          <div className="relative">
            <button
              className="text-purple-600 hover:text-indigo-600 font-medium"
              onClick={() => window.location.href = "/services"}
            >
              Services
            </button>
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
                  {domains.map((domain) => (
                    <li key={domain.id}>
                      <Link
                        href={`/services#${domain.id}`}
                        className="block text-sm text-indigo-600 hover:text-purple-600"
                      >
                        {domain.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link href="/internships" className="text-purple-600 hover:text-indigo-600">
            Internships
          </Link>
          <Link href="/contact" className="text-purple-600 hover:text-indigo-600">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-purple-600 hover:text-indigo-600">
          Menu
        </button>
      </div>
    </nav>
  );
}