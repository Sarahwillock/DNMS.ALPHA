import { motion } from 'motion/react';
import { Verified, ArrowRight, QrCode, Bolt } from 'lucide-react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function June() {
  const juneEvents = MOVE_EVENTS.filter(e => e.month === 'Junho');

  return (
    <div className="min-h-screen bg-[#0e0e0e] p-4 text-white md:p-8">
      <div className="mx-auto max-w-7xl">
        <MonthSwitcher />

        <div className="grid grid-cols-1 gap-0 overflow-hidden border-2 border-move-blue lg:grid-cols-12">
          <div className="flex flex-col items-center justify-between border-r-2 border-black bg-move-blue py-10 lg:col-span-1">
            <span className="vertical-text rotate-180 text-xl font-black uppercase tracking-[0.25em] text-white">
              CENTRO CULTURAL
            </span>
            <div className="neo-brutalist-shadow flex h-12 w-12 items-center justify-center bg-white">
              <Bolt className="font-bold text-move-blue" size={32} />
            </div>
          </div>

          <div className="group relative min-h-[600px] overflow-hidden bg-neutral-900 lg:col-span-8">
            <img
              src="/junho.manu.jpg"
              alt="Event speaker"
              className="absolute inset-0 h-full w-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-700 group-hover:scale-105"
            />

            <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 md:p-12">
              <h1 className="text-[15vw] font-black uppercase leading-none tracking-tighter text-white italic md:text-[10vw]">
                JUNHO
              </h1>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="neo-brutalist-shadow bg-move-pink px-8 py-3">
                  <span className="text-3xl font-black uppercase leading-none text-white italic">
                    2026
                  </span>
                </div>
                <div className="border-4 border-white bg-black/40 px-8 py-3 backdrop-blur-md">
                  <span className="text-lg font-black uppercase tracking-[0.2em] text-white">
                    SÃO PAULO - BR
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 grid h-40 w-40 grid-cols-4 grid-rows-4 gap-1 bg-black/20 p-2">
              <div className="bg-move-blue" />
              <div className="bg-move-pink" />
              <div className="bg-white" />
              <div className="bg-move-orange" />
              <div className="bg-white" />
              <div className="bg-move-blue" />
              <div className="bg-move-orange" />
              <div className="bg-move-pink" />
              <div className="bg-move-orange" />
              <div className="bg-white" />
              <div className="bg-move-pink" />
              <div className="bg-move-blue" />
              <div className="bg-move-pink" />
              <div className="bg-move-orange" />
              <div className="bg-move-blue" />
              <div className="bg-white" />
            </div>
          </div>

          <div className="flex flex-col border-l-2 border-black lg:col-span-3">
            {juneEvents.map((event) => (
              <div
                key={event.id}
                className={`${event.color === 'move-orange' ? 'bg-move-orange' : event.color === 'white' ? 'bg-white' : 'bg-move-blue'} group/item flex flex-1 flex-col justify-center border-b-2 border-black p-8`}
              >
                <div
                  className={`${event.color === 'white' ? 'text-black' : 'text-white'} mb-4 text-6xl font-black tracking-tighter`}
                >
                  {event.date.split('/')[0]}
                </div>
                <div className="flex items-end justify-between">
                  <a
                    href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${event.color === 'white' ? 'border-move-blue text-black' : 'border-white text-white'} block border-l-4 pl-4 text-sm font-bold uppercase leading-relaxed tracking-tight transition-colors hover:text-move-pink`}
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

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="neo-brutalist-shadow group relative h-72 overflow-hidden border-4 border-move-blue md:col-span-2">
            <div className="absolute inset-0 bg-neutral-900">
              <img
                src="/junho.manu.jpg"
                alt="Map"
                className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group/loc relative flex h-full flex-col justify-between p-8"
            >
              <div className="inline-block self-start bg-move-blue px-4 py-1 text-xs font-black uppercase tracking-widest text-white">
                LOCALIZAÇÃO
              </div>
              <div>
                <h3 className="text-5xl font-black uppercase leading-none tracking-tighter text-white transition-colors group-hover/loc:text-move-blue">
                  IGREJA DINAMUS ALPHAVILLE
                </h3>
                <p className="mt-3 inline-block bg-black/60 px-2 text-sm font-bold uppercase text-white">
                  Alameda Mamoré, 521 - Alphaville, Barueri - SP
                </p>
              </div>
            </a>
          </div>

          <div className="neo-brutalist-shadow group flex flex-col justify-between border-4 border-black bg-move-pink p-8 text-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-6 flex h-16 w-16 items-center justify-center border-4 border-white bg-black">
              <QrCode size={32} />
            </div>
            <div>
              <h4 className="mb-3 text-3xl font-black uppercase leading-none">ACESSO VIP</h4>
              <p className="text-sm font-bold uppercase leading-tight opacity-90">
                DOWNLOAD DO MOVE APP PARA ACESSO EXCLUSIVO AOS WORKSHOPS E NETWORKING.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => saveToCalendar(juneEvents[0])}
            className="neo-brutalist-shadow bg-move-blue px-12 py-6 text-2xl font-black uppercase tracking-tighter text-white transition-all hover:scale-105 active:scale-95"
          >
            TE VEJO LÁ
          </button>
        </div>
      </div>
    </div>
  );
}
