import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 text-[#9b74f2] border-b border-[#9e9e9e]">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/research" className="">
            Research
          </Link>
          <Link to="/cv" className="">
            CV
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
