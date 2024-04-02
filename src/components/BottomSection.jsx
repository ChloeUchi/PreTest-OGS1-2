import React from 'react'
import imgRestuarant from './restuarant.png'
import holdMoney from './hand-hold-money.png'
import shopBag from './shop-bag.png'
import coinImg from './icon-coins.png'
import Arrow from './arrow.png'
import Arrow2 from './arrow2.png'
import downArrow from './down-arrow-weekly.png'

function BottomSection() {
  return (
    <div>
    <div className='flex justify-between '>
        <h1 className='text-xl'>Details of movements</h1>
        <p className='text-sm text-gray-500'>Weekly <img className='w-[10px] h-[7px]' src={downArrow} alt="" /></p>
    </div> 
    <ul className='mt-[1em] bg-white'>
        <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em]'>
            <div>
                <img className='w-[30px]' src={imgRestuarant} alt="" />
            </div>
            <div>
                <p className='text-sm'>Restuarant Manhattan</p>
                <p className='text-xs text-[#CDCDCD]'>June 10, 2018</p>
            </div>
            <div className='flex flex-wrap'>
                <h1 className='text-[#FF3232]'>$170&nbsp;&nbsp;</h1>
                <img className='w-[10px] h-[10px] justify-self-center' src={Arrow2} alt="" />
            </div>
        </li>
        <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
            <div>
                <img className='w-[30px]' src={holdMoney} alt="" />
            </div>
            <div>
                <p className='text-sm'>Salary Deposit</p>
                <p className='text-xs text-[#CDCDCD]'>June 1, 2018</p>
            </div>
            <div className='flex flex-wrap'>
                <h1 className='text-[#2FD646]'>$1200&nbsp;&nbsp;</h1>
                <img className='w-[10px] h-[10px] justify-self-center' src={Arrow} alt="" />
            </div>
        </li>
        <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
            <div>
                <img className='w-[30px]' src={shopBag} alt="" />
            </div>
            <div>
                <p className='text-sm'>Central Market</p>
                <p className='text-xs text-[#CDCDCD]'>May 28, 2018</p>
            </div>
            <div className='flex flex-wrap'>
                <h1 className='text-[#FF3232]'>$50&nbsp;&nbsp;</h1>
                <img className='w-[10px] h-[10px] justify-self-center ' src={Arrow2} alt="" />
            </div>
        </li>
        <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
            <div>
                <img className='w-[30px]' src={coinImg} alt="" />
            </div>
            <div>
                <p className='text-sm'>Salary Deposit</p>
                <p className='text-xs text-[#CDCDCD]'>May 1, 2018</p>
            </div>
            <div className='flex flex-wrap'>
                <h1 className='text-[#2FD646]'>$1200&nbsp;&nbsp;</h1>
                <img className='w-[10px] h-[10px] justify-self-center' src={Arrow} alt="" />
            </div>
        </li>
    </ul>
    </div>
  )
}

export default BottomSection