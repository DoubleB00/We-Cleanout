import { Link } from 'react-router-dom';
import {
  Heart, Users, Leaf, ShieldCheck, Star, CheckCircle2,
  Phone, Award, Handshake, Clock
} from 'lucide-react';
import CTAStrip from '../components/CTAStrip';

const PHONE = '570-730-0447';

const values = [
  { icon: Handshake, title: 'Honesty & Transparency', desc: 'No surprise fees. No upselling. You get an upfront quote and that\'s what you pay — period.' },
  { icon: Heart, title: 'Community First', desc: 'We live and work in the Poconos. We care about this community and give back by donating usable items locally.' },
  { icon: Leaf, title: 'Eco-Responsible', desc: 'We recycle and donate as much as possible, keeping junk out of landfills and helping the environment.' },
  { icon: Award, title: 'Professional Excellence', desc: 'Fully licensed, insured, and trained. Every job is treated with the same care and professionalism as the last.' },
];

const reasons = [
  'Locally owned and operated in Monroe County',
  'Fully licensed and insured for your protection',
  'Same-day and next-day service available',
  'Free, no-obligation estimates with upfront pricing',
  'We recycle and donate — eco-friendly disposal',
  'Friendly, respectful crew that treats your property with care',
  'No job too big or too small',
  'Hundreds of satisfied customers across the Poconos',
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-orange-300 font-bold text-sm uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">About We Cleanout Junk LLC</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            A local family business built on hard work, honesty, and a commitment to serving the Poconos community.
          </p>
        </div>
      </div>

      {/* Story section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6">A Poconos Business Built on Trust</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We Cleanout Junk LLC was founded right here in Monroe County with a simple mission: to give Poconos homeowners and businesses a reliable, honest, and affordable option for junk removal and cleanout services.
                </p>
                <p>
                  What started as a small local operation quickly grew through word-of-mouth and five-star reviews from our satisfied customers. We take enormous pride in every job we do — treating each customer's home or business as if it were our own.
                </p>
                <p>
                  We know how overwhelming junk and clutter can feel. That's why we work quickly, communicate clearly, and always leave a space cleaner than we found it. From estate cleanouts to dumpster rentals, we're the team the Poconos trusts.
                </p>
                <p>
                  As members of this community, we're committed to giving back — by donating usable items to local charities and recycling whenever possible. When you hire us, you're not just getting a cleaner space — you're supporting a local business that cares about where we live and work.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Today
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200"
                >
                  Free Estimate
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our professional team"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-5 shadow-xl">
                <div className="text-3xl font-black">500+</div>
                <div className="text-sm font-semibold text-orange-100">Jobs Completed</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-green-700 text-white rounded-2xl p-5 shadow-xl">
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-300 text-orange-300" />
                  ))}
                </div>
                <div className="text-sm font-semibold">5-Star Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-green-50 border-y border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-green-700 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            "To provide the Poconos region with fast, honest, and eco-friendly junk removal services that give our customers peace of mind — while helping our community and environment at the same time."
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-gray-50 hover:bg-green-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100 hover:border-green-700">
                <div className="bg-white group-hover:bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors shadow-sm">
                  <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-black text-gray-900 group-hover:text-white text-base mb-2 transition-colors">{title}</h3>
                <p className="text-gray-500 group-hover:text-green-200 text-sm leading-relaxed transition-colors">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional junk removal team at work"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
            </div>
            <div>
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">The Difference</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-6">Why Choose We Cleanout Junk?</h2>
              <div className="space-y-3">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                    <div className="bg-green-100 p-1 rounded-lg shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area / Team stats */}
      <section className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: '500+', label: 'Happy Customers' },
              { icon: ShieldCheck, number: '100%', label: 'Licensed & Insured' },
              { icon: Clock, number: '7 Days', label: 'Available Weekly' },
              { icon: Leaf, number: '95%', label: 'Recycled or Donated' },
            ].map(({ icon: Icon, number, label }) => (
              <div key={label} className="text-white">
                <Icon className="w-8 h-8 mx-auto mb-3 text-orange-300" />
                <div className="text-3xl font-black">{number}</div>
                <div className="text-green-200 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to Work With a Team You Can Trust?" subtext="Call today or submit a free estimate request — we're ready to help." />
    </div>
  );
}
