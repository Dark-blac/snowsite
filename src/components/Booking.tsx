import { Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Booking() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="booking" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-in-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 md:mb-4 text-slate-900">
            Book Your Lesson
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-center text-slate-600 mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto">
            Ready to ride? Select your preferred date and time below. All bookings include equipment check and personalized instruction.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-4 md:p-8 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
                <Calendar className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Schedule & Payment</h3>
              </div>
              <iframe
                src="https://app.acuityscheduling.com/schedule.php?owner=37451779&ref=embedded_csp"
                title="Schedule Appointment"
                width="100%"
                height={typeof window !== 'undefined' && window.innerWidth < 768 ? '600' : '800'}
                frameBorder="0"
                allow="payment"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

            <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-slate-600">
              <p>Questions about booking? Contact me directly and I'll help you get scheduled.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}