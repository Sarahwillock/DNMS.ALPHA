import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const months = [
  { name: 'Abril', path: '/move/april' },
  { name: 'Maio', path: '/move/may' },
  { name: 'Junho', path: '/move/june' },
];

export default function MonthSwitcher() {
  const location = useLocation();

  return (
    <div className="mb-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      {months.map((month) => {
        const isActive = location.pathname === month.path;
        return (
          <Link
            key={month.name}
            to={month.path}
            className={cn(
              'border-2 px-6 py-2 font-black uppercase italic tracking-tighter transition-all',
              isActive
                ? 'z-10 scale-105 border-move-blue bg-move-blue text-white'
                : 'border-white/20 bg-black/40 text-white/60 hover:border-white/60'
            )}
          >
            {month.name}
          </Link>
        );
      })}
      <Link
        to="/move/schedules"
        className="ml-auto border-2 border-white/20 bg-black/40 px-6 py-2 font-black uppercase italic tracking-tighter text-white/60 transition-all hover:border-white/60"
      >
        EVENTOS MOVE
      </Link>
    </div>
  );
}
