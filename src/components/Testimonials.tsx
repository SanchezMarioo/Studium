import React from 'react';

const testimonials = [
  {
    quote: "Ha transformado completamente la forma en que trabajamos. No puedo imaginar volver atrás.",
    author: "María González",
    position: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "La mejor inversión que hemos hecho para nuestro equipo en los últimos años.",
    author: "Carlos Ruiz",
    position: "Director de Producto, InnovaCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    quote: "Increíblemente intuitivo y potente. Nuestro equipo es 3x más productivo.",
    author: "Ana Martínez",
    position: "CTO, DataFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Lo que Dicen Nuestros Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}