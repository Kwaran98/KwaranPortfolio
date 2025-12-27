import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  //State for active section
  const [activeSection, setActiveSection] = useState("about");

  //Define navigation sections
  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Below is a curried function:
  //
  //Handle smooth scrolling to sections:
  const handleNavClick = (sectionID) => (e) => {
    e.preventDefault();
    setActiveSection(sectionID);

    const element = document.getElementById(sectionID);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Update active section based on scroll position:
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Navbar
        sections={sections}
        active={activeSection}
        onClick={handleNavClick}
      />

      <main className="flex flex-col w-full overflow-y-auto">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
