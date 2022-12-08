import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InputField(props) {
  const [food, setFood] = useState("");
  const [isEmpty, setEmpty] = useState(null);

  const enterFood = (e) => {
    const value = e.target.value;
    setFood(value);
  };

  const nofity = () => {
    toast.error("Please Fill This Field! ", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleClick = () => {
    if (food.length === 0) {
      setEmpty(false);
      nofity();
    } else {
      props.onClick(food);
      setFood("");
    }
  };

  return (
    <div className="w-[400px] md:w-[600px] md:mx-auto ml-44 h-[150px] rounded-xl bg-[#0652DD]">
      {!isEmpty && (
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      )}
      <h1 className="w-full text-2xl md:flex justify-center items-center md:text-4xl text-center  text-white tracking-wide uppercase font-semibold p-4">
        Food Cook Planner
      </h1>
      <div className=" flex items-center justify-center gap-8">
        <input
          autoFocus
          onChange={enterFood}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
          className="px-4 md:w-80 h-10 border focus:border-gray-800 outline-none  rounded-sm"
          type="text"
          placeholder="Enter Food"
          value={food}
        />
        <button
          title="Add Food"
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-600 w-18 flex justify-between items-center p-2 rounded-lg text-white"
        >
          <AiOutlinePlus size={20} />
          Add
        </button>
      </div>
    </div>
  );
}

export default InputField;
