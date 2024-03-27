"use client"
import Reveal from '@/components/Reveal'
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import Button from '@/components/Button';
import { FaDownload } from 'react-icons/fa6';

function Footer() {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "./Resume_2.pdf";
    downloadLink.download = "Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const Gomail = () => {
      const emailAddress = 'jordanjuniordjimelykheambo@gmail.com';
      const mailtoUri = `mailto:${emailAddress}`;
      window.open(mailtoUri);
  }
  return (
    <section className='footer'>
        <Reveal className='divider'></Reveal>
        <Reveal>
            <h3 className='footer-head'>Have a project you want us to work on?</h3>
        </Reveal>
        <Reveal className='email-me'>
            <Button label='Email Me' Icons={AiOutlineMail} onClick={Gomail}/>
            <Button label='Resume' Icons={FaDownload} onClick={handleDownload}/>
        </Reveal>
    </section>
  )
}

export default Footer