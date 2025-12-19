import { useEffect, useState } from 'react';
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
    <div className="min-h-screen bg-pizza-orange text-base-content font-sans pb-28 md:pb-32">
      {/* Header removed by request */}

      <main className="flex-grow w-full max-w-6xl mx-auto">
        {showImpressum ? (
          <Impressum />
        ) : (
          <section className="space-y-8 md:space-y-12 px-4 py-8 md:py-12">
            <div className="card card-neutral card-strong text-center py-8 md:py-8 px-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-primary rounded-full mb-4">
                <Pizza className="h-7 w-7" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-sm text-brand-dark">Finde die beste Pizza für dein Geld</h1>
              <p className="mt-2 text-lg text-muted max-w-2xl mx-auto">Vergleiche den Grundpreis (€/cm²) verschiedener Pizzen — schnell, einfach und transparent.</p>
              <div className="flex justify-center gap-3 mt-5">
                <span className="badge badge-primary">Schnell</span>
                <span className="badge badge-secondary">Einfach</span>
                <span className="badge badge-accent">Transparent</span>
              </div>
            </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <PizzaCalculator onAddPizza={addPizza} />
                </div>

              <div className="lg:col-span-2">
                {pizzas.length > 0 && <PizzaComparison pizzas={pizzas} />}
                {pizzas.length === 0 && (
                  <div className="card card-neutral card-strong">
                    <div className="card-body text-center py-12">
                      <div className="text-6xl mb-4">🍕</div>
                      <h3 className="text-xl font-semibold mb-2 text-brand-dark">Bereit zum Vergleichen?</h3>
                      <p className="text-muted">Füge deine erste Pizza hinzu, um mit dem Vergleich zu beginnen.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;