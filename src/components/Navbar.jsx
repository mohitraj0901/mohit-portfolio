import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-cyan-400">
          Mohit Raj
        </h1>

        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#achievements" className="hover:text-cyan-400">Achievements</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;