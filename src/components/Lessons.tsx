import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

const lessons = [
  {
    title: 'Beginner',
    duration: 'Suggested 6+ hours',
    description: 'Perfect for first-timers ready to hit the slopes',
    features: [
      'Equipment overview',
      'How to be safe on the mountain',
      'How to fall safely',
      'Basic stance and balance',
      'Stopping techniques',
      'Turning fundamentals',
      'Ski site etiquette',
      'Video analysis',
    ],
  },
  {
    title: 'Intermediate',
    duration: 'Suggested 4+ hours',
    description: 'Take your riding to the next level',
    features: [
      'Where to look',
      'Edge control',
      'Confidence while riding',
      'Advanced turning techniques',
      'Speed control',
      'Terrain navigation',
      'Jump basics',
      'Style refinement',
    ],
    featured: true,
  },
  {
    title: 'Advanced',
    duration: 'Suggested 2 - 4 hours',
    description: 'Master advanced techniques and freestyle',
    features: [
      'Pump technique',
      'Catwalks and narrow trails',
      'Carving techniques',
      'Park features',
      'Advanced tricks',
      'Powder riding stance',
      'Off-piste safety',
      'Video analysis',
    ],
  },
];

export default function Lessons() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="lessons" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(2,6,23,0.45), rgba(2,6,23,0.45)), url(/images/${
              isMobile ? 'lift_view2.jpg' : 'bg_fog.jpg'
            })`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Lessons
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="relative">

            <div className="grid relative z-20 md:grid-cols-3 gap-8">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.title}
                  className={`relative bg-transparent rounded-xl shadow-xl ring-1 ring-white/10 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {lesson.featured && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">{lesson.title}</h3>
                    <p className="text-sm opacity-90 text-white drop-shadow-md mb-6">{lesson.duration}</p>
                    <p className="text-white mb-6">{lesson.description}</p>
                    <ul className="space-y-3">
                      {lesson.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
