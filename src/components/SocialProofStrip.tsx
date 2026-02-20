import { Star, ShieldCheck, Leaf, Award, Clock, ThumbsUp, Users, DollarSign } from 'lucide-react';

const items = [
  { icon: Star, text: '5-Star Google Reviews' },
  { icon: ShieldCheck, text: 'Licensed & Insured' },
  { icon: Clock, text: 'Same-Day Service Available' },
  { icon: DollarSign, text: 'Free Estimates — No Obligation' },
  { icon: Leaf, text: 'Eco-Friendly Disposal' },
  { icon: Award, text: 'Trusted by 500+ Locals' },
  { icon: ThumbsUp, text: '100% Satisfaction Guaranteed' },
  { icon: Users, text: 'Family-Owned & Operated' },
];

const doubled = [...items, ...items];

export default function SocialProofStrip() {
  return (
    <div className="bg-green-800 py-4 overflow-hidden border-y border-green-700">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {doubled.map(({ icon: Icon, text }, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 mx-8 shrink-0"
          >
            <div className="bg-orange-500/20 p-1.5 rounded-lg">
              <Icon className="w-4 h-4 text-orange-300" />
            </div>
            <span className="text-white font-semibold text-sm">{text}</span>
            <span className="text-green-600 ml-6 text-xl font-light">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
