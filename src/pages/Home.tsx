import { Link } from 'react-router-dom';
import {
  Phone, ClipboardList, ChevronRight, Star, MapPin,
  Truck, Home as HomeIcon, Building2, Hammer, Gift, Container,
  CheckCircle2, ArrowRight, Zap
} from 'lucide-react';
import TrustBadges from '../components/TrustBadges';
import CTAStrip from '../components/CTAStrip';
import SocialProofStrip from '../components/SocialProofStrip';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FAQAccordion from '../components/FAQAccordion';

const PHONE = '570-730-0447';

const services = [
  { icon: HomeIcon, title: 'Residential Cleanouts', desc: 'Homes, garages, attics, and basements cleared quickly and professionally.' },
  { icon: Building2, title: 'Commercial Cleanouts', desc: 'Offices, warehouses, and storefronts cleaned out with minimal disruption.' },
  { icon: Truck, title: 'Junk Removal', desc: 'Furniture, appliances, electronics — we haul it all away fast.' },
  { icon: Hammer, title: 'Demolition', desc: 'Sheds, decks, fences, and interior teardowns done safely and efficiently.' },
  { icon: Gift, title: 'Donation Pickup', desc: 'We sort, load, and deliver usable items to local charities on your behalf.' },
  { icon: Container, title: 'Dumpster Rentals', desc: 'Flexible roll-off dumpster rentals for projects big and small.' },
];

const reviews = [
  { name: 'Sarah M.', rating: 5, text: 'Amazing service! They cleared out my entire garage in under 2 hours. Very professional, friendly, and priced fairly. Will definitely use again!', location: 'Stroudsburg, PA' },
  { name: 'Tom R.', rating: 5, text: 'Quick response, showed up on time, and handled everything with care. Made what felt like an overwhelming job totally stress-free.', location: 'East Stroudsburg, PA' },
  { name: 'Linda K.', rating: 5, text: 'Cleaned out my late mother\'s home. They were respectful and treated everything with dignity. Could not have asked for better service.', location: 'Bethlehem, PA' },
  { name: 'Mike D.', rating: 5, text: 'Used them for a commercial office cleanout. Efficient, thorough, and left the place spotless. Highly recommend for businesses.', location: 'Easton, PA' },
];

const beforeAfterPairs = [
  {
    before: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Garage Cleanout — Stroudsburg, PA',
  },
  {
    before: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Living Room Cleanout — East Stroudsburg, PA',
  },
  {
    before: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Full Property Cleanout — Bethlehem, PA',
  },
];

const serviceAreaGroups = [
  {
    county: 'Monroe County',
    cities: ['Stroudsburg', 'East Stroudsburg', 'Pocono Township', 'Mount Pocono', 'Tobyhanna', 'Tannersville', 'Bartonsville', 'Delaware Water Gap', 'Brodheadsville', 'Long Pond'],
  },
  {
    county: 'Northampton County',
    cities: ['Bethlehem', 'Easton', 'Nazareth', 'Wind Gap', 'Pen Argyl', 'Bangor', 'Bath', 'Portland', 'Walnutport', 'Tatamy'],
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4246101/pexels-photo-4246101.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Junk removal truck"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/75 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <MapPin className="w-3 h-3" />
              Monroe & Northampton County, PA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.6)' }}>
              Fast, Affordable<br />
              <span className="text-orange-400">Junk Removal</span><br />
              You Can Trust
            </h1>
            <p className="text-lg text-gray-200 mb-3 leading-relaxed">
              Monroe & Northampton County's go-to junk removal team — licensed, insured, and ready to haul away anything you need gone.
            </p>
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-xl px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-200 text-sm font-semibold">Same-day service available — call now!</span>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-green-300 font-medium mb-10">
              {['Same-Day Available', 'Free Estimates', 'No Hidden Fees', 'Eco-Friendly'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black px-8 py-4 rounded-full text-base shadow-2xl hover:shadow-orange-500/40 transition-all duration-200 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Call Now: {PHONE}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:-translate-y-1"
              >
                <ClipboardList className="w-5 h-5" />
                Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2 animate-bounce">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <SocialProofStrip />

      {/* Stats strip */}
      <div className="bg-green-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'Jobs Completed' },
              { number: '2', label: 'Counties Served' },
              { number: '5★', label: 'Average Rating' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map(({ number, label }) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-black text-white">{number}</div>
                <div className="text-green-200 text-sm font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">Full-Service Junk Removal</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From a single item to an entire property — we handle it all so you don't have to.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-green-50 group-hover:bg-green-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-green-700 font-bold text-sm hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              View All Services <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Before/After Sliders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Real Results</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">Before & After</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Drag the slider to see the transformation we deliver — every time, on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterPairs.map(({ before, after, label }) => (
              <BeforeAfterSlider
                key={label}
                beforeSrc={before}
                afterSrc={after}
                label={label}
                height="h-72"
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-200"
            >
              View Full Gallery <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip heading="Don't Let Junk Take Over Your Space" subtext="Call today for a free estimate — we'll handle the heavy lifting." />

      {/* Reviews / Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Customer Reviews</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-2">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
              <span className="ml-2 font-bold text-gray-700">5.0 on Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map(({ name, rating, text, location }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-200 hover:-translate-y-1 flex flex-col">
                <div className="flex mb-3">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">"{text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" /> {location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-lg mx-auto">
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
            </div>
            <p className="text-gray-700 font-bold mb-1">Hundreds of happy customers across the Poconos</p>
            <p className="text-gray-400 text-sm">
              <a href="#" className="text-green-700 font-semibold hover:underline">Read all reviews on Google</a>
              {' '}·{' '}
              <a href="#" className="text-green-700 font-semibold hover:underline">Leave a Review</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip dark heading="Ready to Reclaim Your Space?" subtext="Same-day service available. Free estimates. No surprise fees." />

      {/* Service Area Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Where We Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">Serving Monroe & Northampton County</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Proudly serving homeowners and businesses throughout the Poconos region and surrounding Pennsylvania communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            {serviceAreaGroups.map(({ county, cities }) => (
              <div key={county} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-green-700 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-black text-gray-900">{county}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {cities.map((city) => (
                    <div key={city} className="flex items-center gap-1.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Not seeing your city? We may still serve your area!</p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-orange-500/30"
            >
              <Phone className="w-4 h-4" />
              Call to Check Your Area
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion />

      {/* Blog preview */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Resources</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">Helpful Articles</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-green-700 font-bold text-sm hover:gap-2.5 transition-all">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'How Much Does Junk Removal Cost in the Poconos? (2024 Guide)', cat: 'Pricing', img: 'https://images.pexels.com/photos/4246101/pexels-photo-4246101.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { title: '7 Signs It\'s Time for a Professional Garage Cleanout', cat: 'Tips', img: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { title: 'Dumpster Rental vs. Junk Removal: Which Is Right for You?', cat: 'Guides', img: 'https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg?auto=compress&cs=tinysrgb&w=500' },
            ].map(({ title, cat, img }) => (
              <Link key={title} to="/blog" className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="overflow-hidden h-44">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full self-start mb-2">{cat}</span>
                  <h3 className="font-black text-gray-900 text-sm leading-snug group-hover:text-green-800 transition-colors">{title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTAStrip
        heading="Get Your Free Junk Removal Estimate Today"
        subtext="No obligation. No pressure. Fast, friendly service from a team you can trust."
      />
    </div>
  );
}
