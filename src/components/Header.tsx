import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Crea Tests Interactivos
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Genera exámenes tipo test de forma sencilla y práctica. Perfecta para profesores y estudiantes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-white text-indigo-900 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center hover:bg-opacity-90 transition-all">
            Crear Test
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all">
            <BookOpen className="mr-2" />
            Ver Biblioteca
          </button>
        </div>
      </div>
    </header>
  );
}