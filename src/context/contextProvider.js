import { createContext,  useEffect, useState } from "react";

export const MyContext = createContext()


export const MyProvide = ({children}) => {


    // const [latestRecipes, setLatestRecipes ]= useState() 


    // useEffect(() => {
    //     const fetchLatestRecipes = async () => {
    //         let response = await fetch('https://restcountries.com/v3.1/all')
    //         let data = await response.json()
    //         console.log(data);
            
    //         setLatestRecipes(data)



    //     }
    //     fetchLatestRecipes()
    // }, [])


    const all = { }

    return (
        <MyContext.Provider value={all}>{children}</MyContext.Provider>
    )

}
