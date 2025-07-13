import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { accessCV } from './cvUtils';
import profileImage from '../assets/Image/IMG_1865.jpg';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingIcon = ({ children, className, delay = 0 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) => (
    <div
      className={`floating-element ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden pt-20">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient meshes */}
        <div 
          className="absolute w-96 h-96 gradient-mesh animate-morph opacity-30"
          style={{
            top: `${20 + mousePosition.y * 0.1}%`,
            left: `${10 + mousePosition.x * 0.1}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 gradient-mesh animate-morph opacity-20"
          style={{
            bottom: `${15 + mousePosition.y * 0.05}%`,
            right: `${20 + mousePosition.x * 0.05}%`,
            animationDelay: '4s'
          }}
        ></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-100 animate-float-reverse opacity-30" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-pink-100 animate-float-slow opacity-35" style={{ borderRadius: '50% 20% 80% 40%' }}></div>
      </div>

      {/* Floating Design Elements */}
      <FloatingIcon className="top-24 left-16 animate-float" delay={0}>
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center glass-effect">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        </div>
      </FloatingIcon>

      <FloatingIcon className="top-32 right-20 animate-float-reverse" delay={1}>
        <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-lg flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </div>
      </FloatingIcon>

      <FloatingIcon className="bottom-40 left-24 animate-float-slow" delay={2}>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      </FloatingIcon>

      <FloatingIcon className="bottom-24 right-32 animate-float" delay={1.5}>
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg shadow-lg flex items-center justify-center animate-spin-slow">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </FloatingIcon>

      {/* Floating UI Cards */}
      <FloatingIcon className="top-1/3 left-12 animate-float-reverse" delay={0.5}>
        <div className="bg-white rounded-lg shadow-xl p-3 glass-effect">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="mt-2 space-y-1">
            <div className="w-16 h-2 bg-gray-200 rounded"></div>
            <div className="w-12 h-2 bg-blue-200 rounded"></div>
          </div>
        </div>
      </FloatingIcon>

      <FloatingIcon className="top-1/2 right-16 animate-float" delay={2.5}>
        <div className="bg-white rounded-xl shadow-xl p-4 glass-effect">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                <path fill="#1ABCFE" d="M8.55 8c0-1.289 1.019-2.333 2.275-2.333C12.082 5.667 13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8z"/>
                <path fill="#0ACF83" d="M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667z"/>
                <path fill="#FF7262" d="M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1H8.55z"/>
                <path fill="#F24E1E" d="M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333z"/>
                <path fill="#A259FF" d="M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8z"/>
              </svg>
            </div>
            <div className="text-xs text-gray-600">Figma</div>
          </div>
        </div>
      </FloatingIcon>

      {/* Main Content Container */}
      <div className="relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Creative Text Layout */}
            <div className={`space-y-6 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`}>
              {/* Layered heading */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl lg:text-7xl font-black text-gray-100 select-none">
                  DESIGN
                </div>
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wide text-small">UI/UX Designer</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                    <span className="block">Hi, I'm</span>
                    <span className="block hero-name font-black">
                      Anuththara Divarathna
                    </span>
                  </h1>
                  
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-4">
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-small font-medium">UI Designer</span>
                    <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-small font-medium">UX Researcher</span>
                    <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-small font-medium">Problem Solver</span>
                  </div>
                </div>
              </div>
              
              <p className="text-large text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Crafting digital experiences that bridge the gap between user needs and business goals 
                through innovative design solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <button className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Explore My Work
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button 
                className="btn-secondary group"
                onClick={accessCV}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Creative Photo Layout */}
          <div className={`flex justify-center lg:justify-end ${mounted ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main photo with creative frame */}
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl transform rotate-6 animate-float-slow opacity-60"></div>
                <div className="absolute -inset-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl transform -rotate-3 shadow-2xl"></div>
                
                {/* Photo container */}
                <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Anuththara Divarathna - UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-blue/10"></div>
                </div>

                {/* Floating skill badges */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-3 shadow-xl animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </div>
                    <span className="text-small font-medium">Portfolio</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl animate-float-reverse text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">8+</div>
                    <div className="text-xs opacity-90">Projects</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-white rounded-xl p-3 shadow-lg animate-float-slow">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-xs text-gray-600">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-4 left-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="absolute -bottom-4 left-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center m-[0px] mt-[100px] mr-[0px] mb-[0px] ml-[0px]">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Scroll to explore</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}