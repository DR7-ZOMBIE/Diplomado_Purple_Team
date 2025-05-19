import React from 'react';

export default function HeroSection() {
  const tarifas = [
    {
      title: 'Comunidad EIA',
      subtitle: 'Estudiantes pregrado y posgrado, empleados y egresados',
      prontoPago: '$3.152.000',
      general: '$3.625.000',
    },
    {
      title: 'Empresas con convenio',
      subtitle: '',
      prontoPago: '$3.546.000',
      general: '$4.078.000',
    },
    {
      title: 'Público general',
      subtitle: '',
      prontoPago: '$3.940.000',
      general: '$4.531.000',
    },
  ];

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

      {/* Tabla de tarifas */}
      <div className="mt-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
          Tarifa por tipo de participante
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {tarifas.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[var(--brand-blue)] rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-[1.02] transition-transform"
            >
              <h4 className="text-xl font-bold mb-1">{item.title}</h4>
              {item.subtitle && <p className="text-sm text-gray-500 mb-4">{item.subtitle}</p>}

              <div className="text-4xl font-extrabold text-[var(--cta)] mb-1">{item.prontoPago}</div>
              <p className="text-sm text-[var(--primary)] mb-4">
                Pronto pago hasta el 22 de mayo de 2025
              </p>

              <div className="w-full border-t border-gray-300 my-4" />

              <p className="text-sm text-gray-600">Tarifa general a partir del 23 de mayo 2025</p>
              <div className="text-2xl font-semibold text-[var(--brand-blue)] mt-1">{item.general}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://eiadigital.eia.edu.co/sao/inscripcionesCursoExtension.do?idCohorte=34646"
            className="bg-white text-[var(--brand-blue)] font-semibold py-4 px-10 rounded-full shadow-md
                       hover:bg-[var(--cta)] hover:text-white transition"
          >
            Inscribirme al diplomado
          </a>
        </div>
      </div>
    </section>
  );
}
