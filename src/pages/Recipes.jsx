import React, { useContext } from "react";
import { IoKeyOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/contextProvider";

const Recipes = () => {
  const navigate = useNavigate()
  // const [recipe, setRecipe] = useState([]);
  const {recipe, setRecipe} = useContext(MyContext);


  const [searchText, setSearchText] = useState(null);

  let ingName = searchText;


  
  useEffect(() => {
    
    let response = undefined
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
        setRecipe(data.meals);
      };
      fetchRecipes();

  }, [ingName, setRecipe]);



  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[90%] ">
          <h1 className="font-medium text-3xl ">Recipes</h1>
          <div className="relative w-[100%] mt-4 sm:border-none border-[2px]">
            <IoKeyOutline className="sm:text-5xl  text-3xl absolute left-1 top-[50%] translate-y-[-50%]" />
            <input
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              type="text"
              className="w-full   p-6 rounded-md focus:outline-none sm:shadow-2xl  sm:ps-20 ps-10"
              placeholder="Keywords ..."
            />
            <button
              className="bg-orange-600 text-white h-[90%] sm:w-[20%] w-[30%] sm:px-10 sm:py-5 rounded-e-md absolute right-1 top-[50%] translate-y-[-50%]"
            >
              Search By Ingredient
            </button>
          </div>

          <div className="flex sm:justify-normal justify-center flex-wrap  gap-y-5 gap-x-3 mt-10">

            {recipe && recipe.map((e, i) => {
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
            })
          } 
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
