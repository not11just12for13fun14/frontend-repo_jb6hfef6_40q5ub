import React from 'react';
import { Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8gXjNn2s3p3W4C5u/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm">
              <Sparkles size={14} /> Pure water. Pure design.
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Showcase of Modern RO Water Purifiers
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Explore our Elite and Metalic series engineered to deliver crystal-clear hydration with a minimalist aesthetic.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
              >
                Explore Purifiers
              </button>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-slate-800 font-semibold hover:bg-slate-50"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-100 via-white to-blue-50 p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556229174-5d27d7ab9c11?q=80&w=1600&auto=format&fit=crop"
                alt="Modern RO purifier on kitchen counter"
                className="h-full w-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
