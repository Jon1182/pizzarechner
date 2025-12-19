import React from 'react';

interface Pizza {
  price: number;
  diameter: number;
  basePrice: number;
}

interface PizzaComparisonProps {
  pizzas: Pizza[];
}

const PizzaComparison: React.FC<PizzaComparisonProps> = ({ pizzas }) => {
  const sortedPizzas = [...pizzas].sort((a, b) => a.basePrice - b.basePrice);
  const best = sortedPizzas.length > 0 ? sortedPizzas[0] : null;
  const bestBasePrice = best ? best.basePrice : null;

  return (
    <div className="card card-neutral card-strong">
      <div className="card-body p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-brand-dark">Pizza Vergleich</h2>
          {sortedPizzas.length > 0 && <span className="badge badge-outline text-sm">{sortedPizzas.length} Einträge</span>}
        </div>

        <div className="overflow-x-auto">
          <table className="table table-compact table-zebra w-full">
            <thead>
              <tr>
                <th className="text-left">Preis (€)</th>
                <th className="text-left">Durchmesser (cm)</th>
                <th className="text-right">Grundpreis (€/cm²)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedPizzas.map((pizza, index) => (
                <tr key={index} className={index === 0 ? 'bg-primary/6' : ''}>
                  <td className="font-medium">{pizza.price.toFixed(2)} €</td>
                  <td>{pizza.diameter.toFixed(1)} cm</td>
                  <td className="text-right font-bold text-brand-dark">{pizza.basePrice.toFixed(4)}</td>
                  <td>{index === 0 && <span className="badge badge-success badge-sm">Günstigste</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {bestBasePrice !== null && sortedPizzas.length > 1 && (
          <p className="mt-4 text-sm text-muted">Die günstigste Pizza kostet <strong className="text-brand-dark">{bestBasePrice.toFixed(4)}</strong> €/cm².</p>
        )}
      </div>
    </div>
  );
}

export default PizzaComparison;