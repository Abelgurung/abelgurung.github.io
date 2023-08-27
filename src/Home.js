import React, { useState, useEffect } from "react";

function App() {
  const targetText = "Hello World";
  const [currentText, setCurrentText] = useState("");
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (currentText === targetText) return;

    let nextCharIndex = currentText.length;
    let nextChar = targetText[nextCharIndex];
    let low = 32; // ASCII for space
    let high = 126; // ASCII for '~'

    const timer = setInterval(() => {
      // Perform binary search to find the next character
      let mid = Math.floor((low + high) / 2);
      let charToTry = String.fromCharCode(mid);

      // Update the displayed text with the trial character
      setDisplayText(currentText + charToTry);

      if (charToTry < nextChar) {
        low = mid + 1;
      } else if (charToTry > nextChar) {
        high = mid - 1;
      } else {
        // We found the next character!
        setCurrentText((prev) => prev + charToTry);
        clearInterval(timer);
      }
    }, 8);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, [currentText, targetText]);

  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
}

export default App;
