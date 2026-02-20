import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ClipboardList, X } from 'lucide-react';

const PHONE = '570-730-0447';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-500 ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 px-4 py-3 flex items-center gap-2 shadow-2xl">
          <a
            href={`tel:${PHONE}`}
            className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-black px-4 py-3 rounded-xl text-sm transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 active:bg-green-900 text-white font-black px-4 py-3 rounded-xl text-sm transition-colors shadow-lg"
          >
            <ClipboardList className="w-4 h-4" />
            Free Estimate
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-gray-400 hover:text-white p-2 transition-colors shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop floating call button */}
      <a
        href={`tel:${PHONE}`}
        className={`hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-black px-6 py-4 rounded-full shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 group ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        aria-label="Call us"
      >
        <div className="bg-white/20 rounded-full p-1.5 group-hover:animate-pulse">
          <Phone className="w-5 h-5" />
        </div>
        <div className="leading-tight">
          <p className="text-orange-100 text-xs font-medium">Call for Free Estimate</p>
          <p className="text-white font-black">{PHONE}</p>
        </div>
      </a>
    </>
  );
}
