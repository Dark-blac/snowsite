import { useState, useEffect } from 'react';
import { Mountain } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Lessons from './components/Lessons';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-white">
              <Mountain className="w-8 h-8" />
              <span className="font-bold text-xl">Steinherz Snow</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['about', 'lessons', 'booking', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-blue-400 transition-colors capitalize font-medium"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <Hero onScrollClick={() => scrollToSection('about')} />
      <About />
      <Lessons />
      <Booking />
      <Gallery />
      <Contact />

      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mountain className="w-6 h-6" />
            <span className="font-bold text-lg">Steinherz Snow</span>
          </div>
          <p className="text-slate-400">Master the mountain</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
