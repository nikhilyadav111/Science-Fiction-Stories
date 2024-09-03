import React from "react";

const Cards2 = ({story}) => {
  console.log(story,4)
  return (
    <div  >
      <div id="aaa" className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] rounded-md p-2 w-48 max-w-sm font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="min-h-[25px]" >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLnbuVFp8WN6-2DnMaRh6zxhndvItjM62Qw&s"
            className="w-full h-48 rounded-md"
          />
        </div>
        <div className="p-1 text-center ">
          <p className="mt-3 text-xs text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Cards2;
