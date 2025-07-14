import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'about';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const newspaperSections = [
    {
      id: "about",
      title: "BRIDGING TECHNOLOGY & COMMUNICATION",
      date: "JULY 14, 2025",
      headline: "Software Engineer Specializes in Making Complex Tech Accessible",
      content: "Vance Andersen combines technical expertise with exceptional communication skills to bridge the gap between developers and non-technical stakeholders.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "right"
    },
    {
      id: "experience",
      title: "PROFESSIONAL EXPERIENCE",
      date: "JULY 14, 2025",
      headline: "A Track Record of Bridging Technical Gaps",
      content: "With experience in both technical implementation and user-focused design, Andersen creates solutions that are both technically sound and user-friendly.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "left",
      showExperience: true
    },
    {
      id: "skills",
      title: "TECHNICAL & COMMUNICATION SKILLS",
      date: "JULY 14, 2025",
      headline: "The Perfect Blend of Technical and Soft Skills",
      content: "Specializing in translating technical concepts into accessible language, Andersen helps teams collaborate more effectively and deliver better products.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "right",
      showSkills: true
    },
    {
      id: "contact",
      title: "GET IN TOUCH",
      date: "JULY 14, 2025",
      headline: "Ready to Collaborate on Your Next Project?",
      content: "By focusing on both technical excellence and user experience, Andersen develops solutions that meet business needs while remaining accessible to all users.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "left",
      showContact: true
    }
  ];
  
  const experiences = [
    {
      year: '2024-25',
      title: 'Startup Development',
      subtitle: 'Balancing Technical Excellence with User Needs',
      description: 'Developed applications under CEO/CTO supervision while maintaining focus on user experience and technical feasibility.'
    },
    {
      year: '2023-25',
      title: 'Computer Science Education',
      subtitle: 'Making Complex Concepts Clear',
      description: 'Taught programming concepts to diverse learners, developing methods to explain difficult technical subjects in accessible ways.'
    },
    {
      year: '2023-24',
      title: 'Low-Code/No-Code Collaboration',
      subtitle: 'Bridging Development Teams',
      description: 'Brought custom code solutions to bridge gaps in low-code/no-code implementations, facilitating seamless team collaboration.'
    },
    {
      year: '2021-23',
      title: 'Field Support IT',
      subtitle: 'Understanding Real User Pain Points',
      description: 'Diagnosed and solved technical issues while maintaining clear communication with end users, translating complex technical problems into understandable solutions.'
    }
  ];

  const skills = [
    { category: 'Technical', items: ['Software Engineering', 'Application Development', 'System Architecture', 'Problem Solving'] },
    { category: 'Languages', items: ['JavaScript', 'Python', 'HTML/CSS', 'SQL', 'Java'] },
    { category: 'Frameworks', items: ['React', 'Node.js', 'Express', 'Next.js', 'Django'] },
    { category: 'Communication', items: ['Technical Writing', 'Documentation', 'User Training', 'Client Presentations'] }
  ];

  return (
    <div className="min-h-screen bg-stone-100 font-serif">
      {/* Fixed Navigation Bar / Masthead */}
      <header className="fixed top-0 left-0 right-0 bg-stone-100 border-b-2 border-stone-800 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-baseline">
              <h1 className="text-2xl font-bold mr-4">THE PORTFOLIO TIMES</h1>
              <p className="text-sm italic">Vol. 1 Issue 4</p>
            </div>
            <nav>
              <ul className="flex space-x-6">
                {newspaperSections.map(section => (
                  <li key={section.id}>
                    <button 
                      onClick={() => navigateToSection(section.id)}
                      className={`py-1 px-2 ${activeSection === section.id ? 'bg-stone-800 text-stone-100' : 'text-stone-800 hover:bg-stone-200'}`}
                    >
                      {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Newspaper Sections */}
        {newspaperSections.map((section, index) => (
          <section 
            key={section.id} 
            id={section.id} 
            className={`min-h-screen py-16 ${index % 2 === 0 ? 'bg-stone-100' : 'bg-stone-200'}`}
          >
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="mb-8 border-b-2 border-stone-800 pb-2">
                <p className="text-sm uppercase tracking-wider">{section.date}</p>
                <h2 className="text-4xl font-bold mb-2">{section.title}</h2>
                <h3 className="text-2xl italic">{section.headline}</h3>
              </div>

              {/* Section Content */}
              <div className={`flex flex-col ${section.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                {/* Text Content */}
                <div className={`flex-1 ${section.imagePosition === 'right' ? 'pr-4' : 'pl-4'}`}>
                  <div className="relative">
                    {/* Newspaper fold effect */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-stone-300"></div>
                    <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-stone-300/20 to-transparent"></div>
                    
                    {/* Multi-column text */}
                    <div className="columns-1 md:columns-2 gap-8 text-stone-800">
                      <p className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                        {section.content}
                      </p>
                      
                      {/* Experience Section */}
                      {section.showExperience && (
                        <div className="break-inside-avoid">
                          <h4 className="text-xl font-bold mt-6 mb-4 border-b border-stone-400">Career Highlights</h4>
                          {experiences.map((exp, i) => (
                            <div key={i} className="mb-6">
                              <div className="flex justify-between items-baseline mb-1">
                                <h5 className="font-bold">{exp.title}</h5>
                                <span className="text-sm italic">{exp.year}</span>
                              </div>
                              <h6 className="text-sm font-semibold mb-1">{exp.subtitle}</h6>
                              <p className="text-sm">{exp.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Skills Section */}
                      {section.showSkills && (
                        <div className="break-inside-avoid">
                          <h4 className="text-xl font-bold mt-6 mb-4 border-b border-stone-400">Expertise</h4>
                          {skills.map((skillGroup, i) => (
                            <div key={i} className="mb-6">
                              <h5 className="font-bold mb-2">{skillGroup.category}</h5>
                              <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, j) => (
                                  <span key={j} className="bg-stone-300 px-2 py-1 text-xs rounded">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Contact Section */}
                      {section.showContact && (
                        <div className="break-inside-avoid">
                          <h4 className="text-xl font-bold mt-6 mb-4 border-b border-stone-400">Contact Information</h4>
                          <div className="space-y-3">
                            <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-stone-600">
                              <Mail size={16} />
                              <span>contact@example.com</span>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-stone-600">
                              <Github size={16} />
                              <span>github.com/vanceandersen</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-stone-600">
                              <Linkedin size={16} />
                              <span>linkedin.com/in/vanceandersen</span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-auto object-cover grayscale mix-blend-multiply border border-stone-400 shadow-md"
                  />
                  <p className="text-xs mt-2 italic text-stone-600">Photo: The Portfolio Times / Staff</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg font-bold">THE PORTFOLIO TIMES</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Vance Andersen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
