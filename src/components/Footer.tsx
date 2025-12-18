import React from 'react';

/**
 * Footer mit Link zum Impressum. Link nutzt Hash-Navigation (#impressum),
 * sodass keine zusätzliche Routing-Bibliothek nötig ist.
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-orange-100 mt-8 py-4">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between text-sm text-gray-700">
        <span>© {new Date().getFullYear()} 8thsense</span>
        <nav>
          <a href="#impressum" className="text-orange-700 hover:underline">
            Impressum
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
