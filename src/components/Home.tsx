import React from 'react';
import {motion} from 'framer-motion'
const Home:React.FC = () => {
  return (
    <div
   
     className="min-h-screen  flex justify-center relative 
 bg-cover bg-center text-center relative bg-[url('/hero.png')] ">
      <motion.div className='my-40 ' initial={{y:100,opacity:0}}
    animate={{y:0,opacity:1}} 
    transition={{duration:0.8,ease:"easeOut"}} >
        <p className="text-6xl font-bold">Transform Your Photos into</p>
        <p className="text-6xl font-bold mt-4">Ghibli Art with Artify. AI</p>
       <div className='py-5'>
         <p className='text-lg font-normal'>Experience the magic of Studio Ghibli's artistic style with Artify's </p>
        <p className='text-lg font-normal'>image generator tool.</p>
       </div>
         <button className='text-xl font-bold bg-orange-300 hover:bg-orange-400 px-4 py-2 rounded-md'>Try Artify AI</button>
      </motion.div>
    
    </div>
  );
};

export default Home;
