import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onScrollClick: () => void;
}

export default function Hero({ onScrollClick }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/bg_wide.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
      </div>

      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Master the Mountain
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-200">
          Professional snowboard instruction for all skill levels
        </p>
        <button
          onClick={onScrollClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Start Your Journey
        </button>
      </div>

      <button
        onClick={onScrollClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>
  );
}
