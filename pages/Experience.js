import Reveal from '@/components/Reveal'
import React from 'react'
import './Experience.css'
import WorkExperience from '@/components/WorkExperience'
export default function Experience() {
  return (
    <section className='experience' id='experience-id'>
        <Reveal>
            <h1>WORK<br/>EXPERIENCE</h1>
        </Reveal>
        <Reveal className='exp'>
            <div className='expintro'>
                <p className='addOpacity'>
                My experience encompasses both internship roles and professional positions, 
                providing me with a comprehensive understanding of full stack development. 
                These real-world jobs have equipped me with practical skills, refined through 
                direct engagement with diverse projects and teams. Each role has contributed 
                uniquely to my growth, enriching my expertise and instilling a strong foundation 
                for continued success in my career journey.                    
                </p>

                <p className="quote">&quot;Success is not the result of spontaneous combustion. You must set yourself on fire.&quot; -<span className='name'>Arnold H. Glasow</span> </p>
            </div>
            <WorkExperience/>
        </Reveal>

    </section>
  )
}
