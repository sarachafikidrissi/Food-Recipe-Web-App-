// import React, { useContext} from "react";
import { assets } from "../assets";
import { GoArrowRight } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/contextProvider";

const Home = () => {

  const navigate = useNavigate();
  const {mealCat, setMealCat} = useContext(MyContext)

  const [latestRecipes, setLatestRecipes] = useState([]);

  // const {MealsByCateg, setMealsByCateg} = useContext();

  useEffect(() => {
    const fetchLatestRecipes = async () => {
      let response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      let data = await response.json();
      if (data.categories) {
        setLatestRecipes(data.categories);
      }
    };
    fetchLatestRecipes();
  }, []);



  return (
    <>
      {/* hero section */}
      <div className=" w-[80vw] mx-auto mt-5 sm:h-[60vh] sm:flex ">
        <div className="sm:w-[60%] w-[100%] h-full">
          <img
            src={assets.heroImg}
            alt=""
            className="w-full h-full rounded-s-md sm:object-conver"
          />
        </div>

        <div className="bg-[#e4f1ff] sm:w-[40%] w-[100%] sm:px-10 sm:py-20 flex flex-col gap-y-4 pt-10 pb-10 px-10 rounded-e-md relative">
          <h1 className="font-extrabold font-mono text-5xl">
            Mighty Super Cheesecake
          </h1>
          <p className=" text-xl sm:w-[80%]">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! no one can deny its simple decadence.
          </p>
          <GoArrowRight className="bg-white w-10 h-10  rounded-full text-red-400 hover:text-white hover:bg-red-400 cursor-pointer absolute sm:bottom-10 sm:right-10 translate-x-[50%] right-[50%] bottom-0 animate-bounce" />
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#ffd8ca]  mt-5 flex flex-col items-center py-10 gap-y-4">
        <h1 className="font-semibold sm:text-8xl sm:w-[40%] text-center">
          Deliciousness to your inbox
        </h1>
        <p className="text-3xl sm:w-[30%] text-center">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <div className="relative sm:w-[40%]  w-[90%]">
          <input
            type="text"
            className="w-full p-6 rounded-sm focus:outline-none"
          />
          <button className="bg-orange-600 text-white h-[90%] px-10 py-5 rounded-e-md absolute right-1 top-[50%] translate-y-[-50%] animate-pulse hover:animate-none">
            Join
          </button>
        </div>
        <span className="font-extralight text-center">
          By joining our newsletter you agree to our{" "}
          <span className="font-extralight hover:text-orange-600  cursor-pointer  border-b-[1px] border-orange-600">
            Terms and Conditions
          </span>
        </span>
      </div>

      {/* Categories Section */}
      <div className=" w-[80vw] mt-5 mx-auto  py-5">
        <h1 className="font-bold font-mono text-4xl pb-5 text-center sm:text-left">Categories</h1>
        {/* <div className="flex flex-wrap  gap-y-5 gap-x-3">
          <div className="w-[24%] h-[50%] flex flex-col items-center gap-y-3 cursor-pointer">
            <img
            onClick={() => {navigate('./recipes')}}
              src={assets.heroImg}
              alt=""
              className="w-full h-full object-cover rounded-md hover:scale-105 ease-in-out duration-300"
            />
            <h1 className="font-bold text-xl w-[80%]  text-center ">
              Description
            </h1>
          </div>
        </div> */}

        <div className="flex flex-wrap  gap-y-5 gap-x-3">
        
          {latestRecipes.map((e, i) => (
            ((e.strCategory !== "Goat") && (e.strCategory !== "Breakfast")) &&
              <div
                key={i}
                className="sm:w-[24%] w-100 h-[50%] flex flex-col items-center gap-y-3 cursor-pointer"
              >
                <img
                  onClick={() => {
                    setMealCat(e.strCategory)
                    navigate(`/${e.strCategory}`)
                  }}
                  src={e.strCategoryThumb}
                  alt=""
                  className="w-full h-full object-cover rounded-md hover:scale-125 ease-in-out duration-300"
                />
                <h1 className="font-bold text-xl w-[80%]  text-center ">
                  {e.strCategory}
                </h1>
              </div>
            
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              navigate("./recipes");
            }}
            className="border-2 border-black py-3 px-10 rounded-md font-medium text-xl hover:bg-black hover:text-white"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
