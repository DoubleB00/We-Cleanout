import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const PHONE = '570-730-0447';

const serviceOptions = [
  'Residential Cleanout',
  'Commercial Cleanout',
  'Junk Removal',
  'Demolition',
  'Donation Pickup',
  'Dumpster Rental',
  'Property Cleanout',
  'Other / Not Sure',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service_type: string;
  job_description: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service_type: '',
  job_description: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError('Please fill in your name and phone number.');
      return;
    }
    setSubmitting(true);
    setError('');

    const { error: dbError } = await supabase.from('quote_requests').insert([
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        service_type: form.service_type || 'general',
        job_description: form.job_description,
      },
    ]);

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please call us directly at ' + PHONE);
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-orange-300 font-bold text-sm uppercase tracking-widest">Free Estimate</span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">Get in Touch</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Ready to clear the clutter? Call us now or fill out the form below — we'll get back to you fast with a free, no-obligation estimate.
          </p>
        </div>
      </div>

      {/* Urgent CTA bar */}
      <div className="bg-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-white font-bold text-sm">Need junk removed TODAY? Same-day service available!</p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-black px-6 py-2 rounded-full text-sm hover:bg-orange-50 transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            Call Now: {PHONE}
          </a>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We're available Monday through Saturday. The fastest way to reach us is by phone — we love talking to our customers!
                </p>
              </div>

              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-orange-500/30 group"
              >
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-orange-100 text-xs font-medium uppercase tracking-wide">Tap to Call</p>
                  <p className="font-black text-xl">{PHONE}</p>
                </div>
              </a>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="bg-green-100 p-2.5 rounded-xl shrink-0">
                    <Mail className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Email</p>
                    <a href="mailto:info@wecleanoutjunk.com" className="text-gray-900 font-semibold text-sm hover:text-green-700 transition-colors">
                      info@wecleanoutjunk.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="bg-green-100 p-2.5 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Service Area</p>
                    <p className="text-gray-900 font-semibold text-sm">Monroe & Northampton County, PA</p>
                    <p className="text-gray-400 text-xs mt-0.5">Stroudsburg, Bethlehem, Easton & surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="bg-green-100 p-2.5 rounded-xl shrink-0">
                    <Clock className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Hours of Operation</p>
                    <p className="text-gray-900 font-semibold text-sm">Monday – Saturday: 7:00 AM – 7:00 PM</p>
                    <p className="text-gray-400 text-xs mt-0.5">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Service area map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gradient-to-br from-green-50 to-green-100 h-52 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="bg-green-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Monroe & Northampton County</h3>
                    <p className="text-gray-500 text-xs mb-3">Pennsylvania's Poconos Region</p>
                    <a
                      href="https://maps.google.com/?q=Monroe+County+Pennsylvania"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-green-700 text-white font-semibold text-xs px-4 py-2 rounded-full hover:bg-green-800 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center">Not sure if we serve your area? Just call us!</p>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-10 h-10 text-green-700" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Request Received!</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                      Thank you! We'll review your request and contact you shortly with a free estimate. For urgent needs, call us directly.
                    </p>
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-3.5 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      Call {PHONE}
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="mb-7">
                      <h2 className="text-2xl font-black text-gray-900">Request a Free Estimate</h2>
                      <p className="text-gray-500 text-sm mt-1">Fill out the form and we'll respond quickly with a fair, upfront quote.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(570) 000-0000"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Service Needed
                        </label>
                        <select
                          name="service_type"
                          value={form.service_type}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-700 bg-white"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Describe Your Job
                        </label>
                        <textarea
                          name="job_description"
                          value={form.job_description}
                          onChange={handleChange}
                          placeholder="Tell us what needs to be removed, the approximate amount, location in your home or property, and any other details that would help us give you an accurate estimate..."
                          rows={5}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                        />
                      </div>

                      {error && (
                        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-black py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Free Estimate Request
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        Or call us directly at{' '}
                        <a href={`tel:${PHONE}`} className="text-orange-500 font-bold hover:underline">
                          {PHONE}
                        </a>{' '}
                        for an immediate response.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
