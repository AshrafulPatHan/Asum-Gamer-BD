import { useEffect, useRef, useState } from 'react';

const BanerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const slides = [
    {
      title: "Minecraft",
      desc: "Creativity has no limit you can make anything you want",
      img: "https://i.ibb.co/L0Zqk7c/2x1-NSwitch-Minecraft-image1600w.jpg",
    },
    {
      title: "Microsoft Flight Simulator",
      desc: "Fly anywhere you want! Sky is free and fly like a bird",
      img: "https://i.ibb.co/6NZyr8T/capsule-616x353.jpg",
    },
    {
      title: "Asphalt 8",
      desc: "Win the race and earn coin in virtually for nothing",
      img: "https://i.ibb.co/4p1NnBY/gsmarena-001.jpg",
    },
  ];

  // Auto-play functionality
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 100); // Half of transition duration
    }, 10000); // 3 seconds
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Initialize auto-play
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    
    stopAutoPlay();
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
        setTimeout(() => startAutoPlay(), 1000);
      }, 50);
    }, 400);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden mb-15"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full min-h-screen transition-opacity duration-800 ease-in-out ${
            index === currentSlide && !isTransitioning
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
          style={{
            transitionDuration: '800ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slide.img})`,
              filter: 'brightness(0.7)',
              transform: 'scale(1.05)',
              transition: 'transform 800ms ease-out'
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-4">
            <div 
              className={`max-w-2xl text-white transform transition-all duration-1000 ${
                index === currentSlide && !isTransitioning
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                {slide.desc}
              </p>
              
              {/* Call to action button */}
              <button className="mt-8 px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 scale-100 hover:bg-white/70'
              }`}
              style={{
                transition: 'all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: isTransitioning ? 'none' : 'width 100ms linear'
          }}
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 mx-auto group-hover:transform group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 mx-auto group-hover:transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default BanerSlider;
