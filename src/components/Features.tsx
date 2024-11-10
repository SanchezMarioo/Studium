import React from 'react';
import { BookOpen, Clock, Share2, Shield } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    title: 'Creación Sencilla',
    description: 'Crea tests de forma rápida y sencilla con nuestro editor intuitivo.'
  },
  {
    icon: <Clock className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    title: 'Tiempo Controlado',
    description: 'Establece límites de tiempo para cada test y pregunta.'
  },
  {
    icon: <Share2 className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    title: 'Comparte Fácilmente',
    description: 'Comparte tus tests con estudiantes o compañeros con un solo clic.'
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    title: 'Resultados Seguros',
    description: 'Almacenamiento seguro de resultados y estadísticas detalladas.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Todo lo que Necesitas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Herramientas completas para crear y gestionar tus tests
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}