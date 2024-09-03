import React, { useState } from "react";
import Group from "./Group";

const HeroSec = () => {
  const [key, setKey] = useState();
  // console.log(key) // Initialize to an empty string

  return (
    <div>
      <div className="text-5xl font-bold mt-5 mb-3 text-white text-center">
        Science Fiction Stories
      </div>
      <div className="font-[sans-serif] space-x-12 space-y-4 text-center">
        <button
          value="New"
          onClick={(e) => setKey(e.target.value)}
          type="button"
          className="px-16 py-2.5 rounded-full text-white text-base tracking-wider font-medium border border-current outline-none hover:bg-blue-800 bg-blue-700"
        >
          New
        </button>
        <button
          value="In Progress"
          onClick={(e) => setKey(e.target.value)}
          type="button"
          className="px-16 py-2.5 rounded-full text-white text-base tracking-wider font-medium border border-current outline-none bg-yellow-400"
        >
          In Progress
        </button>
        <button
          value="Completed"
          onClick={(e) => setKey(e.target.value)}
          type="button"
          className="px-16 py-2.5 rounded-full text-white text-base tracking-wider font-medium border border-current outline-none bg-green-400"
        >
          Completed
        </button>
        <button
          type="button"
          onClick={() => setKey("")} // Clear the filter
          className="px-16 py-2.5 rounded-full text-white text-base tracking-wider font-medium border border-current outline-none bg-orange-700"
        >
          Clear All
        </button>
        <Group value={key} />
      </div>
    </div>
  );
};

export default HeroSec;
