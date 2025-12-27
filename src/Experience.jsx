import React from "react";
import { useState } from "react";

function Experience() {
  const experienceData = [
    {
      company: "ST Engineering Aerospace Engines (STEA)",
      location: "Singapore",
      role: "Software Engineer",
      period: "Sept 2024 – Present",
      summary:
        "Building full-stack systems for aerospace manufacturing operations, focusing on resource scheduling, job tracking, and maintenance workflows.",
      projects: [
        {
          name: "Job Clocking System",
          subtitle: "Javascript + Python",
          tech: [
            "React",
            "FastAPI",
            "Express.js",
            "Real-time APIs",
            "MSSQL",
            "MongoDB",
            "AWS",
          ],
          achievements: [
            "Architected and deployed a real-time job clocking system using React for the HMI interface and FastAPI backend, enabling technicians to authenticate, track work duration, and automatically sync job data with company databases in real-time",
            "Integrated live API verification with company authentication systems to validate technician credentials and machine assignments, ensuring secure job tracking across the shopfloor",
          ],
        },
        {
          name: "Resource Booking & Scheduling Platform",
          subtitle: "Javascript + Python",
          tech: [
            "React",
            "FastAPI",
            "MongoDB",
            "MSSQL",
            "Docker",
            "Nginx",
            "AWS",
          ],
          achievements: [
            "Built an end-to-end calendar booking system using React, FastAPI, MongoDB, Docker, and Nginx that allows cell leaders to view available jobs, technicians, and machines in real-time",
            "Designed intelligent resource allocation logic that cross-references technician availability, machine maintenance schedules, and employee leave data by integrating REST APIs with multiple legacy systems",
            "Reduced scheduling conflicts by 60% by consolidating fragmented booking data from multiple sources into a unified calendar interface accessible to 100+ cell leaders",
            "Developed dual-view calendar interfaces: one for cell leaders to manage bookings and another for technicians to track their daily appointments and assignments",
            "Optimized MongoDB aggregation pipelines to handle complex availability queries across technicians, machines, and maintenance windows with sub-second response times",
          ],
        },
        {
          name: "Maintenance Request Management System",
          subtitle: "TypeScript and Python",
          tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
          achievements: [
            "Leading migration of legacy Django maintenance system to a modern stack using React TypeScript, FastAPI, and PostgreSQL to improve form submission workflows and data integrity",
            "Designing structured maintenance request forms with validation layers to streamline repair requests, parts ordering, and job tracking across engineering teams",
          ],
        },
      ],
      leadership: [
        "Containerized all full-stack applications using Docker and established GitLab CI/CD pipelines for automated testing and deployment to internal AWS infrastructure",
        "Collaborated cross-functionally with UX designers and product managers to gather requirements, prototype features, and iteratively improve user workflows based on technician feedback",
        "Implemented robust data validation and business logic across SQL and MongoDB databases to ensure data integrity during cross-collection updates and API integrations",
      ],
    },
    {
      company: "Infineon Technologies",
      location: "Singapore",
      role: "Python Developer / Chip Verification Engineer",
      period: "Jun 2023 – Sept 2024",
      summary:
        "Developed automation tools and visualization applications for semiconductor testing and chip verification workflows.",
      projects: [],
      leadership: [
        "Developed Python GUI applications (Tkinter, Matplotlib, Plotly) for real-time visualization of semiconductor test data, enhancing chip reliability analysis under varying temperature conditions",
        "Automated data analysis pipelines that reduced manual review time by 50%",
      ],
    },
  ];

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (companyIndex, projectIndex) => {
    const key = `${companyIndex}-${projectIndex}`;
    setExpandedProject(expandedProject === key ? null : key);
  };

  return (
    <section
      id="experience"
      className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600">
            Building scalable solutions and delivering impact
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experienceData.map((job, jobIndex) => (
            <div
              key={jobIndex}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Company Header */}
              <div className="bg-gradient-to-r from-sky-400 to-blue-400 text-white p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{job.company}</h3>
                    <p className="text-xl text-blue-100 font-semibold">
                      {job.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {job.period}
                    </span>
                    <span className="text-blue-100 text-sm mt-2">
                      {job.location}
                    </span>
                  </div>
                </div>
                {job.summary && (
                  <p className="mt-4 text-blue-50 text-lg leading-relaxed">
                    {job.summary}
                  </p>
                )}
              </div>

              {/* Projects Section */}
              {job.projects.length > 0 && (
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    Key Projects
                  </h4>
                  <div className="space-y-4">
                    {job.projects.map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-colors duration-300"
                      >
                        {/* Project Header - Clickable */}
                        <button
                          onClick={() => toggleProject(jobIndex, projectIndex)}
                          className="w-full p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-left"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h5 className="text-xl font-bold text-gray-900 mb-1">
                                {project.name}
                              </h5>
                              <p className="text-primary font-semibold text-sm">
                                {project.subtitle}
                              </p>
                            </div>
                            <span
                              className="text-2xl text-primary transform transition-transform duration-300"
                              style={{
                                transform:
                                  expandedProject ===
                                  `${jobIndex}-${projectIndex}`
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                              }}
                            >
                              ▼
                            </span>
                          </div>

                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-100 text-primary rounded-full text-xs font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </button>

                        {/* Project Details - Expandable */}
                        {expandedProject === `${jobIndex}-${projectIndex}` && (
                          <div className="p-6 bg-white border-t border-gray-200 animate-fadeIn">
                            <ul className="space-y-3">
                              {project.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="relative pl-6 text-gray-700 leading-relaxed"
                                >
                                  <span className="absolute left-0 text-primary text-xl font-bold">
                                    ▹
                                  </span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Leadership & Technical Excellence Section */}
              {job.leadership.length > 0 && (
                <div className="p-8 bg-gray-50">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    {job.projects.length > 0
                      ? "Technical Leadership & DevOps"
                      : "Key Achievements"}
                  </h4>
                  <ul className="space-y-3">
                    {job.leadership.map((item, idx) => (
                      <li
                        key={idx}
                        className="relative pl-6 text-gray-700 leading-relaxed"
                      >
                        <span className="absolute left-0 text-primary text-xl font-bold">
                          ▹
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Experience;
