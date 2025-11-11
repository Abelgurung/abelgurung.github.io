import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";

function NavLinkWithTypewriter({ to, onClick, className, children, icon }) {
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setKey((prev) => prev + 1); // Reset the typewriter effect
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Extract text from children if it's a string
  const textContent = typeof children === "string" ? children : "";

  return (
    <Link
      to={to}
      onClick={onClick}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <span>{icon} </span>}
      <span style={{ position: "relative", display: "inline-block" }}>
        {/* Invisible text to reserve space */}
        <span style={{ visibility: "hidden" }}>{textContent || children}</span>
        {/* Visible text overlaid */}
        <span style={{ position: "absolute", left: 0, top: 0 }}>
          {isHovered && textContent ? (
            <Typewriter key={key} targetText={textContent} speed={15} />
          ) : (
            <span>{textContent || children}</span>
          )}
        </span>
      </span>
    </Link>
  );
}

export default NavLinkWithTypewriter;
