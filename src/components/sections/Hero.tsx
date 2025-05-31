import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on mount
    setIsVisible(true);

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    window.open('/anshika-resume.pdf', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Anshika Gupta | UX/UI Designer Portfolio</title>
        <meta name="description" content="Professional UX/UI Designer creating user-centered digital experiences that are intuitive, accessible, and visually stunning." />
        <meta name="keywords" content="UX designer, UI designer, Anshika Gupta, user experience design, portfolio" />
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Anshika Gupta | UX/UI Designer" />
        <meta property="og:description" content="I create user-centered digital experiences that are intuitive, accessible, and visually stunning." />
        <meta property="og:image" content="/anshika.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anshika Gupta | UX/UI Designer" />
        <meta name="twitter:description" content="I create user-centered digital experiences that are intuitive, accessible, and visually stunning." />
        <meta name="twitter:image" content="/anshika.webp" />
      </Helmet>

      <section 
        id="home" 
        className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
        aria-label="Introduction"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(139, 92, 246, 0.15) 0%, 
              rgba(59, 130, 246, 0.1) 25%, 
              rgba(16, 185, 129, 0.05) 50%, 
              transparent 70%
            ),
            linear-gradient(135deg, 
              #0f0f23 0%, 
              #1a1a2e 25%, 
              #16213e 50%, 
              #0f0f23 100%
            )
          `
        }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dynamic gradient orbs */}
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-transparent rounded-full filter blur-3xl"
            style={{
              top: '10%',
              right: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute w-80 h-80 bg-gradient-to-l from-teal-500/15 via-blue-500/15 to-transparent rounded-full filter blur-3xl"
            style={{
              bottom: '15%',
              left: '5%',
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          />
          <div 
            className="absolute w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-full filter blur-2xl"
            style={{
              top: '60%',
              right: '40%',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />

          {/* Animated grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          />

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30"
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i * 5)}%`,
                animation: `particle-float ${3 + (i * 0.5)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        <div className="container-section relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Content Section */}
            <div className={`
              w-full lg:w-1/2 space-y-8 text-center lg:text-left
              transition-all duration-1000 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
              
              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300 font-medium">Available for new projects</span>
              </div>

              {/* Main Heading with enhanced typography */}
              <h1 className="space-y-2">
                <div className="text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
                  Hello, I'm
                </div>
                <div className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Anshika
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                    Gupta
                  </span>
                </div>
              </h1>

              {/* Role with animated underline */}
              <div className="relative">
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                  UX/UI Designer & Creative Strategist
                </h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse mx-auto lg:mx-0" />
              </div>

              {/* Description with better spacing */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                I craft <span className="text-purple-400 font-medium">user-centered digital experiences</span> that seamlessly blend 
                <span className="text-blue-400 font-medium"> intuitive functionality</span> with 
                <span className="text-teal-400 font-medium"> stunning visual design</span>, 
                creating products that users love and businesses trust.
              </p>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="primary"
                  onClick={downloadCV}
                  aria-label="Download CV"
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={scrollToContact}
                  aria-label="Navigate to contact section"
                  className="group px-8 py-4 border-2 border-purple-500/30 hover:border-purple-400 bg-transparent hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2 font-semibold text-gray-300 group-hover:text-white">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Let's Talk
                  </span>
                </Button>
              </div>

              {/* Social proof or stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Image Section with premium styling */}
            <div className={`
              w-full lg:w-1/2 flex justify-center
              transition-all duration-1000 ease-out delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
              <div className="relative group">
                {/* Enhanced floating blobs */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-full opacity-20 filter blur-2xl animate-pulse group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute -inset-8 bg-gradient-to-l from-teal-500 via-blue-500 to-purple-500 rounded-full opacity-10 filter blur-3xl animate-pulse animation-delay-1000 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Premium image container */}
                <div className="relative z-10 p-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-2xl group-hover:scale-105 transition-transform duration-500">
                  <div className="bg-gray-900 rounded-2xl p-2">
                    <img
                      src="/anshika.webp"
                      alt="Anshika Gupta, UX/UI Designer"
                      className="rounded-xl w-full max-w-md mx-auto filter grayscale-0 group-hover:grayscale-0 transition-all duration-500 shadow-2xl"
                      width="500"
                      height="500"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Floating design elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:-rotate-12 transition-transform duration-500">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }
            
            @keyframes gridMove {
              0% { transform: translate(0, 0); }
              100% { transform: translate(50px, 50px); }
            }
            
            @keyframes particle-float {
              0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
              50% { transform: translateY(-10px) scale(1.1); opacity: 0.7; }
            }
            
            @keyframes gradient-x {
              0%, 100% { background-size: 200% 200%; background-position: left center; }
              50% { background-size: 200% 200%; background-position: right center; }
            }
            
            .animate-gradient-x {
              animation: gradient-x 3s ease infinite;
            }
            
            .animation-delay-1000 {
              animation-delay: 1s;
            }
          `
        }} />
      </section>
    </>
  );
};

export default Hero;