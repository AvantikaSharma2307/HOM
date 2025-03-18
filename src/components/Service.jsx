import React from 'react';
import { Zap, Shield, Rocket } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized solutions.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Built with security first mindset to protect your valuable data.',
  },
  {
    icon: Rocket,
    title: 'Scale with Ease',
    description: 'Grow your business without worrying about technical limitations.',
  },
];

export function Service() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}