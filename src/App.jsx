import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PurifierList from './components/PurifierList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { DEFAULT_PURIFIERS } from './components/data';

function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Us</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          We design RO purifiers that blend performance with modern aesthetics. Our Elite and Metalic series focus on reliability, taste, and style—so your kitchen looks as good as your water tastes. We don’t sell online here; this space is a clean showcase for you to explore our models.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact Us</h2>
        <p className="mt-3 text-slate-600">We’d love to hear from you. Reach out for dealership, service, or product inquiries.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase text-slate-500">Email</div>
            <a href="mailto:hello@aquapure.example" className="mt-1 block text-blue-600 hover:underline">hello@aquapure.example</a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase text-slate-500">Phone</div>
            <a href="tel:+1234567890" className="mt-1 block text-blue-600 hover:underline">+1 (234) 567-890</a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase text-slate-500">Location</div>
            <div className="mt-1 text-slate-700">Mumbai, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const [customItems, setCustomItems] = useState(null);
  const [active, setActive] = useState(null);

  const items = useMemo(() => customItems ?? DEFAULT_PURIFIERS, [customItems]);

  const onExplore = () => setPage('purifiers');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar currentPage={page} onNavigate={setPage} />

      {page === 'home' && (
        <>
          <Hero onExplore={onExplore} />
          <PurifierList items={items} onView={setActive} />
          <About />
          <Contact />
        </>
      )}

      {page === 'purifiers' && (
        <>
          <Hero onExplore={onExplore} />
          <PurifierList items={items} onView={setActive} />
        </>
      )}

      {page === 'about' && <About />}

      {page === 'contact' && <Contact />}

      <Footer />

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.name || 'Details'}
        footer={
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-500">Series: {active?.series} • Color: {active?.color}</div>
            <button
              onClick={() => setActive(null)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        }
      >
        {active && (
          <div className="grid sm:grid-cols-2 gap-4">
            <img src={active.image} alt={active.name} className="w-full h-64 object-cover rounded-xl" />
            <div>
              <h4 className="font-semibold mb-2">Highlights</h4>
              <ul className="space-y-1 text-slate-700 text-sm">
                {active.highlights?.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
