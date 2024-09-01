import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { MyContext } from "../context/contextProvider";
import { FaRegCircle } from "react-icons/fa";


const MealRecipe = () => {
  const { recipe } = useContext(MyContext);
  const { mealName } = useParams();
  let ingredients = []
  let mesures = []


  const meal = recipe.find((e) => e.strMeal === mealName);


let propertyName = Object.keys(meal)

 let ingStartWith = propertyName.filter(e => e.startsWith("strIngredient"))
 let mesStartWith = propertyName.filter(e => e.startsWith("strMeasure"))

 let instructions = meal["strInstructions"]
let steps = instructions.split(".").filter(e => e)








 ingStartWith.forEach(e => {
  if(meal[e] !== " " && meal[e] !== "" &&  meal[e] !== null ){
    ingredients.push(meal[e])
  }
 })
 console.log(ingredients);

 mesStartWith.forEach(e => {
  if(meal[e] !== " " && meal[e] !== "" && meal[e] !== null ){
    mesures.push(meal[e])
  }
 })







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

        <div className="w-full h-[20%]">
          <img src={meal.strMealThumb} alt="" className="w-full h-full rounded-2xl" />
        </div>
        {/* Ingredients / Instructions */}
        <div className="flex justify-between">
          <div className="w-[40%] pt-4 flex flex-col gap-y-5">
              {/* Ingredients */}

              <h1 className=" text-3xl font-bold font-mono">Ingredients</h1>
              <div className="flex flex-col gap-y-2">
              {
                ingredients.map((e, i) => {
                  return(
                    
                    <span className="text-2xl flex items-center gap-x-3"> <FaRegCircle /> {mesures[i]} {e}</span>
                  )
                })
              }

              </div>
          </div>

          <div className="w-[55%]   h-full  pt-4 flex flex-col gap-y-5">
            {/* Instructuctions */}
            <h1 className=" text-3xl font-bold font-mono">Instructions</h1>

            {
              steps.map((e, i) => {

                return(

                    <div className="flex gap-x-4 items-center ">
                    <div className="w-[30px] h-[30px] bg-red-300  flex-shrink-0 flex-grow-0 rounded-full flex items-center justify-center font-bold">{i+1}</div>
                    <span className="text-2xl">{e}</span>
                    </div>
                  

                  
                )
              })
            }
          </div>


        </div>

      </div>
    </div>
  );
};

export default MealRecipe;
