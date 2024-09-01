import React from "react";
import { IoKeyOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate()
  const [recipe, setRecipe] = useState([]);

  const [searchText, setSearchText] = useState(null);

  let ingName = searchText;


  let response = undefined

  useEffect(() => {
    // if (ingName) {
      const fetchRecipes = async () => {
        if(ingName){
          response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingName}`
          );
        }else{
          response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=`
          );
        }
        let data = await response.json();
        console.log(data);
        setRecipe(data.meals);
      };
      fetchRecipes();
    // }
  }, [ingName]);

  console.log(ingName);
  console.log(recipe);

  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[90%]  ">
          <h1 className="font-medium text-3xl ">Recipes</h1>
          <div className="relative w-[100%] mt-4">
            <IoKeyOutline className="text-5xl absolute left-1 top-[50%] translate-y-[-50%]" />
            <input
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              type="text w-full"
              className="w-full p-6 rounded-md focus:outline-none shadow-2xl ps-20"
              placeholder="Keywords ..."
            />
            <button
              className="bg-orange-600 text-white h-[90%] w-[20%] px-10 py-5 rounded-e-md absolute right-1 top-[50%] translate-y-[-50%]"
            >
              Search By Ingredient
            </button>
          </div>

          <div className="flex flex-wrap  gap-y-5 gap-x-3 mt-10">
            {recipe.map((e, i) => {
              return (
                <>
                  <div key={i} className="w-[24%] h-[50%] flex flex-col items-center gap-y-3 cursor-pointer">
                    <img
                    onClick={() => {navigate(`/recipes/${e.strMeal}`)}}
                      src={e.strMealThumb}
                      alt=""
                      className="w-full h-full object-cover rounded-md hover:scale-105 ease-in-out duration-300"
                    />
                    <h1 className="font-bold text-xl w-[80%]  text-center ">
                      {e.strMeal}
                    </h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
