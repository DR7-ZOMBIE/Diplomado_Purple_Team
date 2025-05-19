// src/components/Schedule.jsx
import React from 'react';

const TIME = '5 p.m. – 9 p.m.';

/* ─────────────────────────  S E S S I O N S  ───────────────────────── */
const sessions = [
  /* ─── Junio ─── */
  { id: 1,  date: '2025-06-05', topic: 'OSINT',               hours: 4, docent: 'Juan Esteban Sierra' },
  { id: 2,  date: '2025-06-10', topic: 'OSINT',               hours: 4, docent: 'Juan Esteban Sierra' },
  { id: 3,  date: '2025-06-12', topic: 'Web',                 hours: 4, docent: 'Juan Sebastián Velásquez' },
  { id: 4,  date: '2025-06-17', topic: 'Web',                 hours: 4, docent: 'Juan Sebastián Velásquez' },
  { id: 5,  date: '2025-06-19', topic: 'Web',                 hours: 4, docent: 'Juan Sebastián Velásquez' },
  { id: 6,  date: '2025-06-24', topic: 'Web',                 hours: 4, docent: 'Juan Sebastián Velásquez' },
  { id: 7,  date: '2025-06-26', topic: 'Web',                 hours: 4, docent: 'Juan Sebastián Velásquez' },

  /* ─── Julio ─── */
  { id: 8,  date: '2025-07-01', topic: 'Redes',               hours: 4, docent: 'Juan Esteban Sierra' },
  { id: 9,  date: '2025-07-03', topic: 'Redes',               hours: 4, docent: 'Juan Esteban Sierra' },
  { id: 10, date: '2025-07-08', topic: 'Seguridad en la Nube', hours: 4, docent: 'Pablo Pérez Posada' },
  { id: 11, date: '2025-07-10', topic: 'Seguridad en la Nube', hours: 4, docent: 'Pablo Pérez Posada' },
  { id: 12, date: '2025-07-15', topic: 'Seguridad en la Nube', hours: 4, docent: 'Pablo Pérez Posada' },
  { id: 13, date: '2025-07-17', topic: 'Seguridad en la Nube', hours: 4, docent: 'Pablo Pérez Posada' },
  { id: 14, date: '2025-07-22', topic: 'Seguridad en la Nube', hours: 4, docent: 'Pablo Pérez Posada' },
  { id: 15, date: '2025-07-24', topic: 'Seguridad en la Nube', hours: 4, docent: 'Pablo Pérez Posada' },
  { id: 16, date: '2025-07-29', topic: 'Móvil',               hours: 4, docent: 'Juan Sebastián Velásquez' },
  { id: 17, date: '2025-07-31', topic: 'Móvil',               hours: 4, docent: 'Juan Sebastián Velásquez' },

  /* ─── Agosto ─── */
  { id: 18, date: '2025-08-05', topic: 'Móvil',               hours: 4, docent: 'Juan Sebastián Velásquez' },
  { id: 19, date: '2025-08-12', topic: 'Móvil',               hours: 4, docent: 'Juan Sebastián Velásquez' },
  { id: 20, date: '2025-08-14', topic: 'Explotación',         hours: 4, docent: 'Juan Esteban Sierra' },
  { id: 21, date: '2025-08-19', topic: 'Explotación',         hours: 4, docent: 'Juan Esteban Sierra' },
  { id: 22, date: '2025-08-21', topic: 'Explotación',         hours: 4, docent: 'Juan Esteban Sierra' },
  { id: 23, date: '2025-08-26', topic: 'Directorio Activo',   hours: 4, docent: 'Oscar Uribe' },
  { id: 24, date: '2025-08-28', topic: 'Directorio Activo',   hours: 4, docent: 'Oscar Uribe' },

  /* ─── Septiembre ─── */
  { id: 25, date: '2025-09-02', topic: 'Directorio Activo',   hours: 4, docent: 'Oscar Uribe' },
  { id: 26, date: '2025-09-04', topic: 'Directorio Activo',   hours: 4, docent: 'Oscar Uribe' },
  { id: 27, date: '2025-09-09', topic: 'Forense Digital',     hours: 4, docent: 'Dennis Juilland' },
  { id: 28, date: '2025-09-11', topic: 'Forense Digital',     hours: 4, docent: 'Dennis Juilland' },
  { id: 29, date: '2025-09-16', topic: 'Forense Digital',     hours: 4, docent: 'Dennis Juilland' },
  { id: 30, date: '2025-09-18', topic: 'Forense Digital',     hours: 4, docent: 'Dennis Juilland' },
];

/* Convierte 'YYYY-MM-DD' en una fecha local sin desplazamiento de zona */
const toLocalDate = (isoDate) => {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d);          // mes base-cero
};

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 bg-[var(--base-light)]">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-[var(--brand-blue)] text-center mb-10">
          Cronograma destacado
        </h2>

        {/* ——— Versión escritorio ——— */}
        <div className="hidden md:block overflow-x-auto shadow-xl rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-[var(--brand-blue)] text-white">
              <tr>
                {['Sesión', 'Fecha', 'Horario', 'Módulo / Tema', 'Duración (h)', 'Docente']
                  .map(h => <th key={h} className="py-3 px-6 text-center">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {sessions.map((s, i) => {
                const dateObj = toLocalDate(s.date);
                return (
                  <tr key={s.id}
                      className={`${i % 2 ? 'bg-white' : 'bg-[var(--base-light)]'} hover:bg-[var(--accent)]/20 transition`}>
                    <td className="py-3 px-6 text-center">{s.id}</td>
                    <td className="py-3 px-6 text-center">
                      {dateObj.toLocaleDateString('es-CO', {
                        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
                      })}
                    </td>
                    <td className="py-3 px-6 text-center">{TIME}</td>
                    <td className="py-3 px-6 text-center text-[var(--primary)] italic">{s.topic}</td>
                    <td className="py-3 px-6 text-center">{s.hours}</td>
                    <td className="py-3 px-6 text-center">{s.docent}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ——— Versión móvil ——— */}
        <div className="md:hidden space-y-4">
          {sessions.map(s => {
            const dateObj = toLocalDate(s.date);
            return (
              <div key={s.id} className="bg-white shadow-md rounded-xl p-4 text-center">
                <h3 className="font-semibold">Sesión {s.id}</h3>
                <p className="text-[var(--brand-blue)]">
                  {dateObj.toLocaleDateString('es-CO', {
                    weekday: 'long', day: 'numeric', month: 'long'
                  })}
                </p>
                <p className="text-sm">{TIME}</p>
                <p className="mt-1 italic text-[var(--primary)]">{s.topic}</p>
                <p className="text-xs text-gray-600">{s.docent}</p>
                <span className="block mt-1 font-semibold">{s.hours} h</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
