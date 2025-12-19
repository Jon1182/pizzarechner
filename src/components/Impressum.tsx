import React from 'react';

/**
 * Impressum-Komponente
 * Enthält die gesetzlich erforderlichen Pflichtangaben (Platzhalter).
 * Semantisch korrekt umgesetzt mit <section>, <h1> und <address>.
 */
const Impressum: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="card card-neutral">
        <div className="card-body p-6">
          <h1 className="text-2xl font-semibold mb-4 text-primary">Impressum</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Unternehmen</h3>
                <p className="text-sm text-gray-700">8thsense</p>
                <p className="text-sm text-gray-700">Rechtsform: GmbH (Platzhalter)</p>
              </div>

              <div>
                <h3 className="font-semibold">Anschrift</h3>
                <address className="not-italic text-sm text-gray-700">
                  Nordfelder Reihe 4a<br />
                  30159 Hannover<br />
                  Deutschland
                </address>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Kontakt</h3>
                <p className="text-sm text-gray-700"><a href="mailto:info@example.com" className="link link-primary">info@8thsense.com</a></p>
              </div>

              <div>
                <h3 className="font-semibold">Verantwortlich</h3>
                <p className="text-sm text-gray-700">Max Mustermann (Platzhalter)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-right">
            <a href="#" className="btn btn-ghost">Zurück zur App</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
