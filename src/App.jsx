import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopSection from './components/TopSection'
import Section1 from './components/Section1'
import BottomSection from './components/BottomSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container w-[390px] place-content-center">
      <div className='bg-gradient-to-b from-[#546a90] to-[#1c3667]'><TopSection/></div>
      <div className='ml-[2em] mr-[2em] mt-[-2.5em] border-2 border-white rounded shadow-lg bg-white'><Section1/></div>
      <div className='bg-slate-50 p-[1.5em]'><BottomSection/></div>
    </div>

  )
}

export default App
