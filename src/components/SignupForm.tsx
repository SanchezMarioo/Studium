import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function SignupForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email registrado:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-indigo-900 dark:bg-indigo-950 text-white transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          ¿Listo para Empezar?
        </h2>
        <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
          Únete a miles de equipos que ya están transformando su forma de trabajar
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-full bg-white bg-opacity-10 text-white placeholder-indigo-200 border-2 border-transparent focus:border-indigo-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white dark:bg-indigo-400 text-indigo-900 dark:text-white px-8 py-4 rounded-full font-semibold flex items-center hover:bg-opacity-90 transition-all"
            >
              <Send className="mr-2 h-5 w-5" />
              Registrarse
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-indigo-200">
          14 días de prueba gratis. No se requiere tarjeta de crédito.
        </p>
      </div>
    </section>
  );
}