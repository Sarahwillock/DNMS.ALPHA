import { QrCode, Bolt } from 'lucide-react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function June() {
  const juneEvents = MOVE_EVENTS.filter((e) => e.month === 'Junho');

  return (
    <div className="min-h-screen bg-[#0e0e0e] p-3 text-white sm:p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <MonthSwitcher />

        <div className="grid grid-cols-1 gap-0 overflow-hidden border-2 border-move-blue lg:grid-cols-12">
          <div className="hidden flex-col items-center justify-between border-r-2 border-black bg-move-blue py-10 lg:col-span-1 lg:flex">
            <span className="vertical-text rotate-180 text-xl font-black uppercase tracking-[0.25em] text-white">
              MOVE ALPHAVILLE
            </span>

            <div className="neo-brutalist-shadow flex h-12 w-12 items-center justify-center bg-white">
              <Bolt className="font-bold text-move-blue" size={32} />
            </div>
          </div>

          <div className="group relative min-h-[360px] overflow-hidden bg-neutral-900 sm:min-h-[420px] md:min-h-[520px] lg:col-span-8 lg:min-h-[600px]">
            <img
              src="/junho-manu.jpg"
              alt="Junho"
              className="absolute inset-0 h-full w-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-700 group-hover:scale-105"
            />

            <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 md:p-12">
              <h1 className="text-[18vw] font-black uppercase leading-none tracking-tighter text-white italic sm:text-[14vw] md:text-[10vw]">
                JUNHO
              </h1>

              <div className="mt-4 flex flex-wrap gap-3 sm:mt-6 sm:gap-4">
                <div className="neo-brutalist-shadow bg-move-pink px-4 py-2 sm:px-6 sm:py-3 md:px-8">
                  <span className="text-xl font-black uppercase leading-none text-white italic sm:text-2xl md:text-3xl">
                    2026
                  </span>
                </div>

                <div className="border-2 border-white bg-black/40 px-4 py-2 backdrop-blur-md sm:border-4 sm:px-6 sm:py-3 md:px-8">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-white sm:text-sm md:text-lg">
                    SÃO PAULO - BR
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border-t-2 border-black lg:col-span-3 lg:border-l-2 lg:border-t-0">
            {juneEvents.map((event) => (
              <div
                key={event.id}
                className={`${
                  event.color === 'move-orange'
                    ? 'bg-move-orange'
                    : event.color === 'white'
                      ? 'bg-white'
                      : 'bg-move-blue'
                } group/item flex flex-col justify-center border-b-2 border-black p-4 sm:p-6 md:p-8`}
              >
                <div
                  className={`${
                    event.color === 'white' ? 'text-black' : 'text-white'
                  } mb-3 text-4xl font-black tracking-tighter sm:mb-4 sm:text-5xl md:text-6xl`}
                >
                  {event.date.split('/')[0]}
                </div>

                <div className="flex items-end justify-between gap-3 sm:gap-4">
                  <a
                    href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      event.color === 'white'
                        ? 'border-move-blue text-black'
                        : 'border-white text-white'
                    } block border-l-4 pl-3 text-xs font-bold uppercase leading-relaxed tracking-tight transition-colors hover:text-move-pink sm:pl-4 sm:text-sm`}
                  >
                    {event.title} - {event.day} · {event.time.split(' ')[0]} · Prédio da Igreja
                  </a>

                  <button
                    onClick={() => saveToCalendar(event)}
                    className={`ml-2 px-2 py-1 text-[8px] font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 sm:px-3 ${
                      event.color === 'white'
                        ? 'bg-move-blue text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    TE VEJO LÁ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-3 md:gap-8">
          <div className="neo-brutalist-shadow group relative h-56 overflow-hidden border-4 border-move-blue sm:h-64 md:col-span-2 md:h-72">
            <div className="absolute inset-0 bg-neutral-900">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPdN2pB06pRpNjvO3jJbIKi8_mOKL0n1pEVnENGYgtGdzP9OJb0lDYQo2NX7-GuXnbcacWnszeyatvNOTdtfaTykuw6XLTB98Ppp3-dsYZAgZuHFgLlW-iw1lxkkkLWGYvmPuDNgc7GlsksnB-qzy9wmu4Z8sCUrHSKqQJXska9spWvQmUBcdnCn0ChMyYKdDBaeORVwxzD8A1O3_h5sP5yRXU3eZbWAR9KV6mCTJaU62G63uOBOTyh8yF9J_wHeDmlir1LnED7rI"
                alt="Local"
                className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:grayscale-0"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group/loc relative flex h-full flex-col justify-between p-4 sm:p-6 md:p-8"
            >
              <div className="inline-block self-start bg-move-blue px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white sm:px-4 sm:text-xs">
                LOCALIZAÇÃO
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase leading-none tracking-tighter text-white transition-colors group-hover/loc:text-move-blue sm:text-3xl md:text-5xl">
                  IGREJA DINAMUS ALPHAVILLE
                </h3>
                <p className="mt-2 inline-block bg-black/60 px-2 text-[10px] font-bold uppercase text-white sm:mt-3 sm:text-xs md:text-sm">
                  Alameda Mamoré, 521 - Alphaville, Barueri - SP
                </p>
              </div>
            </a>
          </div>

          <div className="neo-brutalist-shadow group flex flex-col justify-between border-4 border-black bg-move-pink p-4 text-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-6 md:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center border-4 border-white bg-black sm:mb-6 sm:h-14 sm:w-14 md:h-16 md:w-16">
              <QrCode size={28} className="sm:hidden" />
              <QrCode size={32} className="hidden sm:block" />
            </div>

            <div>
              <h4 className="mb-2 text-2xl font-black uppercase leading-none sm:mb-3 sm:text-3xl">
                ACESSO VIP
              </h4>
              <p className="text-xs font-bold uppercase leading-tight opacity-90 sm:text-sm">
                DOWNLOAD DO MOVE APP PARA ACESSO EXCLUSIVO AOS WORKSHOPS E NETWORKING.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10 md:mt-12">
          <button
            onClick={() => juneEvents[0] && saveToCalendar(juneEvents[0])}
            className="neo-brutalist-shadow bg-move-blue px-6 py-3 text-lg font-black uppercase tracking-tighter text-white transition-all hover:scale-105 active:scale-95 sm:px-8 sm:py-4 sm:text-xl md:px-12 md:py-6 md:text-2xl"
          >
            TE VEJO LÁ
          </button>
        </div>
      </div>
    </div>
  );
}
