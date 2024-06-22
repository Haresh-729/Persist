import { useState } from 'react'
import Landing from './Components/Landing';
import { useSelector } from 'react-redux'
import { getBgColor } from './App/Slice/DashboardSlice';

function App() {
  const bgColor = useSelector(getBgColor);

  return (
    <>
      <div className={`h-screen w-screen ${bgColor ? 'bg-[#000000]' : 'bg-[#ffffff]'} overflow-y-auto scrollbar-hide`}>
        <div className="w-full h-full p-2">
          <div className="w-full h-full ">
            <Landing/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
