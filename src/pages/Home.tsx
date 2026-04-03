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
      <div className="p-4 md:p-8">
        <div className="mb-8 border-l-4 border-white bg-move-blue p-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] sm:mb-10 sm:p-6 md:mb-12 md:border-l-8 md:p-8">
          <h2 className="mb-2 text-base font-black italic uppercase tracking-tighter text-white sm:text-lg md:text-2xl">
            PRÓXIMO EVENTO
          </h2>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <h3 className="mb-2 text-3xl font-black uppercase leading-none text-white sm:text-4xl md:text-5xl">
                Seminário de Evangelismo
              </h3>

              <p className="text-sm font-bold uppercase tracking-wider text-white/80 sm:text-base md:text-xl md:tracking-widest">
                11 DE ABRIL · SÁBADO · 15:00
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:flex-shrink-0 md:gap-4">
              <button
                onClick={() =>
                  saveToCalendar({
                    title: 'Seminário de Evangelismo',
                    description: 'Seminário de Evangelismo - MOVE Alphaville',
                    location: 'Igreja Dinamus Alphaville - Estrada Bela Vista, 2914',
                    startTime: '20260411T150000Z',
                    endTime: '20260411T180000Z',
                  })
                }
                className="w-full bg-white px-4 py-3 text-sm font-black uppercase tracking-tighter text-move-blue transition-all hover:bg-move-pink hover:text-white sm:w-auto sm:px-6 sm:text-base md:px-8 md:py-4 md:text-xl"
              >
                TE VEJO LÁ
              </button>

              <Link
                to="/move/april"
                className="w-full border-2 border-white px-4 py-3 text-center text-sm font-black uppercase tracking-tighter text-white transition-all hover:bg-white hover:text-move-blue sm:w-auto sm:px-6 sm:text-base md:px-8 md:py-4 md:text-xl"
              >
                VER DETALHES
              </Link>
            </div>
          </div>
        </div>

        <h1 className="mb-6 text-3xl font-black italic uppercase tracking-tighter text-move-blue sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
          EVENTOS MOVE
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          <Link
            to="/move/april"
            className="group relative h-64 overflow-hidden border-2 border-move-blue sm:h-72 md:h-96"
          >
            <img
              src="/abril.jpg"
              className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              alt="Abril"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-4 left-4 z-10 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6">
              <h2 className="text-4xl font-black italic uppercase text-white sm:text-5xl md:text-6xl">
                ABRIL
              </h2>
            </div>
          </Link>

          <Link
            to="/move/may"
            className="group relative h-64 overflow-hidden border-2 border-move-pink sm:h-72 md:h-96"
          >
            <img
              src="/maio.jpg"
              className="absolute inset-0 h-full w-full object-cover object-top grayscale brightness-75 contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
              alt="Maio"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-4 left-4 z-10 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6">
              <h2 className="text-4xl font-black italic uppercase text-white sm:text-5xl md:text-6xl">
                MAIO
              </h2>
            </div>
          </Link>

          <Link
            to="/move/june"
            className="group relative h-64 overflow-hidden border-2 border-move-orange bg-black sm:h-72 md:h-96"
          >
            <img
              src="/junho.manu.jpg"
              className="absolute inset-0 h-full w-full object-contain object-center grayscale transition-all duration-500 group-hover:grayscale-0"
              alt="Junho"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" />
            <div className="absolute bottom-4 left-4 z-10 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6">
              <h2 className="text-4xl font-black italic uppercase text-white sm:text-5xl md:text-6xl">
                JUNHO
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
