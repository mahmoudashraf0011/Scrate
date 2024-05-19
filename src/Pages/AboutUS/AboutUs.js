import React, { useEffect } from 'react'
import Navbar from '../../Home/Nav/Navbar'

import './AboutUs.css'
import { NavLink } from 'react-router-dom';
import Future from './Future/Future';
import Features from '../../Home/Features/Features';
import Adj from './Adj/Adj';
import Trusted from '../../Home/Trusted/Trusted';
import Teachers from './Teachers/Teachers';
import Footer from '../../Home/Footer/Footer';


export default function AboutUs() {
useEffect(()=>{
  document.querySelector('.pages').children[0].classList.add("on");
  document.querySelector('.pages').children[1].classList.add("on");


})
  return (
    <div>
      <Navbar />
      <div className='page_header'>
        <h2 className='page_title'>About us</h2>
        <div className='page_path'>
            <NavLink to="/" >Home </NavLink>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span>About us</span>
        </div>
      </div>
      <Future />
      <div className='about_feature'>
        <Features />
      </div>
      <Adj />
      <Trusted />
      <Teachers />
      <Footer />
    </div>
  )
}
