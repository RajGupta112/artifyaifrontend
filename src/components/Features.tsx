import React from 'react'
import { FaEye } from "react-icons/fa";
const Features = () => {
  return (
    <div className='pt-6 mx-7'>
      <h1 className='text-2xl text-center text-black font-bold  '>Artify AI Features</h1>
      <div className='flex gap-5 '>
       <div className='flex flex-col rounded-2xl border-2 p-8 bg-gray-100 '>
       <h1><FaEye /></h1>
       <h3>High Accuracy Ghibli Art Generation</h3>
       <p> Our advanced Artify alogirthims ensure your photos 
        maintain their essence while transforming into 
        authentic Studio Ghibli Art style. Every Ghibli imagepreserves the original character while adopting the distinctive Ghibli aesthetic.
       </p>
       </div>
      <div className='flex flex-col rounded-2xl border-2 p-8 bg-gray-100 '>
      <FaEye className='rounded-full text-4xl bg-amber-100 p-2' />
       <h3>High Accuracy Ghibli Art Generation</h3>
       <p> Our advanced Artify alogirthims ensure your photos 
        maintain their essence while transforming into 
        authentic Studio Ghibli Art style. Every Ghibli imagepreserves the original character while adopting the distinctive Ghibli aesthetic.
       </p>
       </div>
       <div className='flex flex-col rounded-2xl border-2 p-8 bg-gray-100 '>
       <h1><FaEye /></h1>
       <h3>High Accuracy Ghibli Art Generation</h3>
       <p> Our advanced Artify alogirthims ensure your photos 
        maintain their essence while transforming into 
        authentic Studio Ghibli Art style. Every Ghibli imagepreserves the original character while adopting the distinctive Ghibli aesthetic.
       </p>
       </div>
      </div>
    </div>
  )
}

export default Features
