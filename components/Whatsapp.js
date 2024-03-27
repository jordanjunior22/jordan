import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import './Whatsapp.css'
import Link from 'next/link';

export default function Whatsapp() {
  return (
    <Link href='https://wa.me/+237621492355' target='_blank' className='whatsapp'>
        <FaWhatsappSquare className='whatsapp-icon'/>
    </Link>
  )
}
