import React from "react";

const BigCards = ({title}) => {
  return (
    <div  >
      <div
        id="qqq"
        className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 px-3 max-w-sm  rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
      >
        <div className="flex flex-col justify-start gap-2 px-3">
          <h3 className="text-2xl text-blue-300 font-bold">
           {title}
            <span className="text-sm text-white ">(Noun)</span>
          </h3>
          <p className="text-sm text-gray-400 font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus dolores, quibusdam temporibus sint veniam repellendus .
          </p>
        </div>
        <div className="min-h-[300px]">
          <img src="https://st2.depositphotos.com/2309453/11593/i/950/depositphotos_115938586-stock-photo-young-father-teaching-his-little.jpg" className="w-full my-2 rounded-md h-80 " />
        </div>
        <div className="px-2">
          <div className="px-2">
            <h3 className="text-xl text-white font-bold">
              <span className="text-green-700">Synonyms:</span>  Lorem ipsum dolor, sit  adipisicing elit.
            </h3>
            <h3 className="text-xl text-white font-bold">
              <span className="text-pink-600">Antonyms:</span>  Lorem ipsum dolor, sit  adipisicing elit.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCards;
