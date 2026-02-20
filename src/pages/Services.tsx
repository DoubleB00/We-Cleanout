import { Link } from 'react-router-dom';
import {
  Home as HomeIcon, Building2, Truck, Hammer, Gift, Container,
  CheckCircle2, Phone, ClipboardList
} from 'lucide-react';
import CTAStrip from '../components/CTAStrip';

const PHONE = '570-730-0447';

const services = [
  {
    icon: HomeIcon,
    title: 'Residential Cleanouts',
    tagline: 'Declutter your home — fast and stress-free.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Whether you\'re downsizing, moving, or tackling years of clutter, our residential cleanout service removes everything efficiently. We handle furniture, appliances, clothing, boxes, and general household junk.',
    items: ['Full house cleanouts', 'Garage & attic cleanouts', 'Basement junk removal', 'Estate & foreclosure cleanouts', 'Furniture removal', 'Appliance haul-away'],
  },
  {
    icon: Building2,
    title: 'Commercial Cleanouts',
    tagline: 'Keep your business space clean and professional.',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'We help businesses clear out old equipment, furniture, files, and debris quickly — so you can get back to business with minimal downtime.',
    items: ['Office furniture removal', 'Warehouse cleanouts', 'Retail store cleanouts', 'Restaurant equipment haul-away', 'Construction site cleanup', 'Renovation debris removal'],
  },
  {
    icon: Truck,
    title: 'Junk Removal',
    tagline: 'We haul away anything and everything.',
    image: 'https://images.pexels.com/photos/4246101/pexels-photo-4246101.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Have items that just need to go? Our junk removal team loads and hauls away any type of junk — no job is too big or too small. We even sweep up after ourselves.',
    items: ['Furniture & mattresses', 'Electronics & appliances', 'Yard waste & debris', 'Hot tubs & play sets', 'Old tires & batteries', 'General clutter & trash'],
  },
  {
    icon: Hammer,
    title: 'Demolition Services',
    tagline: 'Safe, efficient teardowns for any project.',
    image: 'https://images.pexels.com/photos/2058130/pexels-photo-2058130.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Our experienced team handles light to medium demolition projects safely and efficiently — and we haul away all the debris so you don\'t have to.',
    items: ['Shed & garage demolition', 'Deck & fence teardown', 'Interior wall demo', 'Concrete removal', 'Drywall demolition', 'Debris hauling included'],
  },
  {
    icon: Gift,
    title: 'Donation Pickup',
    tagline: 'Give your unwanted items a second life.',
    image: 'https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'We believe in keeping usable items out of landfills. Our team sorts through your items, picks out what can be donated, and delivers them to local charities on your behalf.',
    items: ['Clothing & shoes', 'Furniture & home goods', 'Books & toys', 'Kitchenware', 'Electronics (working)', 'Sorting & delivery included'],
  },
  {
    icon: Container,
    title: 'Dumpster Rentals',
    tagline: 'The flexible solution for bigger projects.',
    image: 'https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Need a container to fill at your own pace? Our roll-off dumpster rentals are available in multiple sizes for residential renovations, construction projects, and large cleanouts.',
    items: ['Multiple sizes available', 'Flexible rental periods', 'Same-day drop-off available', 'Prompt pickup when full', 'Competitive flat-rate pricing', 'No surprise fees'],
  },
];

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-orange-300 font-bold text-sm uppercase tracking-widest">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Our Services</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            From single-item pickups to full property cleanouts — we offer comprehensive junk removal and cleanup services across Monroe and Northampton County.
          </p>
        </div>
      </div>

      {/* Quick CTA bar */}
      <div className="bg-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-white font-bold">Free estimates on all services. No obligation.</p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-black px-6 py-2 rounded-full text-sm hover:bg-orange-50 transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {services.map(({ icon: Icon, title, tagline, image, desc, items }, idx) => (
            <div
              key={title}
              className={`bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:w-2/5 h-56 lg:h-auto overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 p-2.5 rounded-xl">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900">{title}</h2>
                    <p className="text-orange-500 font-semibold text-sm">{tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">{desc}</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Call for Pricing
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200"
                  >
                    <ClipboardList className="w-4 h-4" />
                    Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Book Your Appointment', desc: 'Call or fill out our online form. We\'ll schedule a time that works for you — often same-day or next-day.' },
              { step: '02', title: 'We Show Up & Price It', desc: 'Our team arrives on time. We assess the job and give you an upfront, no-obligation quote before we start.' },
              { step: '03', title: 'We Haul It Away', desc: 'You approve, we work. We load everything up, sweep up after ourselves, and you enjoy your clean space.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-700 rounded-2xl text-white font-black text-2xl mb-5 shadow-lg">
                  {step}
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Get a Free Estimate on Any Service" subtext="No hidden fees. Transparent pricing. Satisfaction guaranteed." />
    </div>
  );
}
