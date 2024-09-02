import React, { useContext } from 'react'

import { MyContext } from '../context/contextProvider'
import { useNavigate } from 'react-router-dom';

const CategoryMeals = () => {

  const navigate = useNavigate()
    const {MealsByCateg, setMealsByCateg} = useContext(MyContext);
    // console.log(MealsByCateg["meals"][0].strMeal);
    // MealsByCateg.map(e => console.log(e))

  return (
    <div className="flex  justify-center  pt-5">
      <div className="w-[90%] flex flex-wrap gap-x-4 justify-center pt-2 gap-y-4 ">
      {
        MealsByCateg["meals"].map((e, i) => (
          <div
                key={i}
                className="sm:w-[24%] w-100  flex flex-col items-center gap-y-3 cursor-pointer "
              >
                <img
                onClick={() => {navigate(`./recipes/${e.strMeal}`)}}
                  src={e.strMealThumb}
                  alt=""
                  className="w-full h-full object-cover rounded-md hover:scale-105 ease-in-out duration-300"
                />
                <div className='h-[10%]'>
                <h1 className="font-bold  w-[80%]  text-center ">
                  {e.strMeal}
                </h1>
                </div>
                
            </div>
        ))
        
      }
      </div>
    </div>
  )
}

export default CategoryMeals

