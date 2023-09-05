import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="navbutton">
          Home
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/research" className="navbutton">
            Research
          </Link>
          <Link to="/cv" className="navbutton">
            CV
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden pt-4">
          <Link
            to="/research"
            onClick={() => setIsOpen(false)}
            className="block w-full mb-2 navbutton"
          >
            Research
          </Link>
          <Link
            to="/cv"
            onClick={() => setIsOpen(false)}
            className="block w-full navbutton"
          >
            CV
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
