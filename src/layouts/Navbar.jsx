import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets';
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {

const navigate = useNavigate()

const [menu, setMenu] = useState(false)
  return (
    <div className='flex sm:flex-col gap-y-10 items-center justify-between relative z-[999]'>
    <div className=' p-2 flex sm:justify-center justify-between w-full'> {/*flex items-center justify-between w-full*/ }
      <img onClick={() => { navigate("./")}} src={assets.logo} alt="logo" className='sm:w-[300px] w-[100px] ' />
      <CiMenuBurger onClick={() => {setMenu(!menu)}} className='sm:hidden text-2xl'/>
    </div>

    <div className={`links sm:flex align-center justify-center gap-x-10  ${!menu && 'hidden'} ${menu && 'flex flex-col absolute w-full top-12 p-5 gap-y-4 bg-white shadow-2xl rounded-md'} `}>
      <span className=' cursor-pointer text-xl hover:text-orange-600 font-serif' onClick={() => { navigate("/")}}>Home</span>
      <span className=' cursor-pointer text-xl hover:text-orange-600 font-serif' onClick={() => { navigate("/recipes")}}>Recipes</span>
      <span className=' cursor-pointer text-xl hover:text-orange-600 font-serif' onClick={() => { navigate("/about")}}>About</span>
      <span className=' cursor-pointer text-xl hover:text-orange-600 font-serif' onClick={() => { navigate("/contact")}}>Contact Us</span>
    </div>
    </div>
  )
}

export default Navbar
