import React from "react";
import { GrSearchAdvanced } from "react-icons/gr";
import { GiBrain } from "react-icons/gi";
import magnifier from "../assets/magnifierWithEarth image.png";
import advanture from "../assets/advanture image.png";
import brain from "../assets/brain image.png";
import Navbar from "./Navbar2";
import { useSelector } from "react-redux";

const HeroSec = () => {
  const customStyles = {
    fontWidth: "20px",
  };

  const { store, isLoading } = useSelector((state) => state.science);

  if (isLoading) {
    return <h1 className="text-3xl text-center">Loading</h1>;
  }

  return (
    <>
      <Navbar />
      <div id="par">
        <div className=" flex items-center w-full justify-evenly font-[sans-serif] -space-x-96 space-y-9 text-center">
          <button
          onClick={()=>location.reload()}
            id="buttonn"
            type="button"
            class="px-5 mt-8 flex  py-2.5 rounded-full text-gray-300 text-sm tracking-wider font-semibold border-current outline-none  hover:bg-gradient-to-tl from-purple-900 to-blue-700"
          >
            <img src={magnifier} alt="" className="w-7" />
            <p className="mt-1.5 text-center">Word Explorer</p>
          </button>
          <button
            onClick={()=>location.reload()}
            id="btn"
            type="button"
            class="px-5 flex w-50 py-2.5  rounded-full text-gray-300 text-sm tracking-wider font-semibold border-current outline-none "
          >
            <img src={advanture} alt="" className="w-7 " />
            <p className="mt-1.5 text-center"> Story Adventures</p>
          </button>
          <button
            onClick={()=>location.reload()}
            id="button"
            type="button"
            class="px-5 flex  py-2.5 rounded-full text-gray-300 text-sm tracking-wider font-semibold border-current outline-none hover:bg-gradient-to-tl from-purple-900 to-blue-700"
          >
            <img src={brain} alt="" className="w-6" />
            <p className="mt-0.5 px-1 text-center">Brain Games</p>
          </button>
        </div>
        <p
          id="para"
          className="text-white text-center text-sm font-semibold tracking-"
        >
          Drag Pictures to the matching Words, light up corrent pairs, shake for
          a retry
        </p>
      </div>
    </>
  );
};

export default HeroSec;
