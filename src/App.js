import { HashRouter as Router } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import AppRoutes from "./Routes";

function App() {
  return (
    <Router>
      <div className="min-h-screen maincss">
        <div className="w-full max-w-7xl mx-auto space-y-[2rem]">
          <Navbar />
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
