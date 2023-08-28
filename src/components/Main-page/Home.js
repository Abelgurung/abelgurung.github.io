import Typewriter from "./Typewriter";
import Intro from "./Intro";
import Socials from "./Socials";

import anim from "./Selected-work/training_evolution.gif";
import anim2 from "./Selected-work/comp_22.gif";
import anim3 from "./Selected-work/over-time.gif";

const anims = [anim, anim2, anim3];
const imgTitles = [
  "DNN Learning to Simulate Open Probability of Ion-channels ",
  "Finding Cell Fate Trajectory",
  "Sequenctial Intermediate States to reach specific Target State",
];

function Home() {
  return (
    <div className="space-y-3">
      <div className="flex flex-col md:grid md:grid-cols-12 md:items-center pt-4 md:py-[3rem]">
        <div className="col-span-12 md:col-span-4">
          <Socials />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Typewriter targetText="Hey I am Abel" speed={8} />
          <Intro />
        </div>
      </div>
      <div>
        <h1 className="font-[500] p-4">Seleted Works</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {anims.map((src, index) => (
              <div key={index} className="image-container">
                <img src={src} className="h-[20rem]" />
                <p className="text-center"> {imgTitles[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
