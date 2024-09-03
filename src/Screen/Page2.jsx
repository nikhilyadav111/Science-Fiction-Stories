import React, { useState } from "react";
import HeroSec from "../Components/HeroSec2";
import BigCards from "../Components/BigCards";
import Cards2 from "../Components/Cards2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Page2 = () => {
  const { store, isLoading } = useSelector((state) => state.science);
  const [data , setData] = useState(store)
console.log(data,11)
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }



  return (
    <>
      <HeroSec />
      <div id="abcd" className=" py-4">
        <div className="flex flex-row justify-around  ">
          <BigCards title={data?.Title} />

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-2 ">
            {
              data?.Brainquest
              ?.map((story) => (
                <Cards2 key={story._id} story={story} />
              ))}
            {
              data?.toryadvenure
              ?.map((story) => (
                <Cards2 key={story._id} story={story} />
              ))}
            {
              data?.
              Wordexplore
              ?.map((story) => (
                <Cards2 key={story._id} story={story} />
              ))}
            
            
          </div>
        </div>
        <ul className="font-[sans-serif] flex items-center justify-between mx-auto border-2  border-none rounded w-full mt-4">
          <li
            id="text"
            className="px-5 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-white min-w-[110px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-current mr-3"
              viewBox="0 0 55.753 55.753"
            >
              <path
                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                data-original="#000000"
              />
            </svg>
            <Link to={"/"}>Previous</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page2;
