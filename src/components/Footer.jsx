import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-blue)] text-white py-12 mt-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Diplomado Purple Team</h2>

        <p className="text-lg mb-6">
          Universidad EIA
        </p>

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

        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Diplomado Purple Team. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
