import Typewriter from "../Typewriter";
import Intro from "./Intro";
import Socials from "./Socials";

import anim from "./Selected-work/training_evolution.gif";
import anim2 from "./Selected-work/comp_22.gif";
import anim3 from "./Selected-work/cellTrajectory.gif";

const anims = [anim, anim2, anim3];
const imgTitles = [
  "DNN Learning to Simulate Open Probability of Ion-channels ",
  "Finding Cell Fate Trajectory",
  "Highlighting intermediate cell states required to reached specific terminal cell state",
];

function Home() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col md:grid md:grid-cols-12 md:items-center pt-3 md:py-[3rem]   ">
        <div className="col-span-12 md:col-span-4">
          <Socials />
        </div>
        <div className="col-span-12 md:col-span-8 text-base md:text-xl">
          <Typewriter targetText="Hey I am Abel" speed={10} />
          {Intro}
        </div>
      </div>
      <div>
        <h1 className="font-[500] p-4">Selected Works</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-around text-sm">
            {anims.map((src, index) => (
              <div
                key={index}
                className="space-y-2 border border-[#d4d4d4] bg-[#fefefe] shadow h-[20rem] rounded-md"
              >
                <img src={src} className="mx-auto h-[15rem]" />

                <p className="text-center px-4"> {imgTitles[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
