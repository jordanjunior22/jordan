"use client"
import React from 'react'
import './Hero.css'
import { IoIosColorPalette } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import Whatsapp from '@/components/Whatsapp';
import Reveal from '@/components/Reveal';
import IconText from '@/components/IconText';
import Online from '@/components/Online';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className='hero' id='home-id'>
      <Reveal className='heading_container'>
          <h1>Full Stack <br/>Developer </h1>
          <p><span className='name'>Welcome - My Name is Jordan Junior.</span> <span className='addOpacity'>I&apos;m a full stack <br/>
          developer with over two years of experience. I have a passion for design <IoIosColorPalette /> and coding.With strong command
          in many programming languages, i&apos;m able to adapt in numerous frameworks.</span></p>
      </Reveal>
      <Reveal className='lower_heading'>

          <div className='left_lower_heading'>
            <div className='available_location'>
              <Online state='Available'/>
              <IconText Icons={FaLocationDot} text='Yaounde, Cameroon'/>
            </div>
            <h3 className='techstack'>Technologies</h3>
            <Reveal className='tech'>
              <IconText Icons={FaReact} text='React, React Native' className='margin_top '/>
              <IconText Icons={FaDatabase} text='SQL,MongoDB' className='margin_top'/>
              <IconText Icons={FaPhp} text='PHP,Symphony,Laraval' className='margin_top'/>
              <IconText Icons={FaJava} text='Java,Springboot' className='margin_top'/>
            </Reveal>
          </div>

          <div className='photo_typin'>
            <div className='jordan_container_photo'>
              <img src='./jordan.png'/>
            </div>
            <div className='typing'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  `Code is the canvas where developers paint the future, one line at a time, crafting solutions to today's challenges and paving the way for tomorrow's innovations.`,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
              />
              </div>
          </div>

          
      </Reveal>
      <Whatsapp/>
    </section>
  )
}
