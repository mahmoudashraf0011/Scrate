import React, { useEffect } from 'react'
import './Teacher.css'
import Navbar from '../../Home/Nav/Navbar'
import { NavLink } from 'react-router-dom';
import Abstract from './Abstract/Abstract';
import Offer from './Offer/Offer';
import QB from './QB/QB';
import Counter from './Counter/Counter';
import Footer from '../../Home/Footer/Footer';
import Teachers from '../AboutUS/Teachers/Teachers';

export default function Teacher() {
  useEffect(()=>{
    document.querySelector('.pages').children[0].classList.add("on");
    document.querySelector('.pages').children[1].classList.add("on");


})
  return (
    <section className='Teacher'>
      <Navbar />
      <div className='page_header'>
        <h2 className='page_title'>Become a Teacher</h2>
        <div className='page_path'>
            <NavLink to="/" >Home </NavLink>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span>Become a Teacher</span>
        </div>
      </div>
      <Abstract />
      <Offer />
      <QB />
      <Counter />
      <Teachers />
      <Footer />
    </section>
  )
}
