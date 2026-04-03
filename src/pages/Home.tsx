import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { saveToCalendar } from '../lib/calendar';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-8">
        <div className="mb-12 border-l-8 border-white bg-move-blue p-8 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
          <h2 className="mb-2 text-2xl font-black italic uppercase tracking-tighter text-white">PRÓXIMO EVENTO</h2>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="mb-2 text-4xl font-black uppercase leading-none text-white md:text-5xl">
                Seminário de Evangelismo
              </h3>
              <p className="text-xl font-bold uppercase tracking-widest text-white/80">
                11 DE ABRIL · SÁBADO · 15:00
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() =>
                  saveToCalendar({
                    title: 'Seminário de Evangelismo',
                    description: 'Seminário de Evangelismo - MOVE Alphaville',
                    location: 'Igreja Dinamus Alphaville - Estrada Bela Vista, 2914',
                    startTime: '20260411T150000Z',
                    endTime: '20260411T180000Z'
                  })
                }
                className="bg-white px-8 py-4 text-xl font-black uppercase tracking-tighter text-move-blue transition-all hover:bg-move-pink hover:text-white"
              >
                TE VEJO LÁ
              </button>
              <Link
                to="/move/april"
                className="border-2 border-white px-8 py-4 text-xl font-black uppercase tracking-tighter text-white transition-all hover:bg-white hover:text-move-blue"
              >
                VER DETALHES
              </Link>
            </div>
          </div>
        </div>

        <h1 className="mb-8 text-4xl font-black italic uppercase tracking-tighter text-move-blue md:text-6xl">
          EVENTOS MOVE
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Link to="/move/april" className="group relative h-96 overflow-hidden border-2 border-move-blue">
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0uiAAOYNvj9TvpYA1-SK2D2OTGeSvPclxq4HHhCmQfo1SqxujI4oSbtFHxiqxj2QI5HrTvooYbFZnXHPb2IgKG4NDAmOhT5lGUHrZNeXhLDG6XM5VmGzuxgCoEof6Ww7n-iwgKqFsZsXAP46vSvUxUmQwOjEppKVxf4upnKM_EnsDwNyI9CmZf1CINUMzBj6Tit_Vxz3S-trcoERsR8vBLSxhdKK3YJUtuJ4YmeJfL1C0ZArRwZ2xeplmGd7N4aCuankBUos-I0xeiA"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              alt="Abril"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-6xl font-black italic uppercase text-white">ABRIL</h2>
            </div>
          </Link>

          <Link to="/move/may" className="group relative h-96 overflow-hidden border-2 border-move-pink">
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0uicONRmhG4bJhSISyu3k4ACAPiV9d5J6P9HLx0kGbiT2OEerHQ7yl3oD0jLbk2mZfvSKzKcOccNXD3vwPJEUiHcnJfgw-X0Hlga2_To4xJPJ720G35mLKNt--NAdQfVo-OyTTO3O86Be8HFWUjQz03-iQvuDUmRK-k4qyw3__Nt14GemT4oRqCRJd7MRwCDOeVHwp9OwbGpjDKbbEFhbrfVeVW2AD8fs4J2ssUOcA4xrUYeKZazdyFIWNmM0aUabhVcV4A9xC_eng"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              alt="Maio"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-6xl font-black italic uppercase text-white">MAIO</h2>
            </div>
          </Link>

          <Link to="/move/june" className="group relative h-96 overflow-hidden border-2 border-move-orange">
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0ujfdyVJB0MACQs9vJtZSkeMpsgW-Qss837J7lGLF923SC5Uuta5BYIRQyc-J3n9-5LJFrnBUwn4sy2RrZ5jDyAMbZHs-NPC8cTP3uj1PcUX33nvX0ej-2LJTlcRu528cGLVxjGCCXTuokHvHVj8AzKmp-Nmx3hTbfdgjced8jDt8gi0fafgklTXSPNl2bBX4Z5W6wGKW8zhp-u0tReYM2zGqyB1pOMEPhDLvH4HkWaMAbBXceSwe_zqB4ukavMPkd7mKM1GiLshdQ"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              alt="Junho"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-6xl font-black italic uppercase text-white">JUNHO</h2>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
