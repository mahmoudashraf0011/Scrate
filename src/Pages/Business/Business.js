import React , {useEffect} from 'react'
import './Business.css'
import Navbar from '../../Home/Nav/Navbar'
import { NavLink } from 'react-router-dom';
import Brief from './Brief/Brief';
import Employees from './Employees/Employees';
import Starting from './Starting/Starting';
import Confidence from './Confidence/Confidence';
import Percentage from './Percentage/Percentage';
import Plan from './Plan/Plan';
import Footer from '../../Home/Footer/Footer';
export default function Business() {
    useEffect(()=>{
        document.querySelector('.pages').children[0].classList.add("on");
        document.querySelector('.pages').children[1].classList.add("on");
    
    
    })

  return (
    <section className='business'>
        <Navbar />
        <div className='page_header'>
            <h2 className='page_title'>For Business</h2>
            <div className='page_path'>
                <NavLink to="/" >Home </NavLink>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span>For Business</span>
            </div>
        </div>
        <Brief />
        <Employees />
        <Starting />
        <Confidence />
        <Percentage />
        <Plan />
        <Footer />
    </section>
  )
}
