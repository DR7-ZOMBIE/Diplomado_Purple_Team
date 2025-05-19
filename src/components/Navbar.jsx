// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const baseLink =
  'block text-lg font-medium text-white hover:text-[var(--cta)] transition-colors duration-150';

const DesktopBtn = (
  <a
    href="https://eiadigital.eia.edu.co/sao/inscripcionesCursoExtension.do?idCohorte=34646"
    className="hidden 2xl:inline-block whitespace-nowrap bg-[var(--cta)] text-[var(--brand-blue)] font-semibold px-8 py-3 rounded-full shadow hover:bg-white hover:text-[var(--brand-blue)] transition-colors duration-200"
  >
    ¡Inscríbete!
  </a>
);

const MenuLink = ({ to, label, setOpen, extra = '' }) => (
  <NavLink
    to={to}
    onClick={() => setOpen(false)}
    className={({ isActive }) =>
      `${baseLink} ${extra} ${isActive ? 'underline decoration-[var(--cta)]' : ''}`
    }
  >
    {label}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /* Evitar scroll en fondo + cerrar con Esc */
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  return (
    /* fixed + inset-x-0 = siempre pegado de borde a borde */
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--brand-blue)]/80 backdrop-blur shadow-sm">
      {/* El wrapper solo se centra en ≥ 2xl  (1536 px) */}
      <div className="flex items-center justify-between w-full px-4 sm:px-6 py-4 2xl:max-w-screen-xl 2xl:mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl 2xl:text-3xl font-serif font-extrabold text-white tracking-wide"
        >
          Diplomado Purple Team
        </Link>

        {/* Links desktop */}
        <div className="hidden 2xl:flex items-center gap-10">
          <MenuLink to="/"        label="Inicio"   setOpen={setOpen} />
          <MenuLink to="/modules" label="Módulos"  setOpen={setOpen} />
          <MenuLink to="/docentes" label="Docentes" setOpen={setOpen} />
          {DesktopBtn}
        </div>

        {/* Hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="relative w-9 h-7 2xl:hidden focus:outline-none"
        >
          <span className={`absolute w-full h-0.5 bg-white rounded transition-transform duration-300 ${open ? 'rotate-45 top-[14px]' : 'top-1'}`} />
          <span className={`absolute w-full h-0.5 bg-white rounded transition-opacity duration-200 ${open ? 'opacity-0' : 'top-[14px]'}`} />
          <span className={`absolute w-full h-0.5 bg-white rounded transition-transform duration-300 ${open ? '-rotate-45 top-[14px]' : 'top-6'}`} />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 2xl:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 h-screen w-full sm:w-4/5 md:w-1/2 bg-[var(--brand-blue)] shadow-xl flex flex-col gap-8 p-10 transform transition-transform duration-300 ease-out 2xl:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <MenuLink to="/"        label="Inicio"   setOpen={setOpen} extra="text-2xl" />
        <MenuLink to="/modules" label="Módulos"  setOpen={setOpen} extra="text-2xl" />
        <MenuLink to="/docentes" label="Docentes" setOpen={setOpen} extra="text-2xl" />
        <a
          href="https://eiadigital.eia.edu.co/sao/inscripcionesCursoExtension.do?idCohorte=34646"
          className="w-full text-center bg-[var(--cta)] text-[var(--brand-blue)] font-semibold px-8 py-4 rounded-full shadow hover:bg-white hover:text-[var(--brand-blue)] transition-colors duration-200"
        >
          ¡Inscríbete!
        </a>
      </aside>
    </header>
  );
}
