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
    <form onSubmit={handleSubmit} className="card card-neutral card-strong mb-6">
      <div className="card-body p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-brand-dark">Neue Pizza hinzufügen</h3>
          <span className="text-sm text-muted">Schnell & präzise</span>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-1">Preis (€)</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input input-bordered w-full shadow-none focus:shadow-none appearance-none"
              step="0.01"
              min="0"
              placeholder="z.B. 12.50"
              required
            />
          </div>

          <div>
            <label htmlFor="diameter" className="block text-sm font-medium mb-1">Durchmesser (cm)</label>
            <input
              type="number"
              id="diameter"
              value={diameter}
              onChange={(e) => setDiameter(e.target.value)}
              className="input input-bordered w-full shadow-none focus:shadow-none appearance-none"
              step="0.1"
              min="0"
              placeholder="z.B. 32"
              required
            />
          </div>

          <div className="card-actions mt-2">
            <button type="submit" className="btn btn-primary-dark w-full border-0 shadow-md transition-transform duration-150">Pizza hinzufügen</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PizzaCalculator;