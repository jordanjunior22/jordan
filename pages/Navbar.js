"use client"
import React, { useState, useRef } from 'react'
import './Navbar.css'
import Link from 'next/link'
import Button from '@/components/Button'
import { FaDownload } from "react-icons/fa6";
import Reveal from '@/components/Reveal'
import { CgMenuRound } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";


export default function Navbar({isInHomeSection, isInExperienceSection, isInProjectSection}) {
    const [menuClicked, setMenuClicked] = useState(false);

    function openMenu(){
      setMenuClicked(true);
    }
    function closeMenu(){
      setMenuClicked(false);
    }
    const smoothScrollTo = (targetPosition, duration) => {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;
    
        const scrollStep = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const easing = progress / duration;
    
          window.scrollTo(0, startPosition + distance * easing);
    
          if (progress < duration) {
            requestAnimationFrame(scrollStep);
          }
        };
    
        requestAnimationFrame(scrollStep);
      };
      const handleNavLinkClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
          const targetPosition = section.offsetTop;
          const duration = 500; // Adjust the duration (in milliseconds) for smoother or faster scroll
          smoothScrollTo(targetPosition, duration);
          closeMenu();
        }
      };
      const handleDownload = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "./Resume_2.pdf";
        downloadLink.download = "Resume.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

    return (
      <div className='navbar'>
              <Reveal className='logo_container'>
                  <img src='./jordanlogo.png'/>
              </Reveal>

              <Reveal  id='navbar-id' className={isInExperienceSection ? 'navbar-experience-section-class' : 'nav-container'}>
                  <nav>
                      <Link className={isInHomeSection ? 'active':'' } href='#home-id' onClick={() => handleNavLinkClick('home-id')}>HOME</Link>
                      <Link className={isInExperienceSection ? 'active':'' } href='#experience-id' onClick={() => handleNavLinkClick('experience-id')}>EXPERIENCE</Link>
                      <Link className={isInProjectSection ? 'active':'' } href='#projects-id' onClick={() => handleNavLinkClick('projects-id')}>PROJECT</Link>
                  </nav> 
                  <Button label='Resume' Icons={FaDownload} onClick={handleDownload}/>
              </Reveal>

              <CgMenuRound className='menu-icon' onClick={openMenu}/>
              
              <div className={menuClicked ? 'mobile-navbar show-mobile-nav':'mobile-navbar'}>
                    <IoMdCloseCircle className='close' onClick={closeMenu}/>
                    <Link className={isInHomeSection ? 'active':'' } href='#home-id' onClick={() => handleNavLinkClick('home-id')}>HOME</Link>
                    <Link className={isInExperienceSection ? 'active':'' } href='#experience-id' onClick={() => handleNavLinkClick('experience-id')}>EXPERIENCE</Link>
                    <Link className={isInProjectSection ? 'active':'' } href='#projects-id' onClick={() => handleNavLinkClick('projects-id')}>PROJECT</Link>
                    <Button label='Resume' Icons={FaDownload} onClick={handleDownload}/>
              </div>
      </div>
  )
}
