import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleStories } from "../features/science/scienceSlice";

const Cards = ({ story }) => {
  const dispatch = useDispatch()
  // console.log(story,8)
  // const { Title, Status } = story; // Ensure these properties match your data
  // console.log(story);

//   const handleClick = (id) => {
// console.log(id)
//     // dispatch(getSingleStories(s));
//   }

  return (
    // <div id="cardBg">
    //   <div
    //     className="shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full rounded-lg font-[sans-serif] overflow-hidden "
    //     id="bg"
    //   >
    //     <div className="min-h-[245px] ">
    //       {/* <img
    //         src={` https://ik.imagekit.io/dev24/${
    //           story?.Image ? story.Image[0] : "loading"
    //         }`}
    //         alt={Title}
    //         className="w-full rounded-lg"
    //       /> */}
    //     </div>
    //     <div className="p-6 text-center">
    //       <h3 className="text-xl font-bold text-white">{story?.Title}</h3>
    //       <button
    //         type="button"
    //         className="mt-6 px-5 py-2.5 w-full rounded-full text-blue-500 bg-white text-sm tracking-wider font-semibold border-none outline-none"
    //       >
    //         {story?.Status}
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div class="p-4 ">

        <div
          class=" border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative w-full">
          <div class=" h-[300px] w-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIhDDI18rtiKSomHaoZJqAqU-9OxtwZLrAQ&s" alt="sunglass1"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-white">{story?.Title}</h3>
          
       <Link to={"/screen2"}>
       <button onClick= {() => dispatch(getSingleStories(story?._id))} className={story?.Status==="New"?"bg-green-600 text-white rounded-full px-4 py-2 mt-4" :story?.Status==="Completed"?"bg-cyan-400 text-white rounded-full px-4 py-2 mt-4":"bg-yellow-400 text-white rounded-full px-4 py-2 mt-4"} >{story?.Status}</button>
       </Link>
   
          </div>
        </div>
        </div>
  );
};

export default Cards;
