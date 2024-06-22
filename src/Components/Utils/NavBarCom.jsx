import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {SunIcon, MoonIcon} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux'
import { getBgColor, setBgColor } from '../../App/Slice/DashboardSlice';


const NavBarCom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const themeChange = () =>{
        dispatch(setBgColor());
    }
    const bgColor = useSelector(getBgColor);
  return (
    <>
        <header className={`fixed top-2 left-3 right-3 h-[5rem] flex items-center justify-center opacity-100 z-10 transition-all duration-300 ${bgColor ? 'bg-[#7a56d67a]' : 'bg-[#7a56d67a]'} rounded-xl`}>
        <nav className="flex items-center justify-end thrift-container gap-5 w-full mr-7">
                <button onClick={()=>{navigate('/')}} className="bg-[#7a56d6] text-white hover:bg-[#5a4296fd]">
                    Home
                </button>
            <div className="flex-row gap-5 ">
                {
                    bgColor ? (
                        <SunIcon onClick={themeChange} className='text-white w-[2rem] h-[2rem] rounded-full hover:bg-yellow-400 p-1 font-bold transition-all duration-500'/>
                    ) : (
                        <MoonIcon onClick={themeChange} className='text-black w-[2rem] h-[2rem] rounded-full hover:bg-yellow-200 p-1 font-bold transition-all duration-500'/>
                    )
                }
            </div>
        </nav>
      </header>
    </>
  )
}

export default NavBarCom