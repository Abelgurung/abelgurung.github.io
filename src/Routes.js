import { Routes, Route } from "react-router-dom";

import ResearchPage from "./components/Research-page/Research";
import Home from "./components/Main-page/Home";
import CVPage from "./components/cv-page/CV";
import Project1 from "./components/Research-page/2023-project-1/example";

import Undergrad_resources from "./components/resources/undergrad/undergradResources";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/transition_matrix" element={<Project1 />} />
      <Route path="/undergrad_resources" element={<Undergrad_resources />} />
    </Routes>
  );
};

export default AppRoutes;
