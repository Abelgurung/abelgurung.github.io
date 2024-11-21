import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="navbutton"
          onClick={() => {
            setResourcesOpen(false);
          }}
        >
          🏠 Home
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/research"
            onClick={() => {
              setResourcesOpen(false);
            }}
            className="navbutton"
          >
            🧬 Research
          </Link>
          <Link
            to="/cv"
            className="navbutton"
            onClick={() => {
              setResourcesOpen(false);
            }}
          >
            🧾 CV
          </Link>
          <div className="relative">
            <button
              onClick={() => setResourcesOpen(!isResourcesOpen)}
              className="navbutton"
            >
              📚 Resources
              <i className="fa fa-caret-down ml-2"></i>
            </button>

            {isResourcesOpen && (
              <div className="absolute mt-2 border-gray-200 shadow-md z-10 w-full">
                <Link
                  to="/undergrad_resources"
                  className="text-center navbutton w-full block"
                  onClick={() => {
                    setResourcesOpen(false);
                  }}
                >
                  Undergrad
                </Link>
              </div>
            )}
          </div>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden pt-4 space-y-1">
          <Link
            to="/research"
            onClick={() => {
              setIsOpen(false);
              setResourcesOpen(false);
            }}
            className="block w-full navbutton"
          >
            🧬 Research
          </Link>
          <Link
            to="/cv"
            onClick={() => {
              setIsOpen(false);
              setResourcesOpen(false);
            }}
            className="block w-full navbutton"
          >
            🧾 CV
          </Link>
          <div className="relative">
            <button
              className="w-full navbutton flex justify-between"
              onClick={() => {
                setResourcesOpen(!isResourcesOpen);
              }}
            >
              📚 Resources
              <i className="fa fa-caret-down"></i>
            </button>
            {isResourcesOpen && (
              <div className="mt-2 shadow-md w-full z-10">
                <Link
                  to="/undergrad_resources"
                  onClick={() => {
                    setIsOpen(false);
                    setResourcesOpen(false);
                  }}
                  className="block w-full navbutton"
                >
                  Undergrad
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;