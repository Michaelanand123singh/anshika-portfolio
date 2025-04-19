import React from 'react';
import { Helmet } from 'react-helmet';
import Button from '../ui/Button';

const Hero: React.FC = () => {
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
        className="min-h-screen flex items-center pt-16 pb-20 bg-dark relative overflow-hidden"
        aria-label="Introduction"
      >
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-secondary rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="container-section flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 z-10">
            
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I'm <span className="text-primary">Anshika Gupta</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mt-2 mb-6">UX/UI Designer</h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              I create user-centered digital experiences that are intuitive, accessible, and visually stunning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary"
                onClick={() => window.open('/anshika-resume.pdf', '_blank')}
                aria-label="Download CV"
              >
                Download CV
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Navigate to contact section"
              >
                Let's Talk
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 z-10">
            <div className="relative">
              <div className="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <img
                  src="/anshika.webp"
                  alt="Anshika Gupta, UX/UI Designer"
                  className="rounded-lg w-full max-w-md mx-auto"
                  width="500"
                  height="500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;