import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ResearchPage from "./Research";
import Home from "./Home";
// import CVPage from "./CVPage"; // Uncomment when you have this component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1c1b20] font-plex text-[#e0e0e0]">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/cv" element={<ResearchPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
