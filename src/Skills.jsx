import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const subtitle1 = [
  { label: "JavaScript", iconClass: "fab fa-js-square" },
  { label: "React", iconClass: "fab fa-react" },
  { label: "Node.js", iconClass: "fab fa-node-js" },
  { label: "HTML5", iconClass: "fab fa-html5" },
  { label: "CSS3", iconClass: "fab fa-css3-alt" },
  { label: "Docker", iconClass: "fab fa-docker" },
  // TypeScript via Devicon for accurate logo
  { label: "TypeScript", deviconClass: "devicon-typescript-plain" },
];

const subtitle2 = [
  { label: "MongoDB", iconClass: "fas fa-database" },
  { label: "Express.js", iconClass: "fas fa-server" },
  { label: "Python", iconClass: "fab fa-python" },
  { label: "Git", iconClass: "fab fa-git-alt" },
  // Django via Simple Icons SVG for brand-accurate logo
  {
    label: "Django",
    img: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/django.svg",
  },
  { label: "Bootstrap", iconClass: "fab fa-bootstrap" },
  { label: "Linux", iconClass: "fab fa-linux" },
  
];

const subtitle3 = [
  // Nginx via Simple Icons SVG for brand-accurate logo
  {
    label: "Nginx",
    img: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nginx.svg",
  },
  // NPM
  { label: "NPM", iconClass: "fab fa-npm" },
  { label: "AWS", iconClass: "fab fa-aws" },
  { label: "FastAPI", iconClass: "fas fa-bolt" },
  { label: "Flutter", deviconClass: "devicon-flutter-plain" },
  { label: "React Native", deviconClass: "devicon-react-original" },
  { label: "PostgreSQL", iconClass: "fas fa-database" },
];

const SkillsRow = ({ items }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 py-4">
    {items.map(({ label, iconClass, deviconClass, img }) => (
      <div
        key={label}
        className="flex flex-col items-center gap-2 min-w-[80px] group cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        <div
          className="text-gray-400 group-hover:text-gray-700 transition-colors duration-300"
          aria-label={label}
          title={label}
        >
          {iconClass && <i className={`${iconClass} text-4xl`} />}
          {deviconClass && <i className={`${deviconClass} text-4xl`} />}
          {img && (
            <img
              src={img}
              alt={label}
              className="w-9 h-9 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                filter:
                  "invert(73%) sepia(3%) saturate(0%) hue-rotate(176deg) brightness(92%) contrast(86%)",
              }}
            />
          )}
        </div>
        <div className="text-gray-400 font-semibold text-sm group-hover:text-gray-700 transition-colors duration-300">
          {label}
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center min-h-screen bg-white py-12 px-6 md:px-12"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-7xl mx-auto">
        {/* GIF Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="https://media1.tenor.com/m/IieZUsqoYCwAAAAC/developer.gif"
            alt="Developer GIF"
            className="h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
          />
        </div>

        {/* Skills Description */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left">
            What I do?
          </h2>

          <div className="flex flex-col space-y-6">
            <p className="text-xl md:text-2xl text-gray-500 text-left font-semibold">
              Practical experience across modern web stacks, building responsive
              UIs and deploying to cloud infrastructure.
            </p>

            <div className="space-y-2">
              <SkillsRow items={subtitle1} />
              <SkillsRow items={subtitle2} />
              <SkillsRow items={subtitle3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
