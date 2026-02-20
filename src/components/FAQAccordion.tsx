import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PHONE = '570-730-0447';

export const faqItems = [
  {
    q: 'How much does junk removal cost in the Poconos?',
    a: 'Pricing depends on the volume and type of junk, as well as accessibility. We offer free, no-obligation on-site estimates so you know exactly what you\'ll pay before we start. Most jobs range from $75 to $600+. We believe in transparent, upfront pricing — no surprise fees.',
  },
  {
    q: 'Do you offer same-day junk removal service?',
    a: 'Yes! We offer same-day and next-day service in most cases, depending on our schedule and your location in Monroe or Northampton County. Call us early in the morning for the best chance of same-day availability.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Monroe County and Northampton County, Pennsylvania — including Stroudsburg, East Stroudsburg, Bethlehem, Easton, Nazareth, Pocono Township, Mount Pocono, Pen Argyl, Wind Gap, and surrounding communities. Not sure if we cover your area? Just call us!',
  },
  {
    q: 'What happens to my junk after you pick it up?',
    a: 'We\'re committed to responsible disposal. We sort everything and donate usable items to local charities, recycle what we can, and only landfill what truly cannot be reused. We aim to keep as much as possible out of the trash.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Absolutely. We Cleanout Junk LLC is fully licensed and insured. You can hire us with complete confidence knowing your property is protected throughout the entire job.',
  },
  {
    q: 'Do I need to be home during the cleanout?',
    a: 'You don\'t necessarily need to be home — many customers leave instructions and we handle everything. However, we do require a walkthrough or clear communication before we start so we know exactly what goes and what stays.',
  },
  {
    q: 'What types of items do you NOT take?',
    a: 'We take almost everything, but there are a few exceptions: hazardous materials (paint, chemicals, propane tanks), asbestos, and certain biomedical waste. If you\'re unsure about a specific item, give us a call and we\'ll let you know.',
  },
  {
    q: 'How do I get a free estimate?',
    a: 'Easy! Call us at 570-730-0447 for an immediate phone estimate, or fill out our online form and we\'ll respond quickly. We can often provide a quote over the phone or via text photo for smaller jobs.',
  },
];

interface FAQAccordionProps {
  items?: typeof faqItems;
  showCTA?: boolean;
}

export default function FAQAccordion({ items = faqItems, showCTA = true }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500">Everything you need to know about our junk removal services.</p>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === idx ? 'border-green-200 shadow-md' : 'border-gray-100 shadow-sm hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === idx}
              >
                <span className={`font-bold text-sm md:text-base pr-4 ${open === idx ? 'text-green-800' : 'text-gray-900'}`}>
                  {item.q}
                </span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                  open === idx ? 'bg-green-700 rotate-180' : 'bg-gray-100'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-colors ${open === idx ? 'text-white' : 'text-gray-500'}`} />
                </div>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {showCTA && (
          <div className="text-center mt-10 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <p className="text-gray-900 font-bold text-lg mb-1">Still have questions?</p>
            <p className="text-gray-500 text-sm mb-5">Our team is ready to help — just give us a call or send us a message.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call {PHONE}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-bold px-7 py-3 rounded-full text-sm transition-all duration-200"
              >
                Send a Message
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
