import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black text-white shadow-md z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}

        <a
          href="#home"
          className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          Mohit Raj
        </a>

        {/* Navigation Links */}

        <ul className="flex gap-6 text-sm font-medium">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#achievements" className="hover:text-cyan-400 transition">
              Achievements
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;