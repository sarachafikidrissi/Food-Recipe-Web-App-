import { createContext,   useEffect,   useState } from "react";

export const MyContext = createContext()


export const MyProvide = ({children}) => {


    const [recipe, setRecipe ]= useState([]) 

    const [mealCat, setMealCat] = useState("")
    const [MealsByCateg, setMealsByCateg] = useState([]);


     useEffect(() => {
    const fetchCategories = async () => {
      let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCat}`
      );
      let data = await response.json();
      if(data){
          setMealsByCateg(data)
      }
      
    };
    fetchCategories();
  }, [mealCat]);

    



    const all = { recipe, setRecipe, mealCat, setMealCat, MealsByCateg, setMealsByCateg, MealsByCateg, setMealsByCateg }

    return (
        <MyContext.Provider value={all}>{children}</MyContext.Provider>
    )

}
