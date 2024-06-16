import React, { useRef } from 'react'
import Card from './card'




function foreground() {
    const data=[
        {
        description:" Lorem ipsum dolor sit amet consectetur adie deleniti is illum? Quod incidunt eius illo accusamus, sapiente quam sunt. Delectus, quas?",
        close: false,
        filesize:"4 KB",
        tag:{isopen:true, title:"Download Now!", color:"green"},
    },
        {
        description:" Lorem ipsum dolor sit amet consecte quam sunt. Delectus, quas?",
        close: true,
        filesize:"9.7 KB",
        tag:{isopen:false, title:"Download Now!", color:"green"},
    },
        {
        description:" Lorem ipsum dolor sit amet c is illum? Quod incidunt eius illo accusamus, sapiente quam sunt. Delectus, quas?",
        close: false,
        filesize:"4 KB",
        tag:{isopen:true, title:"Upload Now!", color:"blue"},
    },
        {
        description:" Loiti is illum? Quod incidunt eius  sapiente quam sunt. Delectus, quas?",
        close: false,
        filesize:"10 KB",
        tag:{isopen:true, title:"Download Now!", color:"green"},
    },
        {
        description:" Lorem ipsum dolsapiente quams, quas?",
        close: true,
        filesize:"2 KB",
        tag:{isopen:false, title:"Download Now!", color:"green"},
    },
    ];

    const ref =useRef(null);


  return (
    <div>
    <div ref={ref} className=' w-full h-screen fixed z-[3] bg-slate-400 left-0 right-0 top-0 bg-transparent flex gap-5 p-3 justify-center pt-[220px] flex-wrap'>
        {data.map((item,index)=>(<Card data={item}  referance = {ref} /> ))}
    </div>
      

    </div>
  )
}

export default foreground
