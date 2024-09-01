import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";
import PlaceOrder from "./pages/PlaceOrder";
import Cart from "./pages/Cart";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { MyProvide } from "./context/contextProvider";
import MealRecipe from "./pages/Product";

const App = () => {
  return (
    <div className=" sm-px-[5vw] md-px-[7vw] lg-px-[9vw]"> {/*py-6 px-4*/}
      <Navbar />
      <MyProvide>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:mealName" element={<MealRecipe />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </MyProvide>
      <Footer />
    </div>
  );
};

export default App;
