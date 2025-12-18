import React from 'react';

/**
 * Impressum-Komponente
 * Enthält die gesetzlich erforderlichen Pflichtangaben (Platzhalter).
 * Semantisch korrekt umgesetzt mit <section>, <h1> und <address>.
 */
const Impressum: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h1 className="text-2xl font-semibold mb-4 text-orange-800">Impressum</h1>

      <address className="not-italic text-sm text-gray-700">
        <p className="mb-2">
          <strong>Firmenname / Betreiber:</strong> 8thsense
        </p>

        {/* <p className="mb-2">
          <strong>Rechtsform:</strong> Gesellschaft mit beschränkter Haftung (GmbH) (Platzhalter)
        </p> */}

        <p className="mb-2">
          <strong>Anschrift:</strong>
          <br />
          Nordfelder Reihe 4a
          <br />
          30159 Hannover
          <br />
          Deutschland
        </p>

        <p className="mb-2">
          <strong>Kontakt:</strong>
          <br />
          E-Mail: <a className="text-orange-600 underline" href="mailto:info@example.com">info@8thsense.com</a>
        </p>

        <p className="mb-2">
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
          <br />
          Max Mustermann (Platzhalter)
        </p>

        
      </address>

      {/* "Zurück"-Link: entfernt Hash, damit Nutzer wieder auf Hauptseite gelangen */}
      <div className="mt-4 text-right">
        <a href="#" className="text-sm text-orange-600 underline">
          Zurück zur App
        </a>
      </div>
    </section>
  );
};

export default Impressum;
