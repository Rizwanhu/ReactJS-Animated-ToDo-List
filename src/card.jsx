import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"


function card({data,referance}) {
  return (
    <div >
      <motion.div
       drag
        dragConstraints={referance} 
        whileDrag={{scale:1.1}}
        dragElastic={0.1}
        dragTransition={{bounceStiffness:100 , bounceDamping:30}}
         className=' relative w-48 h-60 bg-zinc-900/80 rounded-[35px] px-3 py-5 text-white overflow-hidden'>
      <span className=''>

      <FaRegFileLines  />
      </span>
      <p className='pt-3 text-sm font-semibold leading-tight '>{data.description}</p>
      
        <div className=' absolute inset-x-0 bottom-0 '>
        <div className='   pb-3 h-10 px-6 py-1 flex items-center justify-between text-sm'>

        <p>{data.filesize}</p>
        <span className=' flex-shrink-0  w-6 h-6 rounded-full bg-zinc-600 p-[4.6px] justify-items-center items-center justify-center text-center'>
            {data.close === true ? <IoCloseCircleOutline className='text-center' />  : <IoDownloadOutline className='text-center'/> }
        
        </span>
        </div>
        {data.tag.isopen===true ?         <div className={`font-semibold text-sm w-full ${data.tag.color==="green" ? "bg-green-600" : "bg-sky-600"} h-6 py-4 tag  flex items-center justify-center `}>
            {data.tag.title}
        </div> : null }


        </div>
    </motion.div>
      </div>
  )
}

export default card
