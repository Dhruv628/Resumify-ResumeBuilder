import React from "react";
import { Link, useNavigate } from "react-router-dom";
import resumeimg from "./resume.svg";

const Home = () => {
  const navigate=useNavigate();
  return (
    
    <div className="bg-gray-200 xs:h-[100vh] sm:h-[94vh] md:h-[94vh] lg:h-[93vh] ">
      <div className="   flex justify-center items-center xs:flex-col sm:flex-col md:flex-col lg:flex-row lg:space-x-20 lg:h-[75vh] ">
        <div className= "xs:text-4xl xs:my-6 sm:text-5xl sm:my-10 md:text-5xl md:my-8 lg:text-5xl  font-bold opacity-90 tracking-wider space-y-5">
          <div>
            A <span className=" text-blue-700">Resume</span> that
          </div>
          <div>stands out !</div>
          <div>Make your own</div>
          <div>
            <span>resume</span>. It's{" "}
            <span className=" text-blue-700">free</span>.
          </div>
        </div>
        <img src={resumeimg} alt="" className="xs:h-[20rem] xs:w-[20rem] sm:h-[20rem] sm:w-[20rem] md:h-[20rem] md:w-[20rem] lg:h-[20rem] lg:w-[32rem] mr-10" />
      </div>
      <button onClick={()=>{navigate('/resume')}} className="bg-gray-700 hover:bg-gray-800 sm:rounded-md md:rounded-md lg:rounded-lg m-auto block px-5 py-4 text-lg font-semibold tracking-wide text-white">Get started</button>
      </div>

  );
};

export default Home;
