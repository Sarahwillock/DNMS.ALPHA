import { motion } from 'motion/react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function May() {
  const mayEvents = MOVE_EVENTS.filter((e) => e.month === 'Maio');

  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      <div className="relative z-50 p-4 md:p-8">
        <MonthSwitcher />
      </div>

      {/* Hero Section */}
      <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden">
        <img
          src="/maio.jpg"
          alt="MOVE May"
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-60 contrast-125"
          referrerPolicy="no-referrer"
        />

        {/* Bauhaus Overlays */}
        <div className="absolute right-10 top-10 h-64 w-64 -rotate-12 border-2 border-move-blue bg-move-blue/20" />
        <div className="absolute bottom-20 left-10 h-96 w-48 rotate-6 border-r-4 border-move-pink bg-move-pink/10" />

        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-end gap-8 px-6 md:grid-cols-12">
          <div className="flex flex-col items-start md:col-span-8">
            <div className="mb-2 flex items-center gap-4">
              <span className="bg-move-blue px-4 py-1 text-2xl font-black uppercase tracking-tighter text-white">
                09.05
              </span>
              <span className="text-xl font-black uppercase italic tracking-widest text-move-pink">
                ALPHAVILLE / SP
              </span>
            </div>

            <h1 className="text-[18vw] font-black uppercase italic leading-[0.9] tracking-tighter text-white drop-shadow-2xl sm:text-[14vw] md:text-[15rem]">
              MAIO
            </h1>
          </div>

          <div className="flex flex-col gap-4 pb-12 md:col-span-4">
            <div className="border-l-4 border-white bg-move-blue p-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] md:border-l-8 md:p-6">
              <h3 className="mb-2 text-xl font-black uppercase leading-none md:text-3xl">
                SERVIR
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.12em] opacity-90 md:text-sm md:tracking-widest">
                Mãos que servem, corações que adoram
              </p>
            </div>

            <div className="border-l-4 border-white bg-move-pink p-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] md:border-l-8 md:p-6">
              <h3 className="mb-2 text-xl font-black uppercase leading-none md:text-3xl">
                PERTENCER
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.12em] opacity-90 md:text-sm md:tracking-widest">
                Pertencer é viver em família, não só em fé
              </p>
            </div>

            <div className="border-l-4 border-white bg-move-orange p-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] md:border-l-8 md:p-6">
              <h3 className="mb-2 text-xl font-black uppercase leading-none md:text-3xl">
                AMADURECER
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.12em] opacity-90 md:text-sm md:tracking-widest">
                Quem caminha com Deus aprende a amadurecer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Bento Grid */}
      <section className="border-t-2 border-move-blue bg-neutral-900 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter text-move-blue">
              CRONOGRAMA DIÁRIO
            </h2>

            <div className="flex gap-4">
              <button className="bg-white px-6 py-2 text-sm font-black uppercase text-black transition-colors hover:bg-move-pink hover:text-white">
                Lista Completa
              </button>
              <button className="border-2 border-move-blue px-6 py-2 text-sm font-black uppercase text-move-blue transition-colors hover:bg-move-blue hover:text-white">
                Exportar PDF
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {mayEvents.map((event) => (
              <div
                key={event.id}
                className={`group relative h-64 overflow-hidden border-2 border-transparent bg-neutral-800 p-8 transition-all ${
                  event.color === 'move-blue'
                    ? 'hover:border-move-blue'
                    : 'hover:border-move-pink'
                }`}
              >
                <div className="absolute -right-10 -top-10 text-9xl font-black opacity-10 transition-opacity group-hover:opacity-30">
                  {event.date.split('/')[0]}
                </div>

                <span
                  className={`mb-4 inline-block px-2 py-1 text-xs font-black uppercase text-white ${
                    event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'
                  }`}
                >
                  {event.time}
                </span>

                <h4 className="mt-2 text-4xl font-black uppercase leading-none">
                  {event.title}
                </h4>

                <div className="mt-4 flex items-end justify-between">
                  <a
                    href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-xs font-bold uppercase text-neutral-400 transition-colors ${
                      event.color === 'move-blue'
                        ? 'hover:text-move-blue'
                        : 'hover:text-move-pink'
                    }`}
                  >
                    {event.day} · Prédio da Igreja
                  </a>

                  <button
                    onClick={() => saveToCalendar(event)}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-tighter text-white transition-all hover:scale-105 active:scale-95 ${
                      event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'
                    }`}
                  >
                    TE VEJO LÁ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center pb-12">
          <button
            onClick={() => saveToCalendar(mayEvents[0])}
            className="bg-move-pink px-12 py-6 text-2xl font-black uppercase tracking-tighter text-white transition-all hover:scale-105 active:scale-95 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]"
          >
            TE VEJO LÁ
          </button>
        </div>
      </section>
    </div>
  );
}
