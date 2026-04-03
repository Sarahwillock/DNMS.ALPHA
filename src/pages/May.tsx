import { motion } from 'motion/react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function May() {
  const mayEvents = MOVE_EVENTS.filter(e => e.month === 'Maio');

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      <div className="p-4 md:p-8 relative z-50">
        <MonthSwitcher />
      </div>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <img 
          src="https://lh3.googleusercontent.com/aida/ADBb0uicONRmhG4bJhSISyu3k4ACAPiV9d5J6P9HLx0kGbiT2OEerHQ7yl3oD0jLbk2mZfvSKzKcOccNXD3vwPJEUiHcnJfgw-X0Hlga2_To4xJPJ720G35mLKNt--NAdQfVo-OyTTO3O86Be8HFWUjQz03-iQvuDUmRK-k4qyw3__Nt14GemT4oRqCRJd7MRwCDOeVHwp9OwbGpjDKbbEFhbrfVeVW2AD8fs4J2ssUOcA4xrUYeKZazdyFIWNmM0aUabhVcV4A9xC_eng" 
          alt="MOVE May"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-60"
          referrerPolicy="no-referrer"
        />
        
        {/* Bauhaus Overlays */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-move-blue/20 -rotate-12 border-2 border-move-blue" />
        <div className="absolute bottom-20 left-10 w-48 h-96 bg-move-pink/10 rotate-6 border-r-4 border-move-pink" />

        <div className="relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-move-blue text-white font-black px-4 py-1 text-2xl uppercase tracking-tighter">12.05</span>
              <span className="text-move-pink font-black text-xl italic uppercase tracking-widest">SÃO PAULO / BR</span>
            </div>
            <h1 className="text-[10rem] md:text-[15rem] leading-[0.8] font-black italic uppercase tracking-tighter text-white drop-shadow-2xl">
              MAIO
            </h1>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4 pb-12">
            <div className="bg-move-blue p-6 border-l-8 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
              <h3 className="font-black text-3xl uppercase leading-none mb-2">O FUTURO</h3>
              <p className="font-bold text-sm tracking-widest opacity-90 uppercase">Conferência Palco Principal</p>
            </div>
            <div className="bg-move-pink p-6 border-l-8 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
              <h3 className="font-black text-3xl uppercase leading-none mb-2">IMERSÃO</h3>
              <p className="font-bold text-sm tracking-widest opacity-90 uppercase">Série de Laboratórios Interativos</p>
            </div>
            <div className="bg-move-orange p-6 border-l-8 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
              <h3 className="font-black text-3xl uppercase leading-none mb-2">NETWORKING</h3>
              <p className="font-bold text-sm tracking-widest opacity-90 uppercase">Noite Lounge no Terraço</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Bento Grid */}
      <section className="px-6 py-12 bg-neutral-900 border-t-2 border-move-blue">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter text-move-blue">CRONOGRAMA DIÁRIO</h2>
            <div className="flex gap-4">
              <button className="bg-white text-black font-black px-6 py-2 uppercase text-sm hover:bg-move-pink hover:text-white transition-colors">Lista Completa</button>
              <button className="border-2 border-move-blue text-move-blue font-black px-6 py-2 uppercase text-sm hover:bg-move-blue hover:text-white transition-colors">Exportar PDF</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mayEvents.map((event) => (
              <div key={event.id} className={`bg-neutral-800 p-8 border-2 border-transparent hover:border-${event.color === 'move-blue' ? 'move-blue' : 'move-pink'} transition-all group relative overflow-hidden h-64`}>
                <div className={`absolute -right-10 -top-10 text-9xl font-black opacity-10 group-hover:opacity-30 transition-opacity`}>{event.date.split('/')[0]}</div>
                <span className={`${event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'} text-white text-xs font-black px-2 py-1 uppercase mb-4 inline-block`}>{event.time}</span>
                <h4 className="text-4xl font-black uppercase leading-none mt-2">{event.title}</h4>
                <div className="flex justify-between items-end mt-4">
                  <a 
                    href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-neutral-400 uppercase font-bold text-xs hover:text-${event.color === 'move-blue' ? 'move-blue' : 'move-pink'} transition-colors block`}
                  >
                    {event.day} · Prédio da Igreja
                  </a>
                  <button 
                    onClick={() => saveToCalendar(event)}
                    className={`px-4 py-2 text-[10px] font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 ${event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'} text-white`}
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
            className="bg-move-pink text-white px-12 py-6 font-black text-2xl uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]"
          >
            TE VEJO LÁ
          </button>
        </div>
      </section>
    </div>
  );
}
