import { Link } from 'react-router-dom';
import { Phone, ClipboardList, X } from 'lucide-react';
import { useState } from 'react';
import CTAStrip from '../components/CTAStrip';

const PHONE = '570-730-0447';

const galleryItems = [
  {
    image: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'before',
    category: 'Garage',
    label: 'Garage Full of Clutter',
  },
  {
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'after',
    category: 'Garage',
    label: 'Clean & Organized Garage',
  },
  {
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'before',
    category: 'Living Room',
    label: 'Cluttered Living Space',
  },
  {
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'after',
    category: 'Living Room',
    label: 'Fresh Clean Living Room',
  },
  {
    image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'before',
    category: 'Storage',
    label: 'Packed Storage Unit',
  },
  {
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'after',
    category: 'Storage',
    label: 'Cleared & Ready to Use',
  },
  {
    image: 'https://images.pexels.com/photos/4246101/pexels-photo-4246101.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'after',
    category: 'Hauling',
    label: 'Truck Fully Loaded & Ready to Go',
  },
  {
    image: 'https://images.pexels.com/photos/2058130/pexels-photo-2058130.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'before',
    category: 'Demolition',
    label: 'Demolition Site Ready for Teardown',
  },
  {
    image: 'https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'after',
    category: 'Dumpster',
    label: 'Dumpster Rental in Use',
  },
  {
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'after',
    category: 'Property',
    label: 'Property Cleanout Completed',
  },
  {
    image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'after',
    category: 'Team',
    label: 'Our Professional Crew on the Job',
  },
  {
    image: 'https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'after',
    category: 'Donation',
    label: 'Donation Items Sorted for Charity',
  },
];

const categories = ['All', 'Garage', 'Living Room', 'Storage', 'Demolition', 'Dumpster', 'Property', 'Hauling', 'Team', 'Donation'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<{ image: string; label: string } | null>(null);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-orange-300 font-bold text-sm uppercase tracking-widest">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Photo Gallery</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Real jobs, real results. See the transformations we deliver for homeowners and businesses across the Poconos.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                onClick={() => setLightbox({ image: item.image, label: item.label })}
                className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        item.type === 'before'
                          ? 'bg-red-500/80 text-white'
                          : 'bg-green-500/80 text-white'
                      }`}>
                        {item.type}
                      </span>
                      <p className="text-white text-sm font-semibold mt-1">{item.label}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full backdrop-blur-sm ${
                    item.type === 'before'
                      ? 'bg-red-500/70 text-white'
                      : 'bg-green-500/70 text-white'
                  }`}>
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA below gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Want Results Like These?</h2>
          <p className="text-gray-500 mb-8">
            We deliver the same quality and professionalism on every job — no matter how big or small. Call today for your free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call {PHONE}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-0.5"
            >
              <ClipboardList className="w-5 h-5" />
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTAStrip heading="Transform Your Space Today" subtext="Fast, affordable, and eco-friendly junk removal across Monroe & Northampton County." />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.image}
              alt={lightbox.label}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 font-semibold">{lightbox.label}</p>
          </div>
        </div>
      )}
    </div>
  );
}
