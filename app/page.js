"use client"
import React, { useState, useEffect } from 'react';
import Experience from "@/pages/Experience";
import Hero from "@/pages/Hero";
import Navbar from "@/pages/Navbar";
import Projects from "@/pages/Projects";
import Footer from '@/pages/Footer';
import Test from '@/pages/Test';

export default function Home() {
  const [isInHomeSection, setIsInHomeSection] = useState(false);
  const [isInExperienceSection, setIsInExperienceSection] = useState(false);
  const [isInProjectSection, setIsInProjectSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ExperienceSection = document.getElementById('experience-id');
      const ProjectSection = document.getElementById('projects-id');
      const HomeSection = document.getElementById('home-id');

      const scrollPosition = window.scrollY;

      if (ExperienceSection && ProjectSection && HomeSection) {
        const ExperienceSectionTop = ExperienceSection.offsetTop;
        const ProjectSectionTop = ProjectSection.offsetTop;
        const HomeSectionTop = HomeSection.offsetTop;

        if (scrollPosition >= ExperienceSectionTop && scrollPosition <= ProjectSectionTop) {
          setIsInExperienceSection(true);
          setIsInHomeSection(false);
          setIsInProjectSection(false);
        } else if (scrollPosition < ExperienceSectionTop) {
          setIsInExperienceSection(false);
          setIsInHomeSection(true);
          setIsInProjectSection(false);
        } else {
          setIsInExperienceSection(false);
          setIsInHomeSection(false);
          setIsInProjectSection(true);
        }
      }


    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Navbar isInHomeSection={isInHomeSection} isInExperienceSection={isInExperienceSection} isInProjectSection={isInProjectSection} />
      <Hero id="home-id" />
      <Experience id="experience-id"/>
      <Projects id="projects-id"/>
      <Footer/>
    </main>
  );
}
