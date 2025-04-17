import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  useEffect(() => {
    // Check for saved theme preference or use OS preference
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Anshika Gupta | UX/UI Designer Portfolio</title>
        <meta name="description" content="Professional UX/UI Designer specializing in creating intuitive and engaging digital experiences for web and mobile applications." />
        <meta name="keywords" content="UX designer, UI designer, portfolio, user experience, user interface, web design, mobile design, Anshika Gupta" />
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@type": "Person",
                "name": "Anshika Gupta",
                "url": "https://your-domain.com",
                "jobTitle": "UX/UI Designer",
                "description": "Professional UX/UI Designer with expertise in creating intuitive digital experiences"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-dark text-white">
        <header>
          <Navbar />
        </header>
        <main>
          <section id="home" aria-label="Hero section">
            <Hero />
          </section>
          <section id="about" aria-label="About me">
            <About />
          </section>
          <section id="skills" aria-label="My skills">
            <Skills />
          </section>
          <section id="portfolio" aria-label="Portfolio projects">
            <Portfolio />
          </section>
          <section id="contact" aria-label="Contact information">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;