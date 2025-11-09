import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} AquaPure. All rights reserved.
          </p>
          <div className="text-sm text-slate-500">
            Built with care for clean water and clean design.
          </div>
        </div>
      </div>
    </footer>
  );
}
