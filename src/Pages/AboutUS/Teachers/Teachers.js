import React, { useEffect } from 'react'
import './Teachers.css'
import { NavLink } from 'react-router-dom'
export default function Teachers() {
    useEffect(()=>{
        console.log("teacher");
    })
  return (
    <section className='teachers'>
         <div className='teachers_header'>
            <h2 className='teachers_header_title'>Our Professional <span>Teachers</span></h2>
            <p className='teachers_header_desc'>Suspendisse sodales arcu velit, non pretium massa accumsan non. Proin accumsan placerat mauris sit amet condimentum. Morbi luctus risus tincidunt urna hendrerit mollis.</p>
        </div>
       <div className='container'>
            <div className='teachers_items'>
                <div className='teacher_item'>
                    <div className='teacher_item_img'>
                        <img src='images/teachers/1.jpg' />
                        <div className='teacher_item_overlay'>
                            <ul>
                                <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                                <li><i class="fa fa-instagram" aria-hidden="true"></i></li>     
                            </ul>                       
                        </div>
                    </div>
                    <h4 className='teacher_item_title'><NavLink to="#">Samuel Williams</NavLink></h4>
                    <span className='teacher_item_desc'>Professor of Mathematics</span>
                </div>
                <div className='teacher_item'>
                    <div className='teacher_item_img'>
                        <img src='images/teachers/2.jpg' />
                        <div className='teacher_item_overlay'>
                            <ul>
                                <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                                <li><i class="fa fa-instagram" aria-hidden="true"></i></li>     
                            </ul>                       
                        </div>
                    </div>
                    <h4 className='teacher_item_title'><NavLink to="#">Karren Johnson</NavLink></h4>
                    <span className='teacher_item_desc'>Biology teacher</span>
                </div>
                <div className='teacher_item'>
                    <div className='teacher_item_img'>
                        <img src='images/teachers/3.jpg' />
                        <div className='teacher_item_overlay'>
                            <ul>
                                <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                                <li><i class="fa fa-instagram" aria-hidden="true"></i></li>     
                            </ul>                       
                        </div>
                    </div>
                    <h4 className='teacher_item_title'><NavLink to="#">Marisa Taylon</NavLink></h4>
                    <span className='teacher_item_desc'>Geometry Teacher</span>
                </div>
            </div>
        </div> 
    </section >
  )
}
