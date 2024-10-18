import React, { useState } from 'react';
import { Pizza } from 'lucide-react';
import PizzaCalculator from './components/PizzaCalculator';
import PizzaComparison from './components/PizzaComparison';

function App() {
  const [pizzas, setPizzas] = useState<Array<{ price: number; diameter: number; basePrice: number }>>([]);

  const addPizza = (price: number, diameter: number) => {
    const area = Math.PI * Math.pow(diameter / 2, 2);
    const basePrice = price / area;
    setPizzas([...pizzas, { price, diameter, basePrice }]);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-orange-800 flex items-center">
        <Pizza className="mr-2" /> Pizza Preis-Rechner
      </h1>
      <PizzaCalculator onAddPizza={addPizza} />
      {pizzas.length > 0 && <PizzaComparison pizzas={pizzas} />}
    </div>
  );
}

export default App;