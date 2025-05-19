import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--primary)] text-white text-center py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif font-extrabold mb-6 drop-shadow-md">
          Diplomado en Ciberseguridad Integral
        </h2>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Estrategias ofensivas y defensivas unificadas con enfoque Purple Team.
        </p>

        <p className="mb-10 max-w-prose mx-auto text-base md:text-lg opacity-90">
          Aprende de expertos con experiencia real y domina habilidades de hacking ético, defensa,
          análisis forense, OSINT y más.
        </p>

        <a
          href="https://eiadigital.eia.edu.co/sao/inscripcionesCursoExtension.do?idCohorte=34646"
          className="bg-[var(--cta)] text-[var(--brand-blue)] font-semibold py-4 px-10 rounded-full
                     hover:bg-white hover:text-[var(--brand-blue)] transition"
        >
          ¡Inscríbete ahora!
        </a>
      </div>
    </section>
  );
}
