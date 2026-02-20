import { ShieldCheck, Award, Clock, Leaf, DollarSign, ThumbsUp } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'Licensed & Insured', sub: 'Fully covered for your peace of mind' },
  { icon: DollarSign, label: 'Free Estimates', sub: 'No hidden fees, ever' },
  { icon: Clock, label: 'Same-Day Service', sub: 'Fast response when you need it' },
  { icon: Leaf, label: 'Eco-Friendly', sub: 'We donate & recycle what we can' },
  { icon: Award, label: '5-Star Rated', sub: 'Trusted by hundreds of locals' },
  { icon: ThumbsUp, label: 'Satisfaction Guaranteed', sub: 'We don\'t leave until you\'re happy' },
];

export default function TrustBadges() {
  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Why Thousands Trust Us</span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">The We Cleanout Junk Difference</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="bg-green-100 group-hover:bg-green-700 p-3 rounded-xl mb-3 transition-colors">
                <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
              </div>
              <p className="font-bold text-gray-900 text-xs leading-tight mb-1">{label}</p>
              <p className="text-gray-500 text-xs leading-tight">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
