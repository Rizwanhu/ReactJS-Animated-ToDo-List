import React from 'react';
import Background from './background';
import Foreground from './foreground';
function App() {
  return (
    
    <div className='relative w-full h-screen bg-zinc-800 '>
    {/* <div className=' py-10  w-full flex justify-center text-zinc-400 font-semibold text-md absolute top-[6%] text-l +translate-x-[0.5%]'>DOCUMENTS</div>
<h1 className="absolute top-[40%] left-1/2 -translate-x-[47%]  text-[13vw] leading-none tracking-tighter font-semibold text-zinc-500 tracking-[.01em]">Docs.</h1> */}

    <Background />
    <Foreground />
    </div>

  )
}

export default App
