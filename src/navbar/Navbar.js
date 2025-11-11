import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinkWithTypewriter from "./NavLinkWithTypewriter";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <NavLinkWithTypewriter
          to="/"
          className="navbutton"
          onClick={() => {
            setResourcesOpen(false);
          }}
          icon="🏠"
        >
          Home
        </NavLinkWithTypewriter>
        <div className="hidden md:flex space-x-4">
          {/*
          <NavLinkWithTypewriter
            to="/research"
            onClick={() => {
              setResourcesOpen(false);
            }}
            className="navbutton"
            icon="🧬"
          >
            Research
          </NavLinkWithTypewriter>
          */}
          <NavLinkWithTypewriter
            to="/cv"
            className="navbutton"
            onClick={() => {
              setResourcesOpen(false);
            }}
            icon="🧾"
          >
            CV
          </NavLinkWithTypewriter>
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
                <NavLinkWithTypewriter
                  to="/undergrad_resources"
                  className="text-center navbutton w-full block"
                  onClick={() => {
                    setResourcesOpen(false);
                  }}
                >
                  Undergrad
                </NavLinkWithTypewriter>
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
          {/*
          <NavLinkWithTypewriter
            to="/research"
            onClick={() => {
              setIsOpen(false);
              setResourcesOpen(false);
            }}
            className="block w-full navbutton"
            icon="🧬"
          >
            Research
          </NavLinkWithTypewriter>
          */}
          <NavLinkWithTypewriter
            to="/cv"
            onClick={() => {
              setIsOpen(false);
              setResourcesOpen(false);
            }}
            className="block w-full navbutton"
            icon="🧾"
          >
            CV
          </NavLinkWithTypewriter>
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
                <NavLinkWithTypewriter
                  to="/undergrad_resources"
                  onClick={() => {
                    setIsOpen(false);
                    setResourcesOpen(false);
                  }}
                  className="block w-full navbutton"
                >
                  Undergrad
                </NavLinkWithTypewriter>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
