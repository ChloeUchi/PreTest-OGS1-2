import React from 'react'
import Arrow from './arrow.png'
import Arrow2 from './arrow2.png'

function Section1() {
  return (
    <ul className='grid grid-cols-2 p-[10px] '>
        <li>
            <p className='ml-[2em] border-2 border-gray-200 rounded-full text-center w-[6em] shadow'>Income</p>
            <ul className='grid grid-cols-2 justify-center pl-[2em] pr-[6em] pt-[0.3em]'>
                <li>
                    <img className='w-[20px]' src={Arrow} alt="" />
                </li>
                <li>
                <p className='text-center text-[#2FD646]'>$9,302.00</p>
                </li>
            </ul>
        </li>
        
        <li>
            <p className='ml-[2em] border-2 border-gray-200 rounded-full text-center w-[6em] shadow'>Expense</p>
            <ul className='grid grid-cols-2 justify-center pl-[2em] pr-[6em] pt-[0.3em]'>
                <li>
                    <img className='w-[20px]' src={Arrow2} alt="" />
                </li>
                <li>
                    <p className='text-center text-[#FF3232]'>$2,790.00</p>
                </li>
            </ul>
        </li>
    </ul>
  )
}

export default Section1