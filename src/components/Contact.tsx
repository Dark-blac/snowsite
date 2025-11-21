import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState } from 'react';

function MessageForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xpwbjjqv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      {status === 'success' && (
        <div className="mb-4 p-3 rounded bg-green-50 text-green-800">Thanks for your feedback — I will get back to you soon.</div>
      )}
      {status === 'error' && (
        <div className="mb-4 p-3 rounded bg-red-50 text-red-800">Sorry — something went wrong. Please try again later.</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <Send className="w-5 h-5" />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <p className="text-slate-600">ysteinherz@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Whatsapp</p>
                      <p className="text-slate-600">
                        <a
                          href="https://wa.me/+972534531696"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-600"
                        >
                          0534531696
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Location</p>
                      <p className="text-slate-600">Gudauri Resort, Georgia</p>
                      <div>
                      <p className="text-slate-600">
                        <a
                          href="https://www.youtube.com/watch?v=QhA-Gw16wbw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-600"
                        >
                          Live resort camera
                        </a>
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-slate-900 mb-3">Operating Hours</h4>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday</span>
                    <span className="font-semibold">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
