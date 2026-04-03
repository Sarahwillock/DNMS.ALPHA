import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Download } from 'lucide-react';
import { MOVE_EVENTS } from '../constants/events';
import { saveToCalendar } from '../lib/calendar';

export default function FullSchedule() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="bg-move-pink p-4 neo-brutalist-shadow">
          <Calendar className="text-white" size={40} />
        </div>
        <h1 className="text-6xl font-black italic uppercase tracking-tighter text-move-pink">AGENDA COMPLETA</h1>
      </div>

      <div className="space-y-6">
        {MOVE_EVENTS.map((event) => (
          <div 
            key={event.id}
            className={`glass-card p-6 border-l-8 ${
              event.color === 'move-blue' ? 'border-move-blue' : 
              event.color === 'move-pink' ? 'border-move-pink' : 
              event.color === 'move-orange' ? 'border-move-orange' : 'border-white'
            } flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-white/5 transition-all`}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex flex-col items-center justify-center bg-white text-black px-4 py-2 min-w-[100px] neo-brutalist-shadow">
                <span className="text-2xl font-black">{event.date.split('/')[0]}</span>
                <span className="text-xs font-bold uppercase">{event.month.substring(0, 3)}</span>
              </div>
              
              <div>
                <h3 className="text-3xl font-black uppercase leading-none mb-2 group-hover:text-move-blue transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-tight text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{event.day} · {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location.split(' - ')[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => saveToCalendar(event)}
              className="flex items-center gap-3 bg-move-blue text-white px-6 py-3 font-black uppercase tracking-tighter hover:bg-move-pink transition-all active:scale-95"
            >
              <Download size={20} />
              TE VEJO LÁ
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-black border-2 border-move-blue text-center">
        <p className="text-xl font-bold uppercase tracking-widest mb-4">Acompanhe todas as novidades no Instagram</p>
        <a 
          href="https://www.instagram.com/move.alphaville/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-move-blue text-3xl font-black italic uppercase hover:text-move-pink transition-colors"
        >
          @MOVE.ALPHAVILLE
        </a>
      </div>
    </motion.div>
  );
}
