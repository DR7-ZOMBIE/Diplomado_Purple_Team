// src/components/Modules.jsx
import React, { useState, useEffect } from 'react';
import {
  GlobeAltIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  ServerStackIcon,
  BeakerIcon,
  ShieldCheckIcon,
  MagnifyingGlassCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/* ---------------------- DATA ---------------------- */
const modules = [
  {
    name: 'OSINT',
    icon: MagnifyingGlassCircleIcon,
    tagline: 'Investiga como periodista, piensa como analista.',
    story:
      'Convierte huellas digitales en inteligencia para anticipar ciber-amenazas y destapar fraudes.',
    learn: '• Doxing ético • Footprinting avanzado • GEOINT • Automatización con Maltego',
    deep: `
### Historia y teoría
- **1941** — BBC Monitoring escanea señales nazis.  
- **1995** — EE. UU. adopta oficialmente el término *OSINT*.  
- **Hoy** — Scraping + ML + verificación humana potencian el *threat hunting*.

### Lo que harás
1. Mapear presencia online de un objetivo real.  
2. Construir grafos con Maltego y SpiderFoot.  
3. Elaborar informes accionables y legales.`,
  },
  {
    name: 'Web Pentesting',
    icon: GlobeAltIcon,
    tagline: 'Rompe la web (para arreglarla).',
    story:
      'Del primer XSS al bug-bounty millonario: domina las técnicas que blindan Internet.',
    learn: '• SQL/NoSQLi • SSRF • Deserialización • OAuth/JWT Abuse',
    deep: `
### Historia y teoría
- **1999** — Rain Forest Puppy publica la primera SQLi.  
- **2005** — Nace el OWASP Top 10.  
- **Hoy** — APIs y GraphQL amplían la superficie.

### Lo que harás
1. Analizar la pila HTTP y sus puntos ciegos.  
2. Crear exploits reproducibles con Burp & ZAP.  
3. Comunicar hallazgos en lenguaje de devs.`,
  },
  {
    name: 'Redes',
    icon: ServerStackIcon,
    tagline: 'Controla los paquetes, controla el terreno.',
    story:
      'De ARPANET a Zero-Trust: captura, altera y defiende el tráfico que mueve el mundo.',
    learn: '• Sniffing Wireshark • VLAN-hopping • ARP-spoofing • IDS con Zeek',
    deep: `
### Historia y teoría
- **1983** — ARPANET migra a TCP/IP.  
- **1988** — Morris Worm paraliza Internet.  
- **Actual** — Micro-segmentación + cifrado E2E.

### Lo que harás
1. Reconstruir topologías ocultas.  
2. Generar tráfico malicioso controlado.  
3. Medir la eficacia de un IDS moderno.`,
  },
  {
    name: 'Seguridad en la Nube',
    icon: CloudIcon,
    tagline: 'Protege lo que ya no puedes tocar.',
    story:
      'IAM, contenedores y shared-responsibility: diseña arquitecturas resilientes.',
    learn: '• Hardening IAM AWS/Azure • Kubernetes RBAC • CSPM open-source',
    deep: `
### Historia y teoría
- **2006** — Amazon lanza EC2.  
- **2019** — Breach de Capital One expone fallas IAM.  
- **Hoy** — IaC y entornos efímeros exigen monitoreo continuo.

### Lo que harás
1. Detectar misconfigurations críticas.  
2. Aplicar políticas *least-privilege* con IaC.  
3. Responder incidentes en entornos elásticos.`,
  },
  {
    name: 'Móvil',
    icon: DevicePhoneMobileIcon,
    tagline: 'Reversea el laboratorio del bolsillo.',
    story:
      'Hooking dinámico y reversing: entiende cómo piensan las apps… y los atacantes.',
    learn: '• Frida/Objection • Bypass root/jailbreak • OWASP MASVS',
    deep: `
### Historia y teoría
- **2004** — Cabir inaugura el malware móvil.  
- **2010** — DroidDream se infiltra en Google Play.  
- **Actual** — Secure Enclave y sandbox avanzados.

### Lo que harás
1. Instrumentar apps con Frida.  
2. Reverse de APK/IPA con Ghidra.  
3. Testear contra el estándar MASVS.`,
  },
  {
    name: 'Explotación',
    icon: BeakerIcon,
    tagline: 'Diseña el camino hasta el shell.',
    story:
      'De buffer overflows a ROP: crea exploits que esquivan mitigaciones modernas.',
    learn: '• ASLR/DEP bypass • Fuzzing AFL++ • Exploits 64 bits',
    deep: `
### Historia y teoría
- **1988** — Overflow en *fingerd* → Morris Worm.  
- **2004** — ASLR inaugura la era de mitigaciones.  
- **Actual** — SROP desafía kernels actuales.

### Lo que harás
1. Crear cadenas ROP con ropgadget.  
2. Encontrar bugs con AFL++.  
3. Automatizar exploits en pwntools.`,
  },
  {
    name: 'Directorio Activo',
    icon: Cog6ToothIcon,
    tagline: 'Domina el reino Kerberos.',
    story:
      'Kerberoast y BloodHound: controla el objetivo nº 1 del atacante interno.',
    learn: '• BloodHound • Kerberoasting • Hardening GPO',
    deep: `
### Historia y teoría
- **1999** — Microsoft libera Active Directory.  
- **2014** — Kerberoasting crackea tickets offline.  
- **Hoy** — Delegaciones y Golden Ticket siguen vigentes.

### Lo que harás
1. Mapear privilegios con BloodHound.  
2. Explotar delegaciones inseguras.  
3. Diseñar bosques resilientes.`,
  },
  {
    name: 'Forense Digital',
    icon: ShieldCheckIcon,
    tagline: 'Cada byte cuenta una historia.',
    story:
      'Cadena de custodia y memoria viva: reconstruye incidentes de alto perfil.',
    learn: '• Volatility3 • Timeline artefacts • Reporte pericial',
    deep: `
### Historia y teoría
- **1984** — FBI Magnetic Media: primer laboratorio DF.  
- **2008** — Volatility democratiza la memoria viva.  
- **Actual** — DFIR *as-code* y artefactos cloud.

### Lo que harás
1. Extraer evidencia volátil.  
2. Generar líneas de tiempo completas.  
3. Presentar conclusiones defendibles en corte.`,
  },
];

/* ---------------------- ANIMACIONES ---------------------- */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

/* ---------------------- COMPONENT ---------------------- */
export default function Modules() {
  const [selected, setSelected] = useState(null);

  // Bloquea el scroll cuando el modal está abierto
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', !!selected);
  }, [selected]);

  return (
    <section
      id="modules"
      className="py-24 bg-gradient-to-b from-white via-[var(--base-light)] to-white"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-serif font-extrabold text-[var(--brand-blue)] mb-16 pt-1.5">
          Descubre cada módulo
        </h2>

        {/* grid de tarjetas */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {modules.map((m, i) => (
            <motion.button
              key={m.name}
              custom={i}
              variants={cardVariants}
              whileHover={{
                translateY: -6,
                boxShadow: '0 25px 45px rgba(0,0,0,0.1)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(m)}
              className="group relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-md border border-white/70 p-6 shadow-lg transition-all duration-300"
            >
              {/* blob decorativo */}
              <span className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[var(--cta)] opacity-20 blur-2xl transition group-hover:scale-110" />

              <m.icon className="relative h-10 w-10 text-[var(--cta)] mb-4" />
              <h3 className="relative text-2xl font-bold text-[var(--primary)] mb-1 transition-colors group-hover:text-[var(--cta)]">
                {m.name}
              </h3>
              <p className="relative text-sm text-[var(--accent)] mb-3">
                {m.tagline}
              </p>
              <p className="relative text-base text-[var(--brand-blue)]/90 mb-3 line-clamp-2">
                {m.story}
              </p>
              <p className="relative text-sm leading-relaxed text-baseDark line-clamp-2">
                {m.learn}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* modal detalle */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-10 shadow-xl"
            >
              {/* botón cerrar */}
              <button
                className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-800"
                onClick={() => setSelected(null)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <selected.icon className="h-12 w-12 text-[var(--cta)] mb-6" />
              <h3 className="text-3xl font-bold text-[var(--primary)] mb-4">
                {selected.name}
              </h3>

              <div className="prose prose-sm max-w-none text-[var(--brand-blue)]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selected.deep}
                </ReactMarkdown>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-baseDark whitespace-pre-line">
                {selected.learn}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
