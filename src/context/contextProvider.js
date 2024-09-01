import { createContext,   useState } from "react";

export const MyContext = createContext()


export const MyProvide = ({children}) => {


    const [recipe, setRecipe ]= useState([]) 
    



    const all = { recipe, setRecipe }

    return (
        <MyContext.Provider value={all}>{children}</MyContext.Provider>
    )

}
