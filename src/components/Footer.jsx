import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--brand-blue)] text-white py-12 mt-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Diplomado Purple Team</h2>

        <p className="text-lg mb-6">Universidad EIA</p>

        <div className="space-x-6 mb-6">
          <a
            href="https://eiadigital.eia.edu.co/sao/"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-medium hover:text-[var(--cta)] transition-colors"
          >
            EIA Digital
          </a>
          <a
            href="https://latincybersecuritychallenge.com"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-medium hover:text-[var(--cta)] transition-colors"
          >
            LACC
          </a>
        </div>

        <hr className="border-gray-200 opacity-50 mb-6" />

        <div className="flex justify-center items-center space-x-6 mt-4">
          <p className="text-sm opacity-70">
            © {year} Diplomado Purple Team. Todos los derechos reservados.
          </p>
          <a
            href="https://www.mineducacion.gov.co/portal/"
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase font-semibold opacity-75 hover:underline"
          >
            Vigilado MinEducación
          </a>
        </div>
      </div>
    </footer>
  );
}
