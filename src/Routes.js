import { Routes, Route } from "react-router-dom";

import ResearchPage from "./components/Research-page/Research";
import Home from "./components/Main-page/Home";
import CVPage from "./components/cv-page/CV";
import Project1 from "./components/Research-page/2023-project-1/example";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/project1" element={<Project1 />} />
    </Routes>
  );
};

export default AppRoutes;
