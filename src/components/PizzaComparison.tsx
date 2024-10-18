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

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-orange-800">Pizza Vergleich</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-orange-100">
            <th className="px-4 py-2 text-left">Preis (€)</th>
            <th className="px-4 py-2 text-left">Durchmesser (cm)</th>
            <th className="px-4 py-2 text-left">Grundpreis (€/cm²)</th>
          </tr>
        </thead>
        <tbody>
          {sortedPizzas.map((pizza, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="px-4 py-2">{pizza.price.toFixed(2)}</td>
              <td className="px-4 py-2">{pizza.diameter.toFixed(1)}</td>
              <td className="px-4 py-2">{pizza.basePrice.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {sortedPizzas.length > 1 && (
        <p className="mt-4 text-green-700 font-semibold">
          Die günstigste Pizza kostet {sortedPizzas[0].basePrice.toFixed(4)} €/cm².
        </p>
      )}
    </div>
  );
};

export default PizzaComparison;