import React from "react";

function NoFood() {
  return (
    <div className="bg-white border-2 border-gray-700 rounded-xl text-center md:h-full md:w-full">
      <p className="text-2xl font-medium py-2 my-4">
        No foods added please add some foods...
      </p>
      <img
        className="w-[400px]  mx-auto"
        src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-concept-3428212-2902554.png"
        alt="no food img"
      />
    </div>
  );
}

export default NoFood;
