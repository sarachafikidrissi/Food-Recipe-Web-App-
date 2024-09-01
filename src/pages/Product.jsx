import React from 'react'
import { useParams } from 'react-router-dom';

const MealRecipe = () => {
  const { mealName } = useParams()
  console.log(mealName);
  return (
    <div>
     hhh
    </div>
  )
}

export default MealRecipe
