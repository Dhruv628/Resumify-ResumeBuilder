import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
 const  navigate=useNavigate();
  return (
    <div className="bg-black text-white ">
      <div className="flex space-x-7 py-3 mx-3">
        <div className="text-xl font-semibold tracking-wider">Resumify</div>
        <div className="hover:text-gray-300 cursor-pointer">
        <button onClick={()=>{navigate("/")}} >
            Home
          </button>
        </div>
        <div className="hover:text-gray-300 cursor-pointer">
          <button onClick={()=>{navigate("/resume")}} >
             Resume
          </button>
        </div>
      </div>
    </div>
  );
}
