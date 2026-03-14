import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/danielbarrow92/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.867 0-2.154 1.46-2.154 2.968v5.697h-3v-10h2.879v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.036 0 3.596 1.999 3.596 4.597v5.598z" />
          </svg>
        </a>
        <span className="text-sm">&copy; {new Date().getFullYear()} Daniel Barrow</span>
      </div>
    </footer>
  );
}
