import React from 'react'
import { assets } from '../assets'

const About = () => {
  return (
    <div className='flex justify-center mt-5'>
    <div className=' w-[90%] flex flex-col gap-y-5'>
    <h1 className="font-medium text-3xl border-b pb-4">About</h1>

    <h1 className='sm:text-7xl text-2xl font-bold'>We’re a group of foodies who love cooking and the internet</h1>
    <div className='mt-5 '>
      <img src={assets.aboutImg} alt="" className='rounded-md w-full' />
    </div>
    <p className='sm:text-3xl  font-light'>Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk.</p>
   

    </div>

    </div>
  )
}

export default About
