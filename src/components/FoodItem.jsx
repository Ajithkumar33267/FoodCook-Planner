import React, { useState } from "react";
import { ImBin } from "react-icons/im";
import { TiTick } from "react-icons/ti";

function FoodItem(props) {
  const [isDone, setDone] = useState(false);

  function taskCompleted() {
    return setDone(!isDone);
  }

  return (
    <div>
      <div className="bg-blue-600 rounded my-4 h-[50px] w-[300px] md:w-[400px] flex items-center justify-between ">
        <h2
          className="mx-8 text-white capitalize text-xl"
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {props.text}
        </h2>
        <div className=" mx-8">
          <button
            title="Done"
            onClick={taskCompleted}
            className="text-green-500 active:bg-gray-800 p-2 rounded-full text-2xl font-bold duration hover:bg-gray-600"
          >
            <TiTick bold="true" size={22} />
          </button>
          <button
            title="delete"
            onClick={() => props.onClick(props.id)}
            className="mx-2 active:bg-gray-800 text-white duration-100 p-2 rounded-full hover:bg-gray-600"
          >
            <ImBin size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
