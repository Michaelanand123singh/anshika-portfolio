import React from 'react';

const About: React.FC = () => {
  // Education details with structured data
  const education = {
    degree: "B.Com (Hons)",
    institution: "Delhi University",
    yearCompleted: "2021 - 2024",
    fieldOfStudy: "UI/UX Design"
  };

  // Experience details with structured data
  const experience = {
    years: "1+",
    field: "UI/UX Design",
    skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
  };

  // Scroll handler function - extract to avoid inline function creation on each render
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Schema.org structured data
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Anshika Gupta",
    "jobTitle": "UX/UI Designer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": education.institution,
      "sameAs": "https://www.nid.edu/" // Replace with actual URL
    },
    "knowsAbout": ["User Experience Design", "Interface Design", "Prototyping", "User Research"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "UX/UI Designer",
      "occupationField": experience.field,
      "experienceYears": experience.years
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-dark"
      aria-label="About Anshika Gupta"
      itemScope 
      itemType="http://schema.org/Person"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold" itemProp="name">
            About <span className="text-primary">Me</span>
          </h2>
        </header>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image with optimized alt text and loading */}
          <div className="lg:w-1/2">
            <figure className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/anshika-photo.jpg"
                alt="Anshika Gupta - UI/UX Designer based in India"
                className="max-w-full rounded-lg transition-transform duration-300 hover:scale-105"
                width="600"
                height="600"
                loading="lazy"
                itemProp="image"
              />
              <figcaption className="sr-only">Portrait photo of Anshika Gupta</figcaption>
            </figure>
          </div>
          
          {/* About Content with structured semantic markup */}
          <div className="lg:w-1/2">
            <div itemProp="description">
              <p className="text-gray-300 mb-6">
                Hi, I'm <span itemProp="givenName">Anshika</span> <span itemProp="familyName">Gupta</span>, a professional
                <span itemProp="jobTitle"> UX/UI Designer</span> with a passion for creating dynamic and responsive user interfaces. 
                I have extensive experience in user research, interaction design, prototyping, and visual design.
              </p>
              
              <p className="text-gray-300 mb-6">
                My approach combines creativity with analytical thinking to deliver designs that not only look beautiful but also solve real user problems. 
                I believe that great design is invisible—it should feel natural and intuitive to the user.
              </p>
              
              <p className="text-gray-300">
                My goal is to deliver high-quality design solutions to both local and global clients, ensuring their satisfaction and success. 
                I'm constantly learning and improving my skills to stay at the forefront of UX/UI design trends and best practices.
              </p>
            </div>
            
            {/* Education and Experience with Schema.org markup */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div itemProp="alumniOf" itemScope itemType="http://schema.org/EducationalOrganization">
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <div className="text-gray-300">
                  <p itemProp="degree">{education.degree}</p>
                  <p itemProp="name">{education.institution}</p>
                  <p>{education.yearCompleted}</p>
                  <meta itemProp="endDate" content={education.yearCompleted} />
                </div>
              </div>
              
              <div itemProp="hasOccupation" itemScope itemType="http://schema.org/Occupation">
                <h3 className="text-xl font-semibold text-primary mb-2">Experience</h3>
                <div className="text-gray-300">
                  <p><span itemProp="experienceYears">{experience.years}</span> Years</p>
                  <p itemProp="occupationField">{experience.field}</p>
                </div>
                <div className="hidden" aria-hidden="true">
                  <ul itemProp="skills">
                    {experience.skills.map((skill, index) => (
                      <li key={index} itemProp="skill">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#portfolio" 
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, '#portfolio')}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Schema.org data for SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
      />
    </section>
  );
};

export default About;