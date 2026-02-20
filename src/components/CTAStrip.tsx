import { Link } from 'react-router-dom';
import { Phone, ClipboardList } from 'lucide-react';

const PHONE = '570-730-0447';

interface CTAStripProps {
  heading?: string;
  subtext?: string;
  dark?: boolean;
}

export default function CTAStrip({
  heading = 'Ready to Reclaim Your Space?',
  subtext = 'Same-day and next-day service available. Free, no-obligation estimates.',
  dark = false,
}: CTAStripProps) {
  return (
    <section className={`py-14 ${dark ? 'bg-green-900' : 'bg-green-700'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{heading}</h2>
        <p className="text-green-200 mb-8 text-base">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full text-base shadow-xl hover:shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call {PHONE}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-800 font-bold px-8 py-4 rounded-full text-base shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <ClipboardList className="w-5 h-5" />
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
