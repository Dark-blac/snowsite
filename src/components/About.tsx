import { Award, Mountain, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/instructor.jpg"
                alt="Instructor"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I am Yehuda, a friendly, skilled, and caring snowboard instructor. I will help you get to the level you seek, From 6 to 60 years old, absolute beginner to pro, join me and discover the joy, freedom, and thrill of floating through fresh powder.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you're strapping in for the first time or looking to perfect your technique, I'll guide you every step of the way with personalized instruction tailored to your goals.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                In the Caucasus Mountain Range, Georgia, we'll explore breathtaking slopes, conquer thrilling runs, and create unforgettable memories together.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-bold text-2xl text-slate-900">2</p>
                  <p className="text-sm text-slate-600">Snowboarding certificates</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-bold text-2xl text-slate-900">100+</p>
                  <p className="text-sm text-slate-600">Students Taught</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mountain className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-bold text-2xl text-slate-900">site:</p>
                  <p className="text-sm text-slate-600">Gudauri, Georgia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
