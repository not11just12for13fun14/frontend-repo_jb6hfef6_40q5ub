import React, { useMemo, useState } from 'react';
import { Droplets, SortAsc, SortDesc } from 'lucide-react';
import { DEFAULT_PURIFIERS } from './data';

function PurifierCard({ purifier, onView }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={purifier.image}
          alt={purifier.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
          <Droplets size={14} /> {purifier.series}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{purifier.name}</h3>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {purifier.color}
          </span>
        </div>
        <ul className="mt-3 space-y-1 text-sm text-slate-600">
          {purifier.highlights?.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {h}
            </li>
          ))}
        </ul>
        {onView && (
          <div className="mt-4">
            <button
              onClick={() => onView(purifier)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PurifierList({ items = DEFAULT_PURIFIERS, onView }) {
  const [sortKey, setSortKey] = useState('name');
  const [ascending, setAscending] = useState(true);

  const sorted = useMemo(() => {
    const arr = [...items];
    arr.sort((a, b) => {
      const x = String(a[sortKey] ?? '').toLowerCase();
      const y = String(b[sortKey] ?? '').toLowerCase();
      if (x < y) return ascending ? -1 : 1;
      if (x > y) return ascending ? 1 : -1;
      return 0;
    });
    return arr;
  }, [items, sortKey, ascending]);

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Our Purifiers</h2>
            <p className="mt-1 text-slate-600">Browse the collection and sort by what matters to you.</p>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sortKey" className="text-sm font-medium text-slate-700">Sort by</label>
            <select
              id="sortKey"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name</option>
              <option value="series">Series</option>
              <option value="color">Color</option>
            </select>
            <button
              aria-label={ascending ? 'Ascending' : 'Descending'}
              onClick={() => setAscending((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50"
            >
              {ascending ? <SortAsc size={18} /> : <SortDesc size={18} />}
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((p) => (
            <PurifierCard key={p.id ?? p.name} purifier={p} onView={onView} />
          ))}
        </div>
      </div>
    </section>
  );
}
