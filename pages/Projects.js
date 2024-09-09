"use client"
import React, { useState } from 'react'
import Reveal from '@/components/Reveal'
import './Projects.css'
import SlideLogo from '@/components/SlideLogo'
import Online from '@/components/Online'
import Link from 'next/link'
import IconText from '@/components/IconText'
import { FaReact } from 'react-icons/fa6'
import ProjectCart from '@/components/ProjectCart'

export default function Projects() {
  const projects = [
    {
      projectName: "FX CALCULATOR",
      technologies: ["Next Js", "TypeScript"],
      githubLink: "https://github.com/jordanjunior22/ecommerce-front",
      liveLink: "https://fxcaculator.vercel.app/",
      imgSrc: "./fxcal.png"
    },
    {
      projectName: "Ecommerce Front",
      technologies: ["Next Js", "Mongo DB", "Axios", "Stripe Intergration"],
      githubLink: "https://github.com/jordanjunior22/ecommerce-front",
      liveLink: "https://github.com/jordanjunior22/ecommerce-front",
      imgSrc: "./front.png"
    },
    {
      projectName: "Ecommerce Admin Panel",
      technologies: ["Next Js", "Mongo DB", "Axios"],
      githubLink: "https://github.com/jordanjunior22/ecommerce-admin",
      liveLink: "https://github.com/jordanjunior22/ecommerce-admin",
      imgSrc: "./admin.png"
    },
    {
      projectName: "Passionate Center Homes",
      technologies: ["Next.js", "Css", "Axios"],
      githubLink: "https://github.com/jordanjunior22/passionate",
      liveLink: "https://passionatecenterandhomes.com/",
      imgSrc: "./pas.png"
    },
    {
      projectName: "Social Insure",
      technologies: ["Next Js", "Tailwin", "Nodemailer", "Axios"],
      githubLink: "https://github.com/jordanjunior22/socialinsure",
      liveLink: "https://socialinsure.org/",
      imgSrc: "./ins.png"
    },
    {
      projectName: "Attire E-Commerce",
      technologies: ["Bootstrap v5.0.2", "JavaScript", "HTML"],
      githubLink: "https://github.com/jordanjunior22/socialinsure",
      liveLink: "https://jordanjunior22.github.io/attire.github.io/",
      imgSrc: "./atire.png"
    },
    {
      projectName: "Billing And Inventory System Software",
      technologies: [".NET", "C#", "MS SQL Server"],
      githubLink: "https://github.com/jordanjunior22/Billing-And-Inventory-System-Application",
      liveLink: "/",
      imgSrc: "./bill.png"
    },
    
  ];
 
  
  return (
    <section className='projects' id='projects-id'>
        <Reveal>
            <h1>PROJECTS</h1>
        </Reveal>
        <Reveal>
            <SlideLogo/>
        </Reveal>
            <Reveal className='case-study'>
        <Reveal className='case-study-description'>
                <h3>Social Insure Project</h3>
                  <div className='tech-used add-t'>
                    <p>Next Js</p>
                    <p>React Native Js</p>
                    <p>Mongo DB</p>
                    <p>Axios</p>
                    <p>Cloudinary Api</p>
                    <p>Firebase Api</p>
                    <p>Clerk Auth</p>
                  </div>
                  <p className='project-des'>Social Insure is a community funded platform for loved ones, ensuring they have needed support they deserve
                  in a most timely and efficient manner.</p>
                    {/* <div className='cta-project'>
                       
                      <Link href='https://github.com/jordanjunior22/exchange-rate-app' target='_blank' className='cta-btn-project'><IconText Icons={FaReact} text='Github'/></Link>                   
                      <Link href='https://exchange-rate-app-nine.vercel.app/' target='_blank' className='cta-btn-project'><Online state='Live Demo'/></Link>
                    </div> */}
            </Reveal>
            <Reveal className='case-study-image'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/QZ7kDE4IA8s?si=Tm9aD0ewYjmZa-Gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Reveal>

        </Reveal>
        <Reveal className='case-study'>
            <Reveal className='case-study-image'>
                <img src='./Exchange.png' alt='img'/>
            </Reveal>
            <Reveal className='case-study-description'>
                <h3>Currency Exchange App</h3>
                  <div className='tech-used'>
                    <p>Next Js</p>
                    <p>Tailwind Css</p>
                    <p>Axios</p>
                  </div>
                  <p className='project-des'>An exchange rate application built using Next.js, a 
                    React framework for server-side rendered and statically 
                    generated web applications. This app utilizes the Fixer 
                    API to provide users with real-time exchange rates for multiple currencies. 
                    Offering seamless currency conversion and financial tracking, it ensures an 
                    interactive and user-friendly experience.</p>
                    <div className='cta-project'>
                       
                      <Link href='https://github.com/jordanjunior22/exchange-rate-app' target='_blank' className='cta-btn-project'><IconText Icons={FaReact} text='Github'/></Link>                   
                      <Link href='https://exchange-rate-app-nine.vercel.app/' target='_blank' className='cta-btn-project'><Online state='Live Demo'/></Link>
                    </div>
            </Reveal>
        </Reveal>
        <Reveal className='project-sub-heading'>
            <p>MORE <span className='addOpacity'>PROJECTS</span></p>
        </Reveal>
        <Reveal className='grid-layout'>

        {projects.map((project, index) => (
        <ProjectCart
          key={index}
          projectName={project.projectName}
          technologies={project.technologies}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          imgSrc={project.imgSrc}
        />
      ))}
        </Reveal>
    </section>
  )
}
