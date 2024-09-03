import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";
import { CiUnread } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../features/science/scienceSlice";

const Group = ({ value }) => {
  const data = value;
  const { stories, isLoading } = useSelector((state) => state.science);
  const dispatch = useDispatch();

  const filterDataNew = stories.filter((ex) => ex?.Status === "New");
  const filterDataPro = stories.filter((ex) => ex?.Status === "In Progress");
  const filterDataComp = stories.filter((ex) => ex?.Status === "Completed");

  console.log(stories);

  useEffect(() => {
    dispatch(getStories());
  }, []);

  console.log(value);

  // Unread
  // console.log(value,7)
  // const [dataa, setDataa] = useState([]);
  // const [filteredStories, setFilteredStories] = useState([]);

  // // console.log(filteredStories,8)
  // // console.log(filteredStories)
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://mxpertztestapi.onrender.com/api/adventure"
  //     );
  //     const data = await response.json();
  //      setDataa(data);
  //     // console.log("Fetched data:", data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // const filterStories = (New) => {
  //   const actualdata= dataa.filter((item) => item?.status === value);
  //   console.log(actualdata)
  //   // setFilteredStories(actualdata)
  // };
  // filterStories("New")

  // useEffect(() => {
  //   fetchData();
  // }, []); // Fetch data once on component mount

  // // useEffect(() => {
  // //   console.log("Current filter value:", value); // Log the filter value
  // //   if (dataa?.length > 0) {
  // //     setFilteredStories(() => {
  // //       switch (value) {
  // //         case "New":
  // //           return filterStories("New");
  // //         case "In Progress":
  // //           return filterStories("In Progress");
  // //         case "Completed":
  // //           return filterStories("Completed");
  // //         default:
  // //           return dataa;
  // //       }
  // //     });
  // //   }
  // // }, [dataa, value]); // Recompute filtered stories when dataa or value changes

  return (
    <>
      <div className="relative right-12 top-10 w-full ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1A163D"
            fillOpacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,176C1120,171,1280,85,1360,42.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div id="cardBg" className="">
          <div className="">
            {data == "New" ? (
              <>
                <div className="w-full grid lg:grid-cols-3">
                  {filterDataNew.map((story) => (
                    <Cards key={story._id} story={story} />
                  ))}
                </div>
              </>
            ) : (
              <>
                {data == "In Progress" ? (
                  <>
                    <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 ">
                      {filterDataPro.map((story) => (
                        <Cards key={story._id} story={story} />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {data == "Completed" ? (
                      <>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                          {filterDataComp.map((story) => (
                            <Cards key={story._id} story={story} />
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
                          {stories.map((story) => (
                            <Cards key={story._id} story={story} />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <ul className="font-[sans-serif] flex justify-between mx-auto w-full rounded">
            <li
              id="text"
              className="py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-white min-w-[10px]"
            >
              <FaAngleLeft className="text-blue-500" /> Previous
            </li>
            <li
              id="text"
              className="py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold min-w-[110px]"
            >
              <Link to={"/screen2"}>
                Next <FaAngleRight className="text-blue-500" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Group;
