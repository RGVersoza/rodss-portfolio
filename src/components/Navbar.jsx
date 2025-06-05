import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Removed FaToggleOn

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on link click
    }
  };

  const navItems = ["introduction", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 dark:bg-gray-900/20 backdrop-blur-lg border-b border-white/20 dark:border-gray-700/40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Site title */}
        <div
          className="text-xl font-semibold text-gray-900 dark:text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          John Doe
        </div>

        {/* Center: Desktop nav links */}
        <ul className="hidden md:flex space-x-8 text-gray-900 dark:text-white font-medium">
          {navItems.map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>

        {/* Right: Hamburger only */}
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-900 dark:text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-white/20 dark:border-gray-700/50 flex flex-col items-center space-y-4 py-4 text-gray-900 dark:text-white font-medium">
          {navItems.map((section) => (
            <li
              key={section}
              className="cursor-pointer hover:text-blue-500 text-lg"
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
