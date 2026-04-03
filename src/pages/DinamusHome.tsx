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
  whatsapp: string;
}

const CHURCH_NAME = 'Igreja Dinamus Alphaville';
const CHURCH_ADDRESS =
  'Estrada Bela Vista, 2914 - Alphaville, Santana de Parnaíba - SP, 06472-005';
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
    url: 'https://www.instagram.com/igrejadinamus.alpha/',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Nossas playlists de louvor e adoração.',
    icon: 'spotify',
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-emerald-500/20',
    url: 'https://open.spotify.com/show/15u64TmCzhRq1SWYCMY71J?si=ca3bf7d811784b43',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'Assista nossas mensagens e transmissões.',
    icon: 'youtube',
    color: 'text-red-500',
    gradient: 'from-red-500/20 to-rose-700/20',
    url: 'https://www.youtube.com/c/DINAMUSALPHAVILLE',
  },
];

const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Cantata de Páscoa',
    date: '05',
    month: 'Abr',
    description: 'Às 10:00 no DNMS.ALPHA Principal',
    location: CHURCH_LOCATION,
    isPrimary: true,
  },
  {
    id: '2',
    title: 'Corrida Dokimos',
    date: '11',
    month: 'Abr',
    description: 'Às 08:00 - Concentração no estacionamento',
    location: CHURCH_LOCATION,
  },
  {
    id: '3',
    title: 'Culto de Domingo',
    date: '12',
    month: 'Abr',
    description: 'Todos os domingos às 10:00',
    location: CHURCH_LOCATION,
  },
  {
    id: '4',
    title: 'Culto de Domingo',
    date: '19',
    month: 'Abr',
    description: 'Todos os domingos às 10:00',
    location: CHURCH_LOCATION,
  },
];

const GCS: GC[] = [
  {
    id: '1',
    leaders: 'Manoel e Carol',
    day: 'Quinta',
    time: '20:00',
    frequency: 'Quinzenal',
    whatsapp: '5511991185859',
  },
  {
    id: '2',
    leaders: 'João e Gisely',
    day: 'Quinta',
    time: '20:00',
    frequency: 'Quinzenal',
    whatsapp: '55119944894120',
  },
  {
    id: '3',
    leaders: 'Beto e Angela',
    day: 'Quinta',
    time: '20:00',
    frequency: 'Quinzenal',
    whatsapp: '5511988915662',
  },
  {
    id: '4',
    leaders: 'Alan e Cibele',
    day: 'Quinta',
    time: '20:00',
    frequency: 'Quinzenal',
    whatsapp: '551193242174',
  },
  {
    id: '5',
    leaders: 'Bruno e Diana',
    day: 'Quinta',
    time: '20:00',
    frequency: 'Quinzenal',
    whatsapp: '5511963970097',
  },
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

    const fullDescription = `${event.description}\n\nLocal: ${
      event.location || CHURCH_LOCATION
    }\nMapa: ${CHURCH_MAPS}`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Dinamus Alphaville//Agenda//PT-BR',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `DTSTART:${year}${month}${date}
