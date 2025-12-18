import React, { useEffect, useState } from 'react';
import { Pizza } from 'lucide-react';
import PizzaCalculator from './components/PizzaCalculator';
import PizzaComparison from './components/PizzaComparison';
import Footer from './components/Footer';
import Impressum from './components/Impressum';

function App() {
  const [pizzas, setPizzas] = useState<Array<{ price: number; diameter: number; basePrice: number }>>([]);
  // Anzeige für die Hash-basierte Navigation (z. B. #impressum)
  const [showImpressum, setShowImpressum] = useState<boolean>(typeof window !== 'undefined' && window.location.hash === '#impressum');

  // Listener für Hash-Änderungen, damit der Link von überall funktioniert
  useEffect(() => {
    const handler = () => setShowImpressum(window.location.hash === '#impressum');
    window.addEventListener('hashchange', handler);
    // initial setzen
    handler();
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const addPizza = (price: number, diameter: number) => {
    const area = Math.PI * Math.pow(diameter / 2, 2);
    const basePrice = price / area;
    setPizzas([...pizzas, { price, diameter, basePrice }]);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-start p-4">
      <header className="w-full flex justify-center mt-6">
        <h1 className="text-3xl font-bold mb-8 text-orange-800 flex items-center">
          <Pizza className="mr-2" /> Pizza Preis-Rechner
        </h1>
      </header>

      <main className="flex-grow w-full max-w-4xl">
        {showImpressum ? (
          <Impressum />
        ) : (
          <section>
            <PizzaCalculator onAddPizza={addPizza} />
            {pizzas.length > 0 && <PizzaComparison pizzas={pizzas} />}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;