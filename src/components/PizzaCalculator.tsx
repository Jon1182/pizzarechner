import React, { useState } from 'react';

interface PizzaCalculatorProps {
  onAddPizza: (price: number, diameter: number) => void;
}

const PizzaCalculator: React.FC<PizzaCalculatorProps> = ({ onAddPizza }) => {
  const [price, setPrice] = useState<string>('');
  const [diameter, setDiameter] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const priceNum = parseFloat(price);
    const diameterNum = parseFloat(diameter);
    if (priceNum > 0 && diameterNum > 0) {
      onAddPizza(priceNum, diameterNum);
      setPrice('');
      setDiameter('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
          Preis (€)
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          step="0.01"
          min="0"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="diameter" className="block text-sm font-medium text-gray-700 mb-1">
          Durchmesser (cm)
        </label>
        <input
          type="number"
          id="diameter"
          value={diameter}
          onChange={(e) => setDiameter(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          step="0.1"
          min="0"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300"
      >
        Pizza hinzufügen
      </button>
    </form>
  );
};

export default PizzaCalculator;