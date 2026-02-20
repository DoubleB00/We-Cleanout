import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import CTAStrip from '../components/CTAStrip';

const posts = [
  {
    title: 'How Much Does Junk Removal Cost in the Poconos? (2024 Guide)',
    excerpt: 'Thinking about hiring a junk removal company in Monroe or Northampton County? Here\'s a complete breakdown of what to expect to pay, what affects pricing, and how to get the best value.',
    category: 'Pricing',
    date: 'January 15, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/4246101/pexels-photo-4246101.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'junk-removal-cost-poconos',
    tags: ['Junk Removal', 'Pricing', 'Poconos'],
  },
  {
    title: '7 Signs It\'s Time for a Professional Garage Cleanout',
    excerpt: 'Is your garage more storage unit than parking space? We\'ve helped hundreds of Poconos homeowners reclaim their garages. Here are the signs you\'re overdue for a cleanout.',
    category: 'Tips',
    date: 'December 8, 2023',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'signs-need-garage-cleanout',
    tags: ['Garage', 'Cleanout', 'Tips'],
  },
  {
    title: 'Estate Cleanouts in PA: What to Expect & How to Prepare',
    excerpt: 'Dealing with a loved one\'s belongings is never easy. This guide walks you through the estate cleanout process and how we make it as smooth and respectful as possible.',
    category: 'Guides',
    date: 'November 20, 2023',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'estate-cleanouts-pennsylvania',
    tags: ['Estate', 'Cleanout', 'PA'],
  },
  {
    title: 'Dumpster Rental vs. Junk Removal: Which Is Right for Your Project?',
    excerpt: 'Not sure whether to rent a dumpster or hire a junk removal team? We break down the pros and cons of each option to help you make the right choice for your specific project.',
    category: 'Guides',
    date: 'October 14, 2023',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3952029/pexels-photo-3952029.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'dumpster-rental-vs-junk-removal',
    tags: ['Dumpster Rental', 'Junk Removal', 'Comparison'],
  },
  {
    title: 'Eco-Friendly Junk Removal: How We Recycle & Donate in the Poconos',
    excerpt: 'At We Cleanout Junk LLC, we\'re committed to keeping as much as possible out of the landfill. Here\'s exactly how we handle your junk in an environmentally responsible way.',
    category: 'Eco',
    date: 'September 5, 2023',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'eco-friendly-junk-removal-poconos',
    tags: ['Eco-Friendly', 'Recycling', 'Donation'],
  },
  {
    title: 'Top 5 Things Poconos Homeowners Want Gone (But Don\'t Know How to Remove)',
    excerpt: 'From old hot tubs to mystery appliances in the basement — here are the most common oversized junk items we encounter and exactly how we remove them safely.',
    category: 'Tips',
    date: 'August 22, 2023',
    readTime: '3 min read',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'common-junk-removal-items-poconos',
    tags: ['Tips', 'Appliances', 'Furniture'],
  },
];

const categoryColors: Record<string, string> = {
  Pricing: 'bg-blue-100 text-blue-700',
  Tips: 'bg-orange-100 text-orange-700',
  Guides: 'bg-green-100 text-green-700',
  Eco: 'bg-emerald-100 text-emerald-700',
};

export default function Blog() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-orange-300 font-bold text-sm uppercase tracking-widest">Resources & Tips</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Junk Removal Blog</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Expert tips, local guides, and helpful resources from the Poconos' most trusted junk removal team.
          </p>
        </div>
      </div>

      {/* Blog grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Featured post */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col lg:flex-row">
              <div className="lg:w-1/2 overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[posts[0].category] || 'bg-gray-100 text-gray-600'}`}>
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">Featured</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight group-hover:text-green-800 transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {posts[0].readTime}</span>
                </div>
                <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-md self-start">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-black text-gray-900 text-base leading-snug mb-2 group-hover:text-green-800 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-3 border-t border-gray-50">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-0.5 text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                        <Tag className="w-2.5 h-2.5" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="text-center mt-12 bg-white rounded-2xl p-8 border border-dashed border-gray-300">
            <p className="text-gray-500 font-semibold mb-1">More articles coming soon!</p>
            <p className="text-gray-400 text-sm">We publish helpful guides and tips for Poconos homeowners and businesses regularly.</p>
          </div>
        </div>
      </section>

      {/* Service area keywords for SEO */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-black text-gray-900">Junk Removal Resources by Location</h2>
            <p className="text-gray-500 text-sm mt-2">Helpful guides for homeowners across Monroe & Northampton County</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Junk Removal Stroudsburg PA',
              'Junk Removal East Stroudsburg PA',
              'Junk Removal Monroe County PA',
              'Junk Removal Northampton County PA',
              'Property Cleanouts Poconos',
              'Dumpster Rental Poconos PA',
              'Demolition Services Pennsylvania',
              'Estate Cleanouts Monroe County',
              'Garage Cleanout Bethlehem PA',
              'Junk Removal Easton PA',
            ].map((kw) => (
              <Link
                key={kw}
                to="/contact"
                className="bg-gray-50 hover:bg-green-50 text-gray-600 hover:text-green-700 text-xs font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-green-200 transition-all"
              >
                {kw}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Need Junk Removed in the Poconos?" subtext="Don't wait — call today for same-day service and a free estimate." />
    </div>
  );
}
