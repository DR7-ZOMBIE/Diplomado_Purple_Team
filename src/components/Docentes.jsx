// src/components/Docentes.jsx
import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import dpjp from '../assets/dpjp.jpg'
import juan from '../assets/juan.jpg'
import oscar from '../assets/oscar.jpg'
import pablo from '../assets/pablo.jpg'
import sierra from '../assets/sierra.jpg'

/* ─── Datos de instructores ─── */
const teachers = [
  {
    name: 'Juan Esteban Sierra',
    module: 'OSINT · Redes · Explotación',
    photo: sierra,
    bio: 'Ingeniero de Sistemas y Computación egresado de la Universidad EIA, especializado en Ethical Hacking, Pentesting, WebSec, AppSec y code review. Actualmente cursa el programa “Evasion Techniques & Breaching Defenses – Advanced Pentesting Training” de Offensive Security y se prepara para la certificación eWPTX. Cuenta con la certificación OSCP.',
    certifications: ['OSCP'],
    studies: [
      'Evasion Techniques & Breaching Defenses – Advanced Pentesting Training (Offensive Security)',
      'eWPTX (en preparación)'
    ]
  },
  {
    name: 'Juan Sebastián Velásquez',
    module: 'Web · Móvil',
    photo: juan,
    bio: 'Ingeniero de Sistemas y Computación con experiencia en ciberseguridad, pentesting y hacking ético, enfocado en pruebas de aplicaciones móviles (Android e iOS), hacking web y evaluación de redes e infraestructuras. Certificado CEH (Practical) y en preparación para OSCP y eMAPT.',
    certifications: ['CEH (Practical)'],
    studies: [
      'OSCP (en preparación)',
      'eMAPT (en preparación)'
    ]
  },
  {
    name: 'Pablo Pérez Posada',
    module: 'Seguridad en la Nube',
    photo: pablo,
    bio: 'Ingeniero de Sistemas y Computación de la Universidad EIA con más de cuatro años de experiencia en tecnologías Microsoft. Ha liderado y facilitado más de 150 talleres y consultorías en toda América Latina, enfocándose en ciberseguridad y productividad sobre Microsoft 365 y Azure. Microsoft Certified Trainer con múltiples acreditaciones.',
    certifications: [
      'Microsoft Certified Trainer (MCT, 2022)',
      'MS-100 & MS-101: Enterprise Administrator Expert (2021)',
      'MS-500: Security Administrator Associate',
      'MS-700: Teams Administrator Associate (2022)',
      'PL-200: Power Platform Functional Consultant Associate (2021)',
      'MB-910: Dynamics 365 Fundamentals (CRM, 2022)',
      'AZ-900: Azure Fundamentals (2021)',
      'PL-500: Power Automate RPA Developer (2022)'
    ],
    studies: [
      'Ingeniero de Sistemas y Computación – Universidad EIA'
    ]
  },
  {
    name: 'Oscar Uribe Londoño',
    module: 'Directorio Activo',
    photo: oscar,
    bio: 'Ingeniero de Sistemas y Computación egresado de la Universidad EIA, especializado en Ethical Hacking, Pentesting, WebSec, AppSec y code review. Actualmente cursa el programa “Evasion Techniques & Breaching Defenses – Advanced Pentesting Training” de Offensive Security y se prepara para la certificación eWPTX. Cuenta con la certificación OSCP.',
    certifications: ['OSCP', 'OSWE', 'OSED', 'OSEP', 'CRTP', 'CRTO'],
    studies: [
      'Maestría en Ciberseguridad (en curso) – Universidad Internacional de Valencia'
    ]
  },
  {
    name: 'Dennis Juilland Prada',
    module: 'Forense Digital',
    photo: dpjp,
    bio: 'Ingeniero consultor en ciberseguridad y Business Information Security Officer (BISO) en Mercado Libre. Profesor del Taller de Ciberdefensa en la Universidad EIA e instructor en la Academia de Ciberseguridad desde julio de 2024, donde imparte formación práctica orientada a CEH ANSI y CEH Practical. Su trayectoria abarca la emulación de amenazas, la explotación de vulnerabilidades y el diseño de estrategias defensivas y de gobernanza para robustecer la postura de seguridad organizacional.',
    certifications: [
      'CCTP', 'CEH Master', 'CEHPT', 'CDWS', 'CAPC', 'CEHPC',
      'CODSP v2', 'CFCA', 'LCSPC', 'C3SA', 'DSIO', 'EHCA',
      'ISO 27001 Auditor Interno', 'CSCE'
    ],
    studies: [
      'Especialista en Hacking Ético',
      'Máster en Ciberseguridad',
      'Máster en Transformación e Innovación Digital',
      'Máster en Ciberinteligencia, Seguridad Ofensiva y IA (en curso)'
    ]
  }
]

export default function Docentes() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="py-20 bg-[var(--base-light)]">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-4xl font-serif font-extrabold text-[var(--brand-blue)] mb-10 pt-6">
          Conoce a nuestros docentes
        </h2>

        {/* ─── Grid de Cards ─── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t) => (
            <article
              key={t.name}
              onClick={() => setSelected(t)}
              className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition border-t-4 border-[var(--accent)] flex flex-col overflow-hidden"
            >
              <div className="w-full aspect-square bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className={`rounded-xl object-contain ${t.name === 'Dennis Juilland Prada' ? 'scale-83' : 'max-h-full max-w-full'}`}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">
                  {t.name}
                </h3>
                <p className="text-sm text-[var(--accent)] mb-3">
                  {t.module}
                </p>
                <p className="text-base text-[var(--brand-blue)] flex-1 line-clamp-3">
                  {t.bio}
                </p>
                <button className="mt-4 self-start text-[var(--cta)] font-semibold hover:underline">
                  Ver certificaciones
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ─── Modal de detalle ─── */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="relative bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl p-8">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                  onClick={() => setSelected(null)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <img
                  src={selected.photo}
                  alt={selected.name}
                  className="w-24 h-24 object-cover object-top rounded-full mx-auto mb-4 border-4 border-white shadow"
                />
                <h3 className="text-2xl font-bold text-center mb-2">
                  {selected.name}
                </h3>
                <p className="text-sm text-center text-[var(--accent)] mb-4">
                  {selected.module}
                </p>
                <p className="text-base text-[var(--brand-blue)] mb-6">
                  {selected.bio}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Certificaciones</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {selected.certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Estudios y formación</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {selected.studies.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
