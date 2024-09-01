import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { MyContext } from "../context/contextProvider";

const MealRecipe = () => {
  const { recipe } = useContext(MyContext);
  const { mealName } = useParams();



  const meal = recipe.find((e) => e.strMeal === mealName);

  return (
    <div className="flex justify-center mt-5">
      <div className=" w-[80%] flex flex-col gap-y-3">
        <h1 className="font-extrabold text-7xl ">{mealName}</h1>
        <div className="head border-b pb-2 flex  gap-x-4">
          <span className="flex gap-x-2 items-center text-xl text-gray-400">
            <TbCategoryPlus className="text-xl text-orange-600" />
            {meal.strCategory}
          </span>
          <span className="flex gap-x-2 items-center text-xl text-gray-400">
            <SlLocationPin className="text-xl text-orange-600" />
            {meal.strArea}
          </span>
        </div>
        <p>
          One thing I learned living in the Canarsie section of Brooklyn, NY was
          how to cook a good Italian meal. Here is a recipe I created after
          having this dish in a restaurant. Enjoy!
        </p>

        <div className="w-full h-[50%]">
          <img src={meal.strMealThumb} alt="" className="w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default MealRecipe;
