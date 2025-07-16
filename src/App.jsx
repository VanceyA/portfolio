import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Award,
  BookOpen,
  Coffee,
  Code,
  Compass,
  Heart,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";
import Profile from "./assets/profile.jpg";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [showFullStory, setShowFullStory] = useState(false);
  const [isManualNavigation, setIsManualNavigation] = useState(false);

  // Update active section based on scroll position
  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      // Don't process scroll events too frequently or during manual navigation
      if (isScrolling || isManualNavigation) return;

      isScrolling = true;

      // Use setTimeout to add a small delay
      setTimeout(() => {
        const sections = document.querySelectorAll("section");
        let currentSection = "";

        // If we're near the top of the page, don't highlight any section
        if (window.scrollY < 100) {
          setActiveSection("");
          isScrolling = false;
          return;
        }

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
          ) {
            currentSection = section.getAttribute("id");
          }
        });

        setActiveSection(currentSection);
        isScrolling = false;
      }, 100); // Slightly longer delay to prevent flickering
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (sectionId) => {
    // Set manual navigation flag to prevent scroll handler from interfering
    setIsManualNavigation(true);

    // Scroll to the section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });

    // Reset the flag after animation completes
    setTimeout(() => {
      setIsManualNavigation(false);
    }, 800);
  };

  const newspaperSections = [
    {
      id: "about",
      title: "BRIDGING TECHNOLOGY & COMMUNICATION",
      date: "JULY 14, 2025",
      headline:
        "Software Engineer Specializes in Making Complex Tech Accessible",
      content:
        "Vance Andersen combines technical expertise with exceptional communication skills to bridge the gap between developers and non-technical stakeholders.",
      fullStory: [
        "In the rapidly evolving landscape of technology, Vance Andersen stands out as a rare professional who excels not only in technical implementation but also in making complex concepts accessible to everyone involved in a project.",
        "With a background spanning both software development and technical communication, Andersen has cultivated a unique approach that emphasizes clarity without sacrificing technical depth.",
        "'I've always believed that the best technology solutions are those that can be understood by everyone who uses them,' explains Andersen. 'My goal is to create that understanding through both thoughtful code and clear communication.'",
        "This philosophy has guided Andersen through numerous successful projects where technical teams and non-technical stakeholders needed to collaborate effectively.",
        "When not coding or explaining technical concepts, Andersen can be found exploring new technologies, contributing to open-source projects, and mentoring aspiring developers who share his passion for accessible technology.",
      ],
      quotes: [
        {
          text: "One of the most effective communicators in tech I've ever worked with.",
          author: "Former Project Manager",
        },
        {
          text: "Vance has a gift for making the complex seem simple without losing the important details.",
          author: "Client",
        },
        {
          text: "A developer who truly understands that code is written for humans first, machines second.",
          author: "Senior Developer",
        },
      ],
      keyValues: [
        {
          icon: "Compass",
          title: "User-Focused",
          description:
            "Always keeping the end user's needs at the center of development",
        },
        {
          icon: "Lightbulb",
          title: "Creative Solutions",
          description: "Finding innovative approaches to technical challenges",
        },
        {
          icon: "Code",
          title: "Technical Excellence",
          description:
            "Writing clean, maintainable code that solves real problems",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "right",
    },
    {
      id: "experience",
      title: "PROFESSIONAL EXPERIENCE",
      date: "JULY 14, 2025",
      headline: "A Track Record of Bridging Technical Gaps",
      content:
        "With experience in both technical implementation and user-focused design, Andersen creates solutions that are both technically sound and user-friendly.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "left",
      showExperience: true,
    },
    {
      id: "skills",
      title: "TECHNICAL & COMMUNICATION SKILLS",
      date: "JULY 14, 2025",
      headline: "The Perfect Blend of Technical and Soft Skills",
      content:
        "Specializing in translating technical concepts into accessible language, Andersen helps teams collaborate more effectively and deliver better products.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "right",
      showSkills: true,
    },
    {
      id: "contact",
      title: "GET IN TOUCH",
      date: "JULY 14, 2025",
      headline: "Ready to Collaborate on Your Next Project?",
      content:
        "By focusing on both technical excellence and user experience, Andersen develops solutions that meet business needs while remaining accessible to all users.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "left",
      showContact: true,
    },
  ];

  const experiences = [
    {
      year: "2024-Present",
      title: "Software Engineer",
      subtitle: "Tdooz, Hybrid",
      description:
        "Develop full-stack features across React, React Native, Go backend, and AWS infrastructure, implementing changes spanning 4+ applications. Provide technical support and mentorship to 5-engineer team on cross-stack debugging, architecture decisions, and unfamiliar technologies. Maintain CI/CD pipeline and development tooling while designing end-to-end platform features for microservices architecture.",
    },
    {
      year: "2023-Present",
      title: "Computer Science Educator",
      subtitle: "Various Organizations",
      description:
        "Delivered engaging computer science instruction at multiple institutions including iD Tech Camps, Utah Tech University, and elementary school code clubs. Adapted curriculum to diverse student needs from K-12 to university level. Created custom learning materials to make complex programming concepts accessible to beginners. Mentored students through hands-on coding projects to build practical skills.",
    },
    {
      year: "2023-2024",
      title: "Software Developer",
      subtitle: "State of Utah, Remote",
      description:
        "Developed custom web-based solutions using Power Platform and automated business workflows. Provided technical guidance to development teams throughout the software development lifecycle.",
    },
    {
      year: "2021-2023",
      title: "Secondary Tech Support",
      subtitle: "Washington County School District, St. George, UT",
      description:
        "Provided hardware, network, and software support for over 2,000 devices including desktops, laptops, and Chromebooks.",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Go", "JavaScript", "TypeScript", "Python", "C++", "HTML", "CSS"],
    },
    {
      category: "Frameworks",
      items: ["Gin", "Node.js", "Vue", "React", "Next.js", "Nuxt"],
    },
    {
      category: "Infrastructure & Tools",
      items: [
        "Microservices",
        "Docker",
        "GitHub",
        "PostgreSQL",
        "MongoDB",
        "AWS",
      ],
    },
    {
      category: "Communication",
      items: [
        "Technical Documentation",
        "Team Mentorship",
        "Cross-functional Collaboration",
        "Technical Instruction",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100 font-serif">
      {/* Fixed Navigation Bar / Masthead */}
      <header className="fixed top-0 left-0 right-0 bg-stone-100 border-b-2 border-stone-800 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-baseline">
              <button
                onClick={() => {
                  // Set manual navigation flag to prevent scroll handler from interfering
                  setIsManualNavigation(true);

                  window.scrollTo({ top: 0, behavior: "smooth" });

                  // Reset the flag after animation completes
                  setTimeout(() => {
                    setIsManualNavigation(false);
                  }, 800);
                }}
                className="flex items-baseline hover:opacity-80 cursor-pointer"
                aria-label="Return to top"
              >
                <h1 className="text-2xl font-bold mr-4">THE PORTFOLIO TIMES</h1>
                <p className="text-sm italic">Vol. 1 Issue 4</p>
              </button>
            </div>
            <nav>
              <ul className="flex space-x-6">
                {newspaperSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => navigateToSection(section.id)}
                      className={`py-1 px-2 cursor-pointer ${
                        activeSection === section.id
                          ? "bg-stone-800 text-stone-100"
                          : "text-stone-800 hover:bg-stone-200"
                      }`}
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
        {/* Hero Banner */}
        <div className="py-8 mb-2 border-y-4 border-double border-stone-800 relative overflow-hidden">
          {/* Breaking news banner */}
          <div className="bg-stone-800 text-stone-100 py-2 mb-8 shadow-lg">
            <div className="container mx-auto px-4">
              <p className="text-sm font-bold tracking-wider text-center">
                BREAKING NEWS -{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Profile Photo Column */}
              <div className="md:w-1/3">
                <div className="relative">
                  {/* Decorative newspaper corner fold */}

                  {/* Profile Image with newspaper styling */}
                  <div className="border-4 border-stone-800 p-2 bg-stone-100 shadow-xl relative z-0">
                    <img
                      src={Profile}
                      alt="Vance Andersen"
                      className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 mix-blend-multiply"
                    />
                    <div className="absolute bottom-4 left-0 right-0 bg-stone-800 bg-opacity-80 text-stone-100 p-2 text-center">
                      <p className="font-bold">Vance Andersen</p>
                      <p className="text-xs">
                        Software Engineer & Communicator
                      </p>
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="text-xs italic mt-2 text-center">
                    Photo: The Portfolio Times / Staff
                  </p>
                </div>
              </div>

              {/* Headline Column */}
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-6xl md:text-7xl font-bold mb-2 tracking-tight font-serif">
                  VANCE ANDERSEN
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  TECH INNOVATOR BRIDGES TECH AND REAL PEOPLE
                </h3>

                {/* Quick stats/highlights in newspaper style */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6 text-center">
                  <button
                    onClick={() => navigateToSection("experience")}
                    className="border border-stone-400 p-3 bg-stone-50 hover:bg-stone-100 transition-colors duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  >
                    <p className="font-bold text-2xl">4+</p>
                    <p className="text-sm">Years Experience</p>
                  </button>
                  <button
                    onClick={() => navigateToSection("projects")}
                    className="border border-stone-400 p-3 bg-stone-50 hover:bg-stone-100 transition-colors duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  >
                    <p className="font-bold text-2xl">15+</p>
                    <p className="text-sm">Projects Completed</p>
                  </button>
                  <button
                    onClick={() => navigateToSection("skills")}
                    className="border border-stone-400 p-3 bg-stone-50 hover:bg-stone-100 transition-colors duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg cursor-pointer col-span-2 md:col-span-1"
                  >
                    <p className="font-bold text-2xl">5+</p>
                    <p className="text-sm">Tech Stacks</p>
                  </button>
                </div>

                <p className="text-xl italic mb-6">
                  "One of the most innovative approaches to personal branding
                  I've seen" — Industry Expert
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button
                    onClick={() => navigateToSection("about")}
                    className="bg-stone-800 text-stone-100 px-8 py-3 hover:bg-stone-700 transition-colors duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  >
                    Read My Story
                  </button>
                  <button
                    onClick={() => navigateToSection("contact")}
                    className="border-2 border-stone-800 px-8 py-3 hover:bg-stone-200 transition-colors duration-300 shadow-md transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-8 text-center animate-bounce">
              <div className="w-8 h-8 mx-auto border-b-2 border-r-2 border-stone-800 transform rotate-45"></div>
              <p className="text-sm mt-2">Scroll for full story</p>
            </div>
          </div>
        </div>

        {/* Newspaper Sections */}
        {newspaperSections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`min-h-screen py-10 ${
              index % 2 === 0 ? "bg-stone-100" : "bg-stone-200"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="mb-8 border-b-2 border-stone-800 pb-2">
                <p className="text-sm uppercase tracking-wider">
                  {section.date}
                </p>
                <h2 className="text-4xl font-bold mb-2">{section.title}</h2>
                <h3 className="text-2xl italic">{section.headline}</h3>
              </div>

              {/* Section Content */}
              <div
                className={`flex flex-col ${
                  section.imagePosition === "right"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } gap-8`}
              >
                {/* Text Content */}
                <div
                  className={`flex-1 ${
                    section.imagePosition === "right" ? "pr-4" : "pl-4"
                  }`}
                >
                  <div className="relative">
                    {/* Content with improved layout */}
                    <div className="text-stone-800">
                      {section.id === "about" ? (
                        <div className="about-section">
                          {/* Introduction */}
                          <div className="mb-8">
                            <p className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                              {section.content}
                            </p>
                          </div>

                          {/* Two-column layout for the rest of the content */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative">
                            {/* Paper fold line between columns (only visible on md screens and up) */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-300"></div>
                            {/* Column 1: Full story */}
                            <div>
                              <div className="border-l-4 border-stone-800 pl-4 mb-6">
                                <h4 className="text-xl font-bold mb-4 border-b border-stone-400">
                                  My Story
                                </h4>
                                {showFullStory ? (
                                  <>
                                    {section.fullStory.map((paragraph, i) => (
                                      <p key={i} className="mb-4">
                                        {paragraph}
                                      </p>
                                    ))}
                                    <button
                                      onClick={() => setShowFullStory(false)}
                                      className="text-sm font-bold hover:text-stone-600 flex items-center gap-1 mt-2"
                                    >
                                      <span>Read Less</span>
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <p>{section.fullStory[0]}</p>
                                    <button
                                      onClick={() => setShowFullStory(true)}
                                      className="mt-4 text-sm font-bold hover:text-stone-600 flex items-center gap-1"
                                    >
                                      <span>Continue Reading</span>
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Column 2: Key values with icons */}
                            <div>
                              <div className="mb-6">
                                <h4 className="text-xl font-bold mb-4 border-b border-stone-400">
                                  Core Values & Approach
                                </h4>
                                <div className="grid grid-cols-1 gap-4">
                                  {section.keyValues.map((value, i) => {
                                    const IconComponent = {
                                      Award: Award,
                                      BookOpen: BookOpen,
                                      Coffee: Coffee,
                                      Code: Code,
                                      Compass: Compass,
                                      Heart: Heart,
                                      Lightbulb: Lightbulb,
                                      Target: Target,
                                      Zap: Zap,
                                    }[value.icon];

                                    return (
                                      <div
                                        key={i}
                                        className="flex items-start gap-3 p-4 border border-stone-300 bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer"
                                      >
                                        <div className="mt-1">
                                          <IconComponent size={20} />
                                        </div>
                                        <div>
                                          <h5 className="font-bold">
                                            {value.title}
                                          </h5>
                                          <p className="text-sm mt-1">
                                            {value.description}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                          {section.content}
                        </p>
                      )}

                      {/* Experience Section */}
                      {section.showExperience && (
                        <div className="break-inside-avoid">
                          <h4 className="text-xl font-bold mt-6 mb-4 border-b border-stone-400">
                            Career Highlights
                          </h4>
                          {experiences.map((exp, i) => (
                            <div key={i} className="mb-6">
                              <div className="flex justify-between items-baseline mb-1">
                                <h5 className="font-bold">{exp.title}</h5>
                                <span className="text-sm italic">
                                  {exp.year}
                                </span>
                              </div>
                              <h6 className="text-sm font-semibold mb-1">
                                {exp.subtitle}
                              </h6>
                              <ul className="text-sm list-disc pl-5 space-y-1 mt-2">
                                {exp.description
                                  .split(". ")
                                  .filter((item) => item.trim().length > 0)
                                  .map((item, index) => (
                                    <li key={index}>
                                      {item.endsWith(".") ? item : `${item}.`}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Skills Section */}
                      {section.showSkills && (
                        <div className="break-inside-avoid">
                          <h4 className="text-xl font-bold mt-6 mb-4 border-b border-stone-400">
                            Expertise
                          </h4>
                          {skills.map((skillGroup, i) => (
                            <div key={i} className="mb-6">
                              <h5 className="font-bold mb-2">
                                {skillGroup.category}
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, j) => (
                                  <span
                                    key={j}
                                    className="bg-stone-300 hover:bg-stone-400 px-2 py-1 text-xs rounded transition-colors duration-300 shadow-sm hover:shadow-md cursor-default"
                                  >
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
                          <h4 className="text-xl font-bold mt-6 mb-4 border-b border-stone-400">
                            Contact Information
                          </h4>
                          <div className="space-y-3">
                            <a
                              href="mailto:vancevance2003@gmail.com"
                              className="flex items-center gap-2 hover:text-stone-600"
                            >
                              <Mail size={16} />
                              <span>vancevance2003@gmail.com</span>
                            </a>
                            <a
                              href="https://github.com/vanceya"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 hover:text-stone-600"
                            >
                              <Github size={16} />
                              <span>github.com/vanceya</span>
                            </a>
                            <a
                              href="https://linkedin.com/in/vance-andersen"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 hover:text-stone-600"
                            >
                              <Linkedin size={16} />
                              <span>linkedin.com/in/vance-andersen</span>
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
                  <p className="text-xs mt-2 italic text-stone-600">
                    Photo: The Portfolio Times / Staff
                  </p>
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
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Vance Andersen. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
