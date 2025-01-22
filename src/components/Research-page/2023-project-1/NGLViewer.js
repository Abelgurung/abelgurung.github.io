// NGLViewer.js
import React, { useEffect, useRef, useState } from "react";
import { Stage } from "ngl";

function NGLViewer({ selectedPDB }) {
  const viewerRef = useRef(null);
  const stageRef = useRef(null);
  const [showBallAndStick, setShowBallAndStick] = useState(false);

  useEffect(() => {
    if (!selectedPDB) {
      if (stageRef.current) {
        stageRef.current.removeAllComponents();
      }
      return;
    }

    if (!stageRef.current) {
      stageRef.current = new Stage(viewerRef.current, {
        backgroundColor: "white",
      });
    }

    stageRef.current.removeAllComponents();

    stageRef.current
      .loadFile(`https://files.rcsb.org/download/${selectedPDB}.pdb`, {
        ext: "pdb",
      })
      .then((component) => {
        component.addRepresentation("cartoon", {
          ColorSchema: "spectrum",
          quality: "high",
        });
        const ballAndStick = component.addRepresentation("ball+stick", {
          color: "chainid",
          opacity: 0.5,
        });
        ballAndStick.setVisibility(showBallAndStick);
        stageRef.current.autoView();
      })
      .catch((err) => console.error("Error loading PDB:", err));

    const handleResize = () => {
      stageRef.current.handleResize();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedPDB, showBallAndStick]);

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={viewerRef}
        className="w-full h-[600px] rounded-lg shadow-lg border border-gray-200 relative"
      >
        <button
          onClick={() => setShowBallAndStick(!showBallAndStick)}
          className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 shadow transition-colors duration-200 z-10"
        >
          {showBallAndStick ? "Hide" : "Show"} Ball and Stick
        </button>
        <button
          onClick={() => {
            stageRef.current.autoView();
          }}
          className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition-colors duration-200 z-10"
        >
          Reset View
        </button>
      </div>
    </div>
  );
}

export default NGLViewer;
