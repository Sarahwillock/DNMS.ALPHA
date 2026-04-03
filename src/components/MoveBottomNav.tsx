import { Link, useLocation } from 'react-router-dom';
import { Calendar, Mic2, Ticket, MapPin, LayoutGrid, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Portal', path: '/', icon: Home },
  { name: 'Início', path: '/move/schedules', icon: Home },
  { name: 'Agenda', path: '/move/full-schedule', icon: Calendar },
  { name: 'EVENTOS MOVE', path: '/move/june', icon: LayoutGrid },
  { name: 'Líderes', path: '/move/leaders', icon: Mic2 },
  { name: 'GCs', path: '/move/gcs', icon: Ticket },
  { name: 'Local', path: '/move/local', icon: MapPin },
];

export default function MoveBottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full overflow-x-auto border-t-2 border-move-blue bg-neutral-950 font-bold uppercase">
      <div className="flex min-w-max items-center justify-around px-2 md:min-w-0">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'flex min-w-[80px] flex-1 flex-col items-center justify-center p-3 transition-all',
                isActive
                  ? 'border-t-4 border-move-blue bg-move-blue/10 text-move-blue'
                  : 'text-neutral-400 hover:bg-move-pink/5 hover:text-move-pink'
              )}
            >
              <Icon size={20} className={cn(isActive && 'scale-110')} />
              <span className="mt-1 text-[10px] tracking-tighter">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
