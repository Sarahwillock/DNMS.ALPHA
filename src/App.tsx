import MoveBottomNav from './components/MoveBottomNav';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import April from './pages/April';
import May from './pages/May';
import June from './pages/June';
import GCs from './pages/GCs';
import FullSchedule from './pages/FullSchedule';
import Leaders from './pages/Leaders';
import Local from './pages/Local';
import PortalHome from './pages/PortalHome';
import HomePage from './pages/Home';
import DinamusHome from './pages/DinamusHome';
import HuiosHome from './pages/HuiosHome';

function MoveLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col lg:ml-64">
        <Navbar />

        <main className="flex-1 pb-24">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/move" element={<HomePage />} />
              <Route path="/move/schedules" element={<HomePage />} />
              <Route path="/move/june" element={<June />} />
              <Route path="/move/april" element={<April />} />
              <Route path="/move/may" element={<May />} />
              <Route path="/move/local" element={<Local />} />
              <Route path="/move/venue" element={<Local />} />
              <Route path="/move/gcs" element={<GCs />} />
              <Route path="/move/full-schedule" element={<FullSchedule />} />
              <Route path="/move/leaders" element={<Leaders />} />
              <Route path="/move/tickets" element={<GCs />} />
            </Routes>
          </AnimatePresence>
        </main>

        <MoveBottomNav />
      </div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isMoveRoute =
    location.pathname === '/move' || location.pathname.startsWith('/move/');

  if (isMoveRoute) {
    return <MoveLayout />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PortalHome />} />
        <Route path="/dinamus" element={<DinamusHome />} />
        <Route path="/huios" element={<HuiosHome />} />
        <Route path="*" element={<PortalHome />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
