import jsData from "./research-page-data";
import { NavLink, Link } from "react-router-dom";
import Typewriter from "../Typewriter";

function Research() {
  return (
    <div>
      <div className="space-y-3  flex flex-col items-center ">
        {jsData.map((proj, index) => (
          <div className="researchcontainter " key={proj.id}>
            {/* <Link to={proj.path}> */}
            <p className="seriftitle m-5 md:m-12">{proj.title}</p>
            <img src={proj.image} className="w-[30rem] md:w-[30rem] p-2" />
            {/* </Link> */}
            <p className="m-5 md:m-12"> {proj.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Research;

// function Research() {
//   return <div className="flex justify-center"> Work in progress :)</div>;
// }

// export default Research;
