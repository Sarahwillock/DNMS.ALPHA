import { motion } from 'motion/react';
import { Verified, ArrowRight, QrCode, Bolt } from 'lucide-react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function June() {
  const juneEvents = MOVE_EVENTS.filter(e => e.month === 'Junho');

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <MonthSwitcher />
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-move-blue overflow-hidden">
          {/* Left Vertical Accent */}
          <div className="lg:col-span-1 bg-move-blue flex flex-col justify-between items-center py-10 border-r-2 border-black">
            <span className="text-white font-black text-xl vertical-text rotate-180 uppercase tracking-[0.25em]">CENTRO CULTURAL</span>
            <div className="w-12 h-12 bg-white flex items-center justify-center neo-brutalist-shadow">
              <Bolt className="text-move-blue font-bold" size={32} />
            </div>
          </div>

          {/* Central Content */}
          <div className="lg:col-span-8 relative bg-neutral-900 min-h-[600px] overflow-hidden group">
            <img 
              src="/june.manu.jpg" 
              alt="Event speaker" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative h-full flex flex-col justify-end p-6 md:p-12 z-10 bg-gradient-to-t from-black/80 to-transparent">
              <h1 className="text-[15vw] md:text-[10vw] font-black text-white uppercase leading-none tracking-tighter italic">
                JUNHO
              </h1>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-move-pink px-8 py-3 neo-brutalist-shadow">
                  <span className="text-white font-black italic text-3xl uppercase leading-none">2026</span>
                </div>
                <div className="border-4 border-white bg-black/40 backdrop-blur-md px-8 py-3">
                  <span className="text-white font-black uppercase tracking-[0.2em] text-lg">SÃO PAULO - BR</span>
                </div>
              </div>
            </div>

            {/* Bauhaus Grid */}
            <div className="absolute top-0 right-0 w-40 h-40 grid grid-cols-4 grid-rows-4 gap-1 p-2 bg-black/20">
              <div className="bg-move-blue" /><div className="bg-move-pink" /><div className="bg-white" /><div className="bg-move-orange" />
              <div className="bg-white" /><div className="bg-move-blue" /><div className="bg-move-orange" /><div className="bg-move-pink" />
              <div className="bg-move-orange" /><div className="bg-white" /><div className="bg-move-pink" /><div className="bg-move-blue" />
              <div className="bg-move-pink" /><div className="bg-move-orange" /><div className="bg-move-blue" /><div className="bg-white" />
            </div>
          </div>

          {/* Right Detail Column */}
          <div className="lg:col-span-3 flex flex-col border-l-2 border-black">
            {juneEvents.map((event) => (
              <div key={event.id} className={`${event.color === 'move-orange' ? 'bg-move-orange' : event.color === 'white' ? 'bg-white' : 'bg-move-blue'} p-8 flex-1 flex flex-col justify-center border-b-2 border-black group/item`}>
                <div className={`${event.color === 'white' ? 'text-black' : 'text-white'} font-black text-6xl mb-4 tracking-tighter`}>{event.date.split('/')[0]}</div>
                <div className="flex justify-between items-end">
                  <a 
                    href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${event.color === 'white' ? 'text-black border-move-blue' : 'text-white border-white'} font-bold uppercase tracking-tight text-sm leading-relaxed border-l-4 pl-4 hover:text-move-pink transition-colors block`}
                  >
                    {event.title} - {event.day} · {event.time.split(' ')[0]} · Prédio da Igreja
                  </a>
                  <button 
                    onClick={() => saveToCalendar(event)}
                    className={`ml-4 px-3 py-1 text-[8px] font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 ${event.color === 'white' ? 'bg-move-blue text-white' : 'bg-white text-black'}`}
                  >
                    TE VEJO LÁ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Content Below */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 relative h-72 border-4 border-move-blue group overflow-hidden neo-brutalist-shadow">
            <div className="absolute inset-0 bg-neutral-900">
              <img 
                src="/june.manu.jpg" 
                alt="Map"
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <a 
              href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-full p-8 flex flex-col justify-between group/loc"
            >
              <div className="bg-move-blue inline-block self-start px-4 py-1 font-black text-xs uppercase text-white tracking-widest">LOCALIZAÇÃO</div>
              <div>
                <h3 className="text-5xl font-black uppercase text-white leading-none tracking-tighter group-hover/loc:text-move-blue transition-colors">IGREJA DINAMUS ALPHAVILLE</h3>
                <p className="text-white font-bold uppercase text-sm mt-3 bg-black/60 inline-block px-2">Alameda Mamoré, 521 - Alphaville, Barueri - SP</p>
              </div>
            </a>
          </div>

          <div className="bg-move-pink p-8 flex flex-col justify-between border-4 border-black text-white neo-brutalist-shadow group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="w-16 h-16 border-4 border-white bg-black flex items-center justify-center mb-6">
              <QrCode size={32} />
            </div>
            <div>
              <h4 className="text-3xl font-black uppercase leading-none mb-3">ACESSO VIP</h4>
              <p className="text-sm font-bold uppercase opacity-90 leading-tight">DOWNLOAD DO MOVE APP PARA ACESSO EXCLUSIVO AOS WORKSHOPS E NETWORKING.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => saveToCalendar(juneEvents[0])}
            className="bg-move-blue text-white px-12 py-6 font-black text-2xl uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 neo-brutalist-shadow"
          >
            TE VEJO LÁ
          </button>
        </div>
      </div>
    </div>
  );
}
