import { motion } from 'motion/react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function May() {
  const mayEvents = MOVE_EVENTS.filter((e) => e.month === 'Maio');

  return (
    <div className="relative flex min-h-screen flex-col bg-black">

      {/* HEADER */}
      <div className="relative z-50 p-4 md:p-8">
        <MonthSwitcher />
      </div>

      {/* HERO */}
      <section className="relative flex h-[70vh] md:h-[80vh] w-full items-center justify-center overflow-hidden">
        
        {/* IMAGEM */}
        <img
          src="/maio.jpg"
          alt="MOVE May"
          className="absolute inset-0 h-full w-full object-cover object-center grayscale opacity-60 contrast-125"
          referrerPolicy="no-referrer"
        />

        {/* DECORATIVOS - escondidos no mobile */}
        <div className="hidden md:block absolute right-10 top-10 h-64 w-64 -rotate-12 border-2 border-move-blue bg-move-blue/20" />
        <div className="hidden md:block absolute bottom-20 left-10 h-96 w-48 rotate-6 border-r-4 border-move-pink bg-move-pink/10" />

        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-end gap-6 px-4 sm:px-6 md:grid-cols-12">

          {/* TEXTO ESQUERDA */}
          <div className="flex flex-col items-start md:col-span-8">

            <div className="mb-2 flex items-center gap-2 sm:gap-4">
              <span className="bg-move-blue px-3 py-1 text-sm sm:text-xl font-black uppercase text-white">
                09.05
              </span>

              <span className="text-xs sm:text-lg font-black uppercase italic tracking-widest text-move-pink">
                ALPHAVILLE / SP
              </span>
            </div>

            {/* 🔥 AJUSTE DO MAIO */}
            <h1 className="
              text-[20vw] 
              sm:text-[16vw] 
              md:text-[12rem] 
              lg:text-[15rem]
              font-black uppercase italic leading-[0.9] tracking-tighter text-white
            ">
              MAIO
            </h1>
          </div>

          {/* CARDS DIREITA */}
          <div className="flex flex-col gap-3 sm:gap-4 pb-6 md:pb-12 md:col-span-4">

            <div className="border-l-4 border-white bg-move-blue p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase">
                SERVIR
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase opacity-90">
                Mãos que servem, corações que adoram
              </p>
            </div>

            <div className="border-l-4 border-white bg-move-pink p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase">
                PERTENCER
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase opacity-90">
                Pertencer é viver em família, não só em fé
              </p>
            </div>

            <div className="border-l-4 border-white bg-move-orange p-3 sm:p-4 md:p-6">
              <h3 className="text-base sm:text-xl md:text-2xl font-black uppercase">
                AMADURECER
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase opacity-90">
                Quem caminha com Deus aprende a amadurecer
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CRONOGRAMA */}
      <section className="border-t-2 border-move-blue bg-neutral-900 px-4 sm:px-6 py-10 sm:py-12">

        <div className="mx-auto max-w-7xl">

          {/* HEADER CRONOGRAMA */}
          <div className="mb-8 sm:mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            {/* 🔥 AJUSTE MOBILE */}
            <h2 className="
              text-2xl 
              sm:text-4xl 
              md:text-6xl 
              font-black uppercase italic tracking-tighter text-move-blue
            ">
              CRONOGRAMA DIÁRIO
            </h2>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button className="bg-white px-4 py-2 text-xs sm:text-sm font-black uppercase text-black">
                Lista Completa
              </button>

              <button className="border-2 border-move-blue px-4 py-2 text-xs sm:text-sm font-black uppercase text-move-blue">
                Exportar PDF
              </button>
            </div>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {mayEvents.map((event) => (
              <div
                key={event.id}
                className="group relative h-auto min-h-[180px] sm:h-64 overflow-hidden border-2 bg-neutral-800 p-4 sm:p-8"
              >

                <div className="absolute -right-6 -top-6 text-6xl sm:text-9xl font-black opacity-10">
                  {event.date.split('/')[0]}
                </div>

                <span className="mb-2 sm:mb-4 inline-block px-2 py-1 text-[10px] sm:text-xs font-black uppercase text-white bg-move-blue">
                  {event.time}
                </span>

                <h4 className="text-xl sm:text-3xl md:text-4xl font-black uppercase leading-none">
                  {event.title}
                </h4>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">

                  <a
                    href="#"
                    className="text-[10px] sm:text-xs font-bold uppercase text-neutral-400"
                  >
                    {event.day} · Prédio da Igreja
                  </a>

                  <button
                    onClick={() => saveToCalendar(event)}
                    className="px-3 py-2 text-[10px] sm:text-xs font-black uppercase text-white bg-move-blue"
                  >
                    TE VEJO LÁ
                  </button>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* BOTÃO FINAL */}
        <div className="mt-10 flex justify-center pb-12">
          <button
            onClick={() => saveToCalendar(mayEvents[0])}
            className="bg-move-pink px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-2xl font-black uppercase text-white"
          >
            TE VEJO LÁ
          </button>
        </div>

      </section>
    </div>
  );
}
