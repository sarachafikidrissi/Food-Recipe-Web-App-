import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";

import Recipes from "./pages/Recipes";


import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { MyProvide } from "./context/contextProvider";
import MealRecipe from "./pages/MealRecipe";

const App = () => {
  return (
    <div className=" sm-px-[5vw] md-px-[7vw] lg-px-[9vw]"> {/*py-6 px-4*/}
      <Navbar />
      <MyProvide>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:mealName"  element={<MealRecipe />} />


      </Routes>
      </MyProvide>
      <Footer />
    </div>
  );
};

export default App;
