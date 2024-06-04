import React from 'react';
import logo from "../img/invicta.png";
import { Link } from "react-router-dom";

export default function End() {
  return (
    <div className='flex gap-4 justify-between py-6 container mx-auto'>
        <h1 className='text-5xl font-bold'>
        <img className="w-full sm:h-64 mx-auto rounded-full" alt="img" src={logo} />

        </h1>
        <div className='links flex flex-col gap-5'>
            <div className='top'><h1> SCHEMES</h1></div>
            <div className='bottom flex flex-col gap-1'>
            <Link to="/contacts">
              Applied
            </Link>
            <h2>Help</h2>
            <h2>Support</h2>
            </div>
        </div>
        <div className='legal flex flex-col gap-5'>
            <div className='top'><h1>PROGRESS</h1></div>
            <div className='bottom flex flex-col gap-1'>
            <Link to="/pie">
              Applied
            </Link>
            <Link to="/line">
            Originated sources
            </Link>
           
            </div>
        </div>
        <div className='social flex flex-col gap-5'>
            <div className='top'><h1>Social</h1></div>
            <div className='bottom flex flex-col gap-1'>
            <Link to="https://www.facebook.com/">Facebook
            </Link>
            <Link to="https://www.instagram.com/">
            Instagram
            </Link>
            <Link to="https://linkedin.com/">
            LinkdIn
            </Link>
            </div>
      </div>
    </div>
  )
}
