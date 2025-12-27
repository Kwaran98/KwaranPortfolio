import React from "react";
//Hooks:
import { useState, useEffect } from "react";
// Import Images:
import ProfilePic from "./Images/Kamalesh_profile_pic1.jpg";
import LinkedInIcon from "./Images/linkedin.png";
import GitHubIcon from "./Images/github.png";
import EmailIcon from "./Images/gmail.webp";

function About() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Hi, there ... Welcome to my portfolio!";
  const typingSpeed = 100; // milliseconds between each character

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const socialLinks = {
    github: "https://github.com/Kwaran98",
    linkedin: "https://www.linkedin.com/in/kamalesh-waran-58b674132/",
    email: "mailto:kwaran911@gmail.com",
  };

  return (
    <section
      id="about"
      className="min-h-screen py-12 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white flex items-center"
    >
      {/* Centered Container */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center items-start space-y-6">
            {/* Typing Animation */}
            <div className="flex justify-start">
              <h1 className="font-mono text-2xl md:text-3xl lg:text-4xl text-left">
                {displayText}
                <span className="text-primary cursor-blink">|</span>
              </h1>
            </div>

            {/* Summary */}
            <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-700 text-left">
              I am <i className="font-semibold">Kamalesh Waran</i>, an aspiring
              Full Stack Software Engineer with a passion for building
              meaningful and impactful digital products. I enjoy creating
              solutions that improve lives and bring value to the community.
              <br />
              <br />
              Feel free to connect with me on{" "}
              <b className="text-gray-900">LinkedIn</b> or reach out via{" "}
              <b className="text-gray-900">Email</b>.
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-row gap-4 my-8">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={GitHubIcon}
                  alt="GitHub Icon"
                  className="w-11 h-11 md:w-12 md:h-12 object-cover rounded-full shadow-md hover:shadow-lg cursor-pointer"
                />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                  className="w-11 h-11 md:w-12 md:h-12 object-cover rounded-full shadow-md hover:shadow-lg cursor-pointer"
                />
              </a>
              <a
                href={socialLinks.email}
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={EmailIcon}
                  alt="Email Icon"
                  className="w-11 h-11 md:w-12 md:h-12 object-cover rounded-full shadow-md hover:shadow-lg cursor-pointer"
                />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="px-6 py-3 text-lg font-semibold text-white bg-primary rounded hover:bg-blue-600 text-center transition-all duration-500 border border-transparent hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="/path-to-your-resume.pdf"
                download
                className="px-6 py-3 text-lg font-semibold text-white bg-primary rounded hover:bg-blue-600 text-center transition-all duration-500 border border-transparent hover:shadow-lg"
              >
                Download My Resume
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img
              src={ProfilePic}
              alt="Kamalesh Waran Profile Picture"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
