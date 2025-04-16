import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/assets/images/about-illustration.png"
              alt="About Anshika"
              className="max-w-full rounded-lg"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              About <span className="text-primary">Me</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Hi, I'm Anshika Gupta, a professional UX/UI Designer with a passion for creating dynamic and responsive user interfaces. I have extensive experience in user research, interaction design, prototyping, and visual design.
            </p>
            
            <p className="text-gray-300 mb-6">
              My approach combines creativity with analytical thinking to deliver designs that not only look beautiful but also solve real user problems. I believe that great design is invisible—it should feel natural and intuitive to the user.
            </p>
            
            <p className="text-gray-300">
              My goal is to deliver high-quality design solutions to both local and global clients, ensuring their satisfaction and success. I'm constantly learning and improving my skills to stay at the forefront of UX/UI design trends and best practices.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <p className="text-gray-300">Bachelor of Design<br />National Institute of Design</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Experience</h3>
                <p className="text-gray-300">2+ Years<br />UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;