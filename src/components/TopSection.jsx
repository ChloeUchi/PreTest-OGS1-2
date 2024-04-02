import React from 'react'

import hamburgerNemu from './nemu-hamburger-white.png'
import CalendarWhite from './icon-calendar-white.png'

function TopSection() {
  return (
    <div className='container '>
        <div className='flex justify-between p-[1em]'>
            <img className='w-[15px] h-[15px]' src={hamburgerNemu} alt="" />
            <img className='w-[20px]' src={CalendarWhite} alt="" />
        </div>
        <div className='text-center'>
            <p className='text-[#AAFF00] text-xs content-center'>Available Balance</p>
            <h1 className='text-2xl text-white'>$ 7,392.00</h1>
            <p className='text-[#9db0cf]'>June 9, 2018</p>
        </div>

        <div className='bg-gradient-to-b from-[#3f567d] to-[#1c3667] border border-[#3f567d] rounded m-[2em] p-[0.7em] shadow-md'>
        <h1 className='text-[#9db0cf] text-2xl text-center'>42012&nbsp;&nbsp; 3049&nbsp;&nbsp; 2800&nbsp;&nbsp; 9815</h1>
        <br />
        <div className='flex justify-between text-[#dedede] text-xs'>
        <p>EXPIRE &#9656; 02/22 </p>
        <p>CVC CODE &#9656; 230</p>
        </div>
        </div>
        <br />

    </div>
  )
}


export default TopSection