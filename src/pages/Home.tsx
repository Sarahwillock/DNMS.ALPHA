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
        {/* PRÓXIMO EVENTO */}
        <div className="mb-12 border-l-8 border-white bg-move-blue p-8 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
          <h2 className="mb-2 text-2xl font-black italic uppercase tracking-tighter text-white">
            PRÓXIMO EVENTO
          </h2>

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

        {/* TÍTULO */}
        <h1 className="mb-8 text-4xl font-black italic uppercase tracking-tighter text-move-blue md:text-6xl">
          EVENTOS MOVE
        </h1>

        {/* CARDS DOS MESES */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* ABRIL */}
          <Link to="/move/april" className="group relative h-96 overflow-hidden border-2 border-move-blue">
            <img
              src="/abril.jpg"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              alt="Abril"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-6xl font-black italic uppercase text-white">ABRIL</h2>
            </div>
          </Link>

          {/* MAIO */}
          <Link to="/move/may" className="group relative h-96 overflow-hidden border-2 border-move-pink">
            <img
              src="/maio.jpg"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              alt="Maio"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-6xl font-black italic uppercase text-white">MAIO</h2>
            </div>
          </Link>

          {/* JUNHO */}
          <Link to="/move/june" className="group relative h-96 overflow-hidden border-2 border-move-orange">
            <img
              src="/junho.manu.jpg"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              alt="Junho"
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
