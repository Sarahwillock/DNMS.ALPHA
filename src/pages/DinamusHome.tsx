import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Calendar,
  CalendarDays,
  Check,
  Church,
  Clock,
  Contact2,
  Copy,
  CreditCard,
  Download,
  ExternalLink,
  Heart,
  Home,
  Instagram,
  MapPin,
  MessageSquare,
  Music2,
  Phone,
  Search,
  Users,
  Wallet,
  Youtube,
} from 'lucide-react';

type TabKey = 'home' | 'agenda' | 'gcs' | 'fidelidade' | 'contato';

interface EventItem {
  id: string;
  title: string;
  date: string;
  month: string;
  description: string;
  location?: string;
  isPrimary?: boolean;
}

interface SocialLink {
  id: string;
  name: string;
  description: string;
  icon: 'instagram' | 'spotify' | 'youtube';
  color: string;
  gradient: string;
  url: string;
}

interface GC {
  id: string;
  leaders: string;
  day: string;
  time: string;
  frequency: string;
}

const CHURCH_NAME = 'Igreja Dinamus Alphaville';
const CHURCH_ADDRESS = 'Estrada Bela Vista, 2914 - Alphaville, Santana de Parnaíba - SP, 06472-005';
const CHURCH_MAPS =
  'https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D';
const CHURCH_LOCATION = `${CHURCH_NAME} - ${CHURCH_ADDRESS}`;

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Acompanhe nossos cultos, eventos e bastidores.',
    icon: 'instagram',
    color: 'text-pink-400',
    gradient: 'from-pink-500/20 to-orange-500/20',
    url: 'https://www.instagram.com/igrejadinamus.alpha/'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Nossas playlists de louvor e adoração.',
    icon: 'spotify',
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-emerald-500/20',
    url: 'https://open.spotify.com/show/15u64TmCzhRq1SWYCMY71J?si=ca3bf7d811784b43'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'Assista nossas mensagens e transmissões.',
    icon: 'youtube',
    color: 'text-red-500',
    gradient: 'from-red-500/20 to-rose-700/20',
    url: 'https://www.youtube.com/c/DINAMUSALPHAVILLE'
  }
];

const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Cantata de Páscoa',
    date: '05',
    month: 'Abr',
    description: 'Às 10:00 no DNMS.ALPHA Principal',
    location: CHURCH_LOCATION,
    isPrimary: true
  },
  {
    id: '2',
    title: 'Corrida Dokimos',
    date: '11',
    month: 'Abr',
    description: 'Às 08:00 - Concentração no estacionamento',
    location: CHURCH_LOCATION
  },
  {
    id: '3',
    title: 'Culto de Domingo',
    date: '12',
    month: 'Abr',
    description: 'Todos os domingos às 10:00',
    location: CHURCH_LOCATION
  },
  {
    id: '4',
    title: 'Culto de Domingo',
    date: '19',
    month: 'Abr',
    description: 'Todos os domingos às 10:00',
    location: CHURCH_LOCATION
  }
];

const GCS: GC[] = [
  { id: '1', leaders: 'Manoel e Carol', day: 'Quinta', time: '20:00', frequency: 'Quinzenal' },
  { id: '2', leaders: 'João e Gisely', day: 'Quinta', time: '20:00', frequency: 'Quinzenal' },
  { id: '3', leaders: 'Beto e Angela', day: 'Quinta', time: '20:00', frequency: 'Quinzenal' },
  { id: '4', leaders: 'Alan e Cibele', day: 'Quinta', time: '20:00', frequency: 'Quinzenal' },
  { id: '5', leaders: 'Bruno e Diana', day: 'Quinta', time: '20:00', frequency: 'Quinzenal' }
];

export default function DinamusHome() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  const addToCalendar = (event: EventItem) => {
    const year = 2026;
    const monthMap: Record<string, string> = { Abr: '04' };
    const month = monthMap[event.month] || '04';
    const date = event.date.padStart(2, '0');

    const startHour = event.title === 'Corrida Dokimos' ? '080000' : '100000';
    const endHour = event.title === 'Corrida Dokimos' ? '100000' : '120000';

    const safeText = (value: string) =>
      value
        .replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\n')
        .replace(/,/g, '\\,')
        .replace(/;/g, '\\;');

    const fullDescription = `${event.description}\n\nLocal: ${event.location || CHURCH_LOCATION}\nMapa: ${CHURCH_MAPS}`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Dinamus Alphaville//Agenda//PT-BR',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `DTSTART:${year}${month}${date}T${startHour}Z`,
      `DTEND:${year}${month}${date}T${endHour}Z`,
      `SUMMARY:${safeText(event.title)}`,
      `DESCRIPTION:${safeText(fullDescription)}`,
      `LOCATION:${safeText(event.location || CHURCH_LOCATION)}`,
      `URL:${CHURCH_MAPS}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0c0e10] text-[#e3e6ea] selection:bg-[#AC351B]/30">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Church className="h-6 w-6 text-[#AC351B]" />
            <div>
              <p className="text-lg font-bold tracking-tight">DNMS.ALPHA</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Dinamus Alphaville</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition hover:border-[#AC351B] hover:text-white"
            >
              <ArrowLeft size={16} /> Portal
            </Link>
            <button className="rounded-full p-2 text-white/70 transition hover:bg-white/5 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-32 pt-8 md:px-6 md:pt-10">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10 md:space-y-14"
            >
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
              >
                <img
                  src="/capa.JPEG"
                  alt="Dinamus Alphaville"
                  className="h-[340px] w-full object-cover object-top md:h-[460px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e10] via-[#0c0e10]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                  <div className="max-w-3xl rounded-[1.75rem] border border-white/10 bg-black/35 p-6 backdrop-blur-sm md:p-8">
                    <div className="mb-4 inline-flex rounded-full border border-white/15 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.35em] text-white/65">
                      Portal Dinamus
                    </div>
                    <h1 className="text-4xl font-black leading-none text-white md:text-6xl">
                      Um lugar para pertencer.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                      Descubra como se conectar, participar dos eventos da casa, encontrar um GC e caminhar em comunidade.
                    </p>
                  </div>
                </div>
              </motion.section>

              <section className="rounded-[2rem] border border-[#AC351B]/20 bg-[#AC351B]/8 p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-[1.5rem] bg-[#AC351B] text-white shadow-lg shadow-[#AC351B]/20">
                    <span className="text-xs font-bold uppercase tracking-[0.25em]">{EVENTS[0].month}</span>
                    <span className="text-4xl font-black">{EVENTS[0].date}</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block rounded-full bg-[#AC351B]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff987c]">
                      Próximo Evento
                    </span>
                    <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">{EVENTS[0].title}</h2>
                    <p className="mt-2 text-white/70 md:text-lg">{EVENTS[0].description}</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('agenda')}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#AC351B] px-6 py-4 font-bold text-white transition hover:bg-[#922a14]"
                  >
                    Ver agenda <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </section>

              <section className="space-y-6">
                <div>
                  <h3 className="text-3xl font-black text-[#ff987c] md:text-4xl">Conecte-se conosco</h3>
                  <p className="mt-2 text-white/60">Acompanhe a Dinamus nos canais oficiais.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {SOCIAL_LINKS.map((link, index) => (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#14171a] p-8 transition-all hover:-translate-y-1 hover:border-white/20"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                      <div className="relative z-10 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-black/30">
                          {link.icon === 'instagram' && <Instagram className={`h-8 w-8 ${link.color}`} />}
                          {link.icon === 'spotify' && <Music2 className={`h-8 w-8 ${link.color}`} />}
                          {link.icon === 'youtube' && <Youtube className={`h-8 w-8 ${link.color}`} />}
                        </div>
                        <span className="block text-2xl font-bold text-white">{link.name}</span>
                        <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </section>

              <section>
                <div className="group relative overflow-hidden rounded-[2rem] bg-[#AC351B] p-8 text-white shadow-2xl shadow-[#AC351B]/15 md:p-10">
                  <div className="absolute right-0 top-0 p-10 opacity-10 transition-transform duration-700 group-hover:scale-110">
                    <MessageSquare className="h-28 w-28" />
                  </div>
                  <div className="relative z-10 max-w-2xl">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                    <h4 className="text-3xl font-black md:text-4xl">Precisa de ajuda ou aconselhamento?</h4>
                    <p className="mt-4 text-lg leading-8 text-white/85">
                      Nossa equipe de cuidado está pronta para ouvir você e caminhar ao seu lado.
                    </p>
                    <a
                      href="#"
                      className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#AC351B] transition hover:bg-[#e3e6ea]"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Fale no WhatsApp
                    </a>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'agenda' && (
            <motion.div
              key="agenda"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <SectionHeader icon={<Calendar className="h-10 w-10 text-[#AC351B]" />} title="Agenda" description="Fique por dentro de tudo o que acontece na nossa igreja." />

              <div className="rounded-[2rem] bg-[#121518] p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {EVENTS.map((event) => (
                    <div key={event.id} className="flex flex-col gap-5 rounded-[1.5rem] border border-white/8 bg-[#1a1e21] p-6 transition hover:border-white/15 md:flex-row md:items-center">
                      <div className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl ${event.isPrimary ? 'bg-[#AC351B] text-white' : 'bg-[#22272a] text-white/70'}`}>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{event.month}</span>
                        <span className="text-2xl font-black">{event.date}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">{event.title}</h4>
                        <p className="mt-1 text-sm leading-6 text-white/60">{event.description}</p>
                      </div>
                      <button
                        onClick={() => addToCalendar(event)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#AC351B]/10 px-4 py-3 text-sm font-bold text-[#ff987c] transition hover:bg-[#AC351B] hover:text-white"
                      >
                        <Download className="h-4 w-4" /> Salve essa data
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'gcs' && (
            <motion.div
              key="gcs"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <SectionHeader icon={<Users className="h-10 w-10 text-[#AC351B]" />} title="Grupos de Comunhão" description="Encontre um GC próximo a você e comece sua jornada em comunidade." />

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {GCS.map((gc) => (
                  <motion.div
                    key={gc.id}
                    whileHover={{ y: -5 }}
                    className="rounded-[2rem] border border-white/10 bg-[#121518] p-8 transition hover:border-[#AC351B]/35"
                  >
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="rounded-2xl bg-[#AC351B]/10 p-4">
                        <Users className="h-8 w-8 text-[#ff987c]" />
                      </div>
                      <span className="rounded-full bg-[#1d2125] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/55">
                        {gc.frequency}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">{gc.leaders}</h4>
                    <div className="mt-5 space-y-3 text-white/65">
                      <div className="flex items-center gap-3"><Calendar className="h-5 w-5 text-[#ff987c]/70" /> <span>{gc.day}</span></div>
                      <div className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-[#ff987c]/70" /> <span>{gc.time}</span></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'fidelidade' && (
            <motion.div
              key="fidelidade"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <SectionHeader icon={<Heart className="h-10 w-10 text-[#AC351B]" />} title="Fidelidade" description="Continue sendo fiel onde estiver. Invista em sua igreja através de transferência bancária." />

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-[#121518] p-8 md:col-span-2 md:flex md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Igreja Evangélica Dinamus Alphaville</h3>
                    <p className="mt-2 text-white/60">CNPJ: 43.177.933/0001-61</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('43.177.933/0001-61', 'cnpj')}
                    className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#1d2125] px-6 py-3 font-bold transition hover:bg-[#AC351B] hover:text-white md:mt-0"
                  >
                    {copied === 'cnpj' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    {copied === 'cnpj' ? 'Copiado!' : 'Copiar CNPJ'}
                  </button>
                </div>

                <BankCard bank="Banco Santander" agencia="0509" conta="13005066-1" icon={<CreditCard className="h-6 w-6" />} />
                <BankCard bank="Banco Itaú" agencia="3385" conta="06190-2" icon={<Wallet className="h-6 w-6" />} />

                <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#AC351B] p-8 text-white shadow-2xl shadow-[#AC351B]/15 md:col-span-2 md:p-10">
                  <div className="absolute right-0 top-0 p-10 opacity-10 transition-transform duration-700 group-hover:scale-110">
                    <Heart className="h-36 w-36" />
                  </div>
                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-3xl font-black">Através do PIX (E-mail)</h4>
                      <p className="mt-3 text-xl font-semibold tracking-wide text-white/85">DNMSALPHA@GMAIL.COM</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('DNMSALPHA@GMAIL.COM', 'pix')}
                      className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#AC351B] transition hover:bg-[#e3e6ea]"
                    >
                      {copied === 'pix' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      {copied === 'pix' ? 'Copiado!' : 'Copiar Chave PIX'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'contato' && (
            <motion.div
              key="contato"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <SectionHeader icon={<Contact2 className="h-10 w-10 text-[#AC351B]" />} title="Contato" description="Estamos aqui para ouvir você. Entre em contato através dos nossos canais oficiais." />

              <div className="grid gap-8 md:grid-cols-2">
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#AC351B] p-8 text-white shadow-2xl shadow-[#AC351B]/15 md:col-span-2 md:p-10">
                  <div className="absolute right-0 top-0 p-10 opacity-10 transition-transform duration-700 group-hover:scale-110">
                    <MessageSquare className="h-36 w-36" />
                  </div>
                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-xl">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-lg bg-white/20 p-2"><Phone className="h-6 w-6" /></div>
                        <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/75">Canal de Informações</span>
                      </div>
                      <h4 className="text-4xl font-black">WhatsApp Oficial</h4>
                      <p className="mt-4 text-lg leading-8 text-white/85">
                        Tire suas dúvidas, receba avisos e fique por dentro de tudo o que acontece no DNMS.ALPHA.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#AC351B] transition hover:bg-[#e3e6ea]"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Abrir WhatsApp
                    </a>
                  </div>
                </div>

                <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#121518] p-8">
                  <h4 className="text-2xl font-bold text-white">Localização</h4>
                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-xl bg-[#AC351B]/10 p-3 text-[#ff987c]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Endereço</p>
                      <p className="mt-1 text-white/65">{CHURCH_ADDRESS}</p>
                      <a
                        href={CHURCH_MAPS}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#ff987c] hover:underline"
                      >
                        Ver no Maps <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#121518] p-8">
                  <h4 className="text-2xl font-bold text-white">Atendimento</h4>
                  <div className="flex gap-4">
                    <div className="shrink-0 rounded-xl bg-[#AC351B]/10 p-3 text-[#ff987c]">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Horários</p>
                      <p className="mt-1 text-white/65">Segunda a Sexta: 09:00 - 18:00</p>
                      <p className="text-white/65">Domingos: 10:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 bg-[#111416] pt-16 pb-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
          <div className="flex items-center gap-3">
            <Church className="h-8 w-8 text-[#AC351B]" />
            <span className="text-2xl font-bold text-white">DNMS.ALPHA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/65">
            <a href="https://www.instagram.com/igrejadinamus.alpha/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ff987c]">Instagram</a>
            <a href="https://open.spotify.com/show/15u64TmCzhRq1SWYCMY71J?si=ca3bf7d811784b43" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ff987c]">Spotify</a>
            <a href="https://www.youtube.com/c/DINAMUSALPHAVILLE" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ff987c]">YouTube</a>
          </div>
          <div className="h-px w-full bg-white/10" />
          <p className="text-sm text-white/45">© 2024 DNMS.ALPHA. Todos os direitos reservados.</p>
        </div>
      </footer>

      <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-black/65 px-4 pb-6 pt-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<Home className="h-5 w-5" />} label="Início" />
          <NavButton active={activeTab === 'agenda'} onClick={() => setActiveTab('agenda')} icon={<Calendar className="h-5 w-5" />} label="Agenda" />
          <NavButton active={activeTab === 'gcs'} onClick={() => setActiveTab('gcs')} icon={<Users className="h-5 w-5" />} label="GCs" />
          <NavButton active={activeTab === 'fidelidade'} onClick={() => setActiveTab('fidelidade')} icon={<Banknote className="h-5 w-5" />} label="Fidelidade" />
          <NavButton active={activeTab === 'contato'} onClick={() => setActiveTab('contato')} icon={<Contact2 className="h-5 w-5" />} label="Contato" />
        </div>
      </nav>
    </div>
  );
}

function SectionHeader({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#AC351B]/10">
        {icon}
      </div>
      <h2 className="text-4xl font-black text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-white/60">{description}</p>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex min-w-[78px] flex-col items-center gap-1.5 rounded-2xl px-3 py-2 transition-all duration-300 ${
        active ? 'scale-105 bg-[#AC351B] text-white shadow-lg shadow-[#AC351B]/20' : 'text-white/55 hover:bg-white/5 hover:text-white'
      }`}
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</span>
    </button>
  );
}

function BankCard({ bank, agencia, conta, icon }: { bank: string; agencia: string; conta: string; icon: ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#171b1e] p-8 transition hover:border-[#AC351B]/35">
      <div className="mb-6 flex items-center gap-4">
        <div className="rounded-2xl bg-[#AC351B]/10 p-3 text-[#ff987c]">{icon}</div>
        <h4 className="text-xl font-bold text-white">{bank}</h4>
      </div>
      <div className="space-y-4">
        <CopyField label="Agência" value={agencia} />
        <CopyField label="Conta Corrente" value={conta} />
      </div>
    </div>
  );
}

function CopyField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#121518] p-4">
      <div>
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">{label}</p>
        <p className="font-mono text-lg font-bold text-white">{value}</p>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(value)}
        className="rounded-lg p-2 text-white/45 transition hover:text-[#ff987c]"
      >
        <Copy className="h-4 w-4" />
      </button>
    </div>
  );
}
