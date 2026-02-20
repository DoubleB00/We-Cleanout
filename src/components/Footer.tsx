import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Trash2, Clock } from 'lucide-react';

const PHONE = '570-730-0447';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-700 rounded-lg p-2">
                <Trash2 className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-black text-lg">We Cleanout</span>
                <span className="block text-orange-400 font-bold text-xs tracking-widest uppercase">Junk LLC</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Monroe & Northampton County's most trusted junk removal company. Fast, affordable, and eco-friendly service you can count on.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="bg-gray-800 hover:bg-green-700 p-2.5 rounded-lg transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 hover:bg-green-700 p-2.5 rounded-lg transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'About Us', to: '/about' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Free Estimate', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-sm hover:text-green-400 transition-colors flex items-center gap-1.5">
                    <span className="text-orange-400">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Residential Cleanouts',
                'Commercial Cleanouts',
                'Junk Removal',
                'Property Cleanouts',
                'Demolition Services',
                'Donation Pickup',
                'Dumpster Rentals',
              ].map((s) => (
                <li key={s} className="flex items-center gap-1.5">
                  <span className="text-orange-400">›</span> {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${PHONE}`} className="flex items-start gap-3 group">
                  <div className="bg-green-700 p-2 rounded-lg mt-0.5 shrink-0 group-hover:bg-green-600 transition-colors">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                    <p className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">{PHONE}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@wecleanoutjunk.com" className="flex items-start gap-3 group">
                  <div className="bg-green-700 p-2 rounded-lg mt-0.5 shrink-0 group-hover:bg-green-600 transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <p className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">info@wecleanoutjunk.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-700 p-2 rounded-lg mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Service Area</p>
                  <p className="text-white font-semibold text-sm">Monroe & Northampton County, PA</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-700 p-2 rounded-lg mt-0.5 shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Hours</p>
                  <p className="text-white font-semibold text-sm">Mon–Sat: 7AM – 7PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} We Cleanout Junk LLC. All rights reserved.</p>
          <p>Licensed & Insured | Serving the Poconos Region</p>
        </div>
      </div>
    </footer>
  );
}
