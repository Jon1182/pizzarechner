import React from 'react';

/**
 * Footer mit Link zum Impressum. Link nutzt Hash-Navigation (#impressum),
 * sodass keine zusätzliche Routing-Bibliothek nötig ist.
 */
const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-base-100 border-t border-gray-100 dark:border-gray-800 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-sm text-muted">
        <div>© {new Date().getFullYear()} 8thsense — Alle Rechte vorbehalten</div>
        <nav>
          <a href="#impressum" className="link link-hover hover:text-primary">Impressum</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
