import BlogImage from "./Images/blog_image.png";
import CarRentalImage from "./Images/car_rental_website.png";

const PROJECTS = [
  {
    title: "Blog Posts Platform",
    description:
      "A full-featured blogging platform where users can create, read, update, and delete blog posts. Built for a seamless user experience.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://project3-ga-blog.vercel.app/",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "Car Rental Website",
    description:
      "An front-end facing car rental application that allows users to browse available vehicles",
    tags: ["React", "JavaScript", "TailwindCSS", "REST API"],
    link: "https://project2-car-rental-thxs.vercel.app/",
    gradient: "from-pink-500 to-red-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 px-6 md:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Things I've built to solve real problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-primary flex flex-col h-full"
            >
              {/* Project Image/Icon */}
              <div
                className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}
              >
                {project.title === "Blog Posts Platform" ? (
                  <img
                    src={BlogImage}
                    alt="Blog Post Image"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={CarRentalImage}
                    alt="Car Rental"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-blue-100 text-primary rounded-full text-sm font-semibold group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>View Project</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
