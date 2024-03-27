import React from 'react'
import './SlideLogo.css'
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";


export default function SlideLogo() {
  return (
    <div className='logo-slide'>
        <div className='item'>
            <FaReact className='item-logo'/>
        </div>
        <div className='item'>
            <FaAngular className='item-logo'/>
        </div>
        <div className='item'>
            <FaPhp className='item-logo'/>
        </div>
        <div className='item'>
            <FaJava className='item-logo'/>           
        </div>
        <div className='item'>
            <IoLogoJavascript className='item-logo'/>
        </div>
        <div className='item'>
            <SiMysql className='item-logo'/>
        </div>
    </div>
  )
}
