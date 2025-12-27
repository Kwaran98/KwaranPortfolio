const Navbar = ({ sections, active, onClick }) => {
  return (
    <header className="h-[10vh] w-full flex flex-row justify-between items-center px-4 md:px-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <a
        href="#home"
        onClick={onClick("home")}
        className="font-mono text-xl md:text-2xl font-bold text-gray-800 tracking-wide hover:text-primary transition-colors duration-300"
      >
        Kamalesh Waran
      </a>

      <nav className="flex gap-4 md:gap-8">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={onClick(id)}
            className={`
              px-3 py-2 md:px-4 md:py-2 rounded transition-all duration-300 text-sm md:text-base font-medium
              ${
                active === id
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }
            `}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
