"use client"
import React from 'react';
import Link from 'next/link';
import IconText from './IconText';
import { AiFillProfile } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

import Online from './Online';

export default function ProjectCart({ projectName, technologies, githubLink, liveLink, imgSrc }) {
  return (
    <div className='project-cart'>
      <div className='image-project-cart'>
        <img src={imgSrc} alt='Project Thumbnail' />
      </div>
      <h3>{projectName}</h3>
      <div className='tech-used-for-cart'>
        {technologies.map((tech, index) => (
          <p key={index}>{tech}</p>
        ))}
      </div>
      <div className='cta-project'>
        <Link href={githubLink} target='_blank' rel='noopener noreferrer' className='cta-btn-project'><IconText Icons={FaGithub} text='GitHub' /></Link>
        <Link href={liveLink} target='_blank' rel='noopener noreferrer' className='cta-btn-project'><Online state='Live Demo' /></Link>
      </div>
    </div>
  );
}
