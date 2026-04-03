import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-move-blue bg-neutral-950 px-6 py-4 font-bold uppercase tracking-tighter text-move-blue">
      <Link to="/move/schedules" className="text-2xl font-black italic text-move-blue">
        MOVE
      </Link>

      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/move.alphaville/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-[10px] tracking-widest text-move-pink transition-colors hover:text-white lg:block"
        >
          @MOVE.ALPHAVILLE
        </a>
        <Link to="/move/full-schedule">
          <Calendar className="cursor-pointer transition-colors hover:text-move-pink" size={20} />
        </Link>
      </div>
    </nav>
  );
}
