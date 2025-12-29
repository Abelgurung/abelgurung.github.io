import { useState } from "react";
import Typewriter from "../Typewriter";

const Intro = () => {
  const [showToast, setShowToast] = useState(false);

  const copyEmailToClipboard = (e) => {
    e.preventDefault();
    const email = "gurung1@purdue.edu";
    navigator.clipboard.writeText(email).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <div>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-50 text-black px-6 py-3 rounded-lg shadow-2xl z-50 animate-fade-in border border-gray-300">
          Copied to clipboard 📋
        </div>
      )}

      <div className="font-libre text-lg md:text-lg ">
        <Typewriter targetText="Abel Gurung" speed={20} />
      </div>
      <hr className="w-full border-t-2 border-gray-300 mt-3 mb-3" />
      <span className="font-[300]">
        I'm a <span>Computer Science PhD</span> Student at Purdue University. My
        current research focus is development of more efficent{" "}
        <span>pre-training</span> and <span>fine-tuning</span> methods for
        foundational models. My work is currently supported by{" "}
        <a
          href="https://www.xras.org/public/requests/207851-ACCESS-CIS250267"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 debug:underline"
        >
          NSF ACCESS grant
        </a>
        . My undergraduate major was in <span>Mathematics</span> with a minor in
        Computer Science and Biological Sciences.
        <br />
        <br />
        If you would like to collaborate or just chat, feel free to reach out to
        me through{" "}
        <a
          href="mailto:gurung1@purdue.edu"
          className="hover:text-blue-800 debug:underline cursor-pointer"
          onClick={copyEmailToClipboard}
        >
          gurung1@purdue.edu
        </a>
      </span>
    </div>
  );
};

export default Intro;
