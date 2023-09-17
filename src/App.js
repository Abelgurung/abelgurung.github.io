import { HashRouter as Router } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import AppRoutes from "./Routes";

function App() {
  return (
    <Router>
      <div className="min-h-screen maincss">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
