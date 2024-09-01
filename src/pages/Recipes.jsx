import React from "react";
import { IoKeyOutline } from "react-icons/io5";

const Recipes = () => {
  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="w-[90%] h-[30vh] ">
          <h1 className="font-medium text-3xl ">Recipes</h1>
          <div className="relative w-[100%] mt-4">
          <IoKeyOutline className="text-5xl absolute left-1 top-[50%] translate-y-[-50%]" />
            <input
              type="text w-full"
              className="w-full p-6 rounded-md focus:outline-none shadow-2xl ps-20"
              placeholder="Keywords ..."
            />
            <button className="bg-orange-600 text-white h-[90%] w-[30%] px-10 py-5 rounded-e-md absolute right-1 top-[50%] translate-y-[-50%]">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
