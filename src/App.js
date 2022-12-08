import { useState } from "react";
import InputField from "./components/InputField";
import FoodItem from "./components/FoodItem";
import NoFood from "./components/NoFood";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [foodItem, setFoodItem] = useState([]);


  const addFood = (foodItem) => {
    toast.success(`${foodItem} added successfully`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setFoodItem((prev) => {
      return [...prev, foodItem]
    })
  }

  const removeFood = (id) => {
    setFoodItem(prev => {
      return prev.filter((food, index) => {
        return index !== id;
      })
    })
  }



  return (
    <div className=" flex relative justify-center items-center w-full select-none h-screen ">

      <div className="p-10 rounded-3xl w-[800px] absolute top-0 flex items-center flex-col justify-center">
        <InputField onClick={addFood} />
        <div className="flex justify-center md:w-[600px] md:mx-auto w-[400px] ml-44 flex-col items-center rounded-xl mt-4  bg-[#2d3436]  h-auto ">
          {foodItem.length > 0 &&
            <h1 className="py-2 text-xl text-white">You have a {foodItem.length} Item(s)</h1>
          }
          {
            foodItem.map((food, index) => (
              <>
                <ToastContainer key={index}
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
                <FoodItem key={index} text={food} id={index} onClick={removeFood} />
              </>
            ))
          }
          {foodItem.length <= 0 && <NoFood />}

        </div>
      </div>
    </div>
  );
}

export default App;
