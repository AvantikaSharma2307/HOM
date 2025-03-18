import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    features: ['5 Team Members', '10GB Storage', 'Basic Support'],
  },
  {
    name: 'Professional',
    price: 99,
    features: ['15 Team Members', '50GB Storage', 'Priority Support', 'Advanced Analytics'],
  },
  {
    name: 'Enterprise',
    price: 299,
    features: ['Unlimited Team Members', '500GB Storage', '24/7 Support', 'Custom Solutions'],
  },
];

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}