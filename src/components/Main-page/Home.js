import Typewriter from "./Typewriter";
import Intro from "./Intro";
import Socials from "./Socials";

function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col md:grid md:grid-cols-12 md:items-center pt-4 md:p-1">
        <div className="col-span-12 md:col-span-4">
          <Socials />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Typewriter targetText="Hey I am Abel" speed={8} />
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default Home;
