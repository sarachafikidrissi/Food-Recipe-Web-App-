import React from "react";
import { useParams } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";

const MealRecipe = () => {
  const { mealName } = useParams();
  console.log(mealName);
  return (
    <div className="flex justify-center mt-5">
      <div className=" w-[80%] flex flex-col gap-y-3">
        <div className="head border-b">
        <h1 className="font-extrabold text-7xl ">{mealName}</h1>
        <span className="flex gap-x-3 items-center text-xl text-gray-400"><TbCategoryPlus className="text-xl text-orange-600" /> seafood</span>
        


        </div>
        <p>One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!

</p>
      </div>
    </div>
  );
};

export default MealRecipe;
