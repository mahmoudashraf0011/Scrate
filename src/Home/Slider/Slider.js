import React, { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import './Slider.css'
import Home from '../Home';
import './../Home.css'
import '../../index.css'
import img from '../../images/Slider/economy.png'
import axios from 'axios';


export default function Slider() {

    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        axios.get('Data/SliderData.json').then((course)=>{
            setCourses(course.data.courses)
        }).catch((e)=>{
            console.log("Error");

        })
        
    },[])



   let ShowNext=()=>{
    let container=document.querySelector('.slider_courses_items');
    container.scrollLeft+=130

   }

   let ShowPrev=()=>{
    let container=document.querySelector('.slider_courses_items');
    container.scrollLeft+=-130;
    
   }
   
  
   useEffect(()=>{
 
        let x=document.querySelector('.navbar');
        x.style.backgroundColor="transparent"
   
   })

  return (

    
      <section className="slider">
        <div className='slider_overlay'>
            <Navbar />
            <div className='slider_content'>
                <p className='slider_desc'>Choose From A Range Of <span>Online Courses</span></p>
                <form className='slider_search'>
                    <input type='search' placeholder='What are of courses would you like for search?' className='slider_searchInput'/>
                    <input type='submit' value='SEARCH' className='slider_searchSubmit'/>
                </form>
                <div className='slider_courses'>
                    <li className='prev'><i className="fa fa-angle-left" aria-hidden="true" onClick={ShowPrev}></i></li>
                    <div className='slider_courses_items'>
                      {
                                courses.map(course=>{
                                    return(
                                    <div className='slider_courses_item' key={course.id}>
                                        <NavLink>
                                            <div className='courseImg'>
                                                <img  src={course.src}/>
                                            </div>
                                            <h5>{course.name}</h5>
                                        </NavLink>
                                    </div>
                        )
                        }) 
                      }
                    </div>
                    <li className='next' ><i className="fa fa-angle-right" aria-hidden="true" onClick={ShowNext}></i></li>
                </div>
            </div>
        </div>
      </section>

   
  )
}
