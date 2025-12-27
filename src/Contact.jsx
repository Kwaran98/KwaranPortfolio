import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[80vh] py-16 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the channels below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email Card */}
          <a
            href="mailto:kwaran911@gmail.com"
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary flex flex-col items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <i className="fas fa-envelope text-3xl text-primary group-hover:text-white transition-colors duration-300"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm break-words">
            kwaran911@gmail.com
            </p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/kamalesh-waran-58b674132/"
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary flex flex-col items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <i className="fab fa-linkedin text-3xl text-primary group-hover:text-white transition-colors duration-300"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600 text-sm">Connect with me</p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Kwaran98"
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary flex flex-col items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <i className="fab fa-github text-3xl text-primary group-hover:text-white transition-colors duration-300"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">GitHub</h3>
            <p className="text-gray-600 text-sm">Check out my code</p>
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:your-email@example.com"
          className="inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-full shadow-lg hover:bg-blue-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
