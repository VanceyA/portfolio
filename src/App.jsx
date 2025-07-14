import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('');

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
    },
    
  ];

  const skills = [
    { category: 'Technical', items: ['Software Engineering', 'Application Development', 'System Architecture', 'Problem Solving'] },
    { category: 'Communication', items: ['Technical Documentation', 'Cross-functional Collaboration', 'User Experience Design', 'Teaching & Training'] },
    { category: 'Bridge Skills', items: ['Requirements Translation', 'Technical Communication', 'User-Centered Design', 'Process Improvement'] }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d6d3d1' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12 0c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      fontFamily: 'Georgia, "Times New Roman", serif'
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-50/90 backdrop-blur-sm z-50 border-b border-stone-300" style={{
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight" style={{fontFamily: 'Georgia, serif'}}>
              VANCE ANDERSEN
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="text-stone-700 hover:text-stone-900 transition-colors font-medium tracking-wide">About</a>
              <a href="#experience" className="text-stone-700 hover:text-stone-900 transition-colors font-medium tracking-wide">Experience</a>
              <a href="#skills" className="text-stone-700 hover:text-stone-900 transition-colors font-medium tracking-wide">Skills</a>
              <a href="#contact" className="text-stone-700 hover:text-stone-900 transition-colors font-medium tracking-wide">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-12 border border-stone-200" style={{
            boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
          }}>
            <div className="text-center border-b-2 border-stone-900 pb-6 mb-8">
              <div className="text-xs uppercase tracking-widest text-stone-500 mb-2">
                SOFTWARE ENGINEER & TECHNICAL COMMUNICATOR
              </div>
              <h1 className="text-6xl font-bold leading-tight tracking-tight" style={{fontFamily: 'Georgia, serif'}}>
                BRIDGING THE GAP
              </h1>
              <h2 className="text-4xl font-light mt-2 text-stone-700" style={{fontFamily: 'Georgia, serif'}}>
                Between People and Technology
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl leading-relaxed text-stone-700 text-center mb-8" style={{
                fontFamily: 'Georgia, serif',
                lineHeight: '1.8'
              }}>
                Translating complex technical concepts into accessible solutions that drive real business impact and user satisfaction.
              </p>
              <div className="flex justify-center space-x-6 pt-4">
                <button className="bg-stone-900 text-white px-8 py-4 font-medium tracking-wide hover:bg-stone-800 transition-colors border-2 border-stone-900">
                  LET'S COLLABORATE
                </button>
                <button className="border-2 border-stone-900 text-stone-900 px-8 py-4 font-medium tracking-wide hover:bg-stone-50 transition-colors">
                  VIEW PORTFOLIO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden">
            <div className="bg-stone-900 text-white px-8 py-4">
              <h2 className="text-3xl font-bold tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                ABOUT THE ENGINEER
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="border-l-4 border-stone-900 pl-6 mb-8">
                    <h3 className="text-xl font-bold mb-4 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                      THE MISSION
                    </h3>
                    <p className="text-stone-700 leading-relaxed mb-4" style={{fontFamily: 'Georgia, serif', lineHeight: '1.8'}}>
                      I specialize in making technology accessible and actionable for diverse audiences. With a Bachelor's degree in Software Engineering (Application Development Track), I bring both technical depth and exceptional communication skills to every project.
                    </p>
                    <p className="text-stone-700 leading-relaxed" style={{fontFamily: 'Georgia, serif', lineHeight: '1.8'}}>
                      My unique value lies in translating complex technical concepts into clear, understandable solutions that drive real business impact and user satisfaction.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="border border-stone-300 bg-stone-50 p-6 mb-6">
                    <h3 className="text-lg font-bold mb-3 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                      CREDENTIALS
                    </h3>
                    <p className="text-stone-700 font-medium">
                      Bachelor's Degree in Software Engineering<br />
                      Application Development Track
                    </p>
                  </div>
                  <div className="border border-stone-300 bg-stone-50 p-6">
                    <h3 className="text-lg font-bold mb-3 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                      SPECIALIZATION
                    </h3>
                    <p className="text-stone-700 font-medium">
                      Technical excellence with human-centered approach, bridging complex systems and user needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden">
            <div className="bg-stone-900 text-white px-8 py-4">
              <h2 className="text-3xl font-bold tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                PROFESSIONAL EXPERIENCE
              </h2>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="group border-b border-stone-200 pb-8 last:border-b-0">
                    <div className="grid md:grid-cols-12 gap-6">
                      <div className="md:col-span-2">
                        <div className="bg-stone-900 text-white px-3 py-1 text-sm font-bold tracking-wider inline-block">
                          {exp.year}
                        </div>
                      </div>
                      <div className="md:col-span-10">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-stone-600 transition-colors tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-stone-600 mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
                          {exp.subtitle}
                        </h4>
                        <p className="text-stone-700 leading-relaxed" style={{fontFamily: 'Georgia, serif', lineHeight: '1.8'}}>
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden">
            <div className="bg-stone-900 text-white px-8 py-4">
              <h2 className="text-3xl font-bold tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                SKILL PORTFOLIO
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="border border-stone-300 bg-stone-50 p-6">
                    <h3 className="text-xl font-bold mb-6 tracking-wide border-b border-stone-400 pb-2" style={{fontFamily: 'Georgia, serif'}}>
                      {skillGroup.category.toUpperCase()}
                    </h3>
                    <ul className="space-y-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-stone-700 font-medium flex items-center" style={{fontFamily: 'Georgia, serif'}}>
                          <span className="w-2 h-2 bg-stone-900 mr-3 flex-shrink-0"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden">
            <div className="bg-stone-900 text-white px-8 py-4">
              <h2 className="text-3xl font-bold tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                TRANSLATION IN ACTION
              </h2>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                Making Technical Concepts Accessible
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-2 border-stone-400 bg-stone-100">
                  <div className="bg-stone-400 text-white px-4 py-2">
                    <h4 className="font-bold tracking-wider" style={{fontFamily: 'Georgia, serif'}}>
                      TECHNICAL VERSION
                    </h4>
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-sm leading-relaxed text-stone-800 bg-white p-4 border border-stone-300">
                      "We need to implement a RESTful API with JWT authentication middleware to handle user sessions and protect our endpoints from unauthorized access."
                    </p>
                  </div>
                </div>
                <div className="border-2 border-stone-900 bg-stone-50">
                  <div className="bg-stone-900 text-white px-4 py-2">
                    <h4 className="font-bold tracking-wider" style={{fontFamily: 'Georgia, serif'}}>
                      ACCESSIBLE VERSION
                    </h4>
                  </div>
                  <div className="p-6">
                    <p className="leading-relaxed text-stone-800 bg-white p-4 border border-stone-300" style={{fontFamily: 'Georgia, serif', lineHeight: '1.8'}}>
                      "We're building a secure system that verifies who users are before they can access their personal information, like a digital ID card check."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden">
            <div className="bg-stone-900 text-white px-8 py-4">
              <h2 className="text-3xl font-bold tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                LET'S COLLABORATE
              </h2>
            </div>
            <div className="p-12 text-center">
              <h3 className="text-2xl font-bold mb-6 tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                Ready to Bridge Your Technical Gaps?
              </h3>
              <p className="text-stone-700 mb-8 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Georgia, serif', lineHeight: '1.8'}}>
                Let's build technology that people actually understand and use. Ready to improve your team's technical communication and user experience?
              </p>
              <div className="flex justify-center space-x-8">
                <a href="mailto:your.email@example.com" className="flex items-center space-x-3 bg-stone-900 text-white px-6 py-3 font-medium tracking-wider hover:bg-stone-800 transition-colors">
                  <Mail size={20} />
                  <span>EMAIL</span>
                </a>
                <a href="https://github.com/yourusername" className="flex items-center space-x-3 border-2 border-stone-900 text-stone-900 px-6 py-3 font-medium tracking-wider hover:bg-stone-50 transition-colors">
                  <Github size={20} />
                  <span>GITHUB</span>
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="flex items-center space-x-3 border-2 border-stone-900 text-stone-900 px-6 py-3 font-medium tracking-wider hover:bg-stone-50 transition-colors">
                  <Linkedin size={20} />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-stone-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-700 font-medium tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
            © 2024 Vance Andersen. Building bridges between people and technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;