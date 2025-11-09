import React from 'react';
import { Droplets, Phone, Info, Home } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const linkBase =
    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors';
  const active = 'bg-blue-600 text-white shadow';
  const inactive =
    'text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800';

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-2"
            aria-label="AquaPure Home"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <Droplets size={20} />
            </span>
            <div className="text-left">
              <div className="text-base font-semibold tracking-tight">AquaPure</div>
              <div className="text-xs text-slate-500 -mt-0.5">RO Purifiers</div>
            </div>
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => onNavigate('home')}
              className={`${linkBase} ${currentPage === 'home' ? active : inactive}`}
            >
              <Home size={16} /> Home
            </button>
            <button
              onClick={() => onNavigate('purifiers')}
              className={`${linkBase} ${currentPage === 'purifiers' ? active : inactive}`}
            >
              <Droplets size={16} /> Purifiers
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`${linkBase} ${currentPage === 'about' ? active : inactive}`}
            >
              <Info size={16} /> About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`${linkBase} ${currentPage === 'contact' ? active : inactive}`}
            >
              <Phone size={16} /> Contact
            </button>
          </nav>

          {/* Mobile */}
          <div className="md:hidden">
            <select
              aria-label="Navigate"
              value={currentPage}
              onChange={(e) => onNavigate(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="home">Home</option>
              <option value="purifiers">Purifiers</option>
              <option value="about">About</option>
              <option value="contact">Contact</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
