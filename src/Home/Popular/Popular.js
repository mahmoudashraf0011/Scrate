import React, { useState,useEffect } from 'react'
import './Popular.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function Popular() {
  const [courses,setCourses]=useState([]);

  useEffect(()=>{
    axios.get("Data/CoursesData.json").then(res=>{
      setCourses(res.data.courses)
    }).catch((e)=>{
      console.log(e);
    })
})

  return (
    <section className='popular'>
      <div className='popular_header'>
        <h2 className='popular_header_title'>Our Popular <span>Courses</span></h2>
        <p className='popular_header_desc'>Suspendisse sodales arcu velit, non pretium massa accumsan non. Proin accumsan placerat mauris sit amet condimentum. Morbi luctus risus tincidunt urna hendrerit mollis.</p>
      </div>
      <div className='container'>
        <div className='popular_items'>
          {
            courses.map((course)=>{
              if(course.id < 9){
                return (
                  <div className='popular_item' key={course.id}>
                    <div className='popular_item_img'>
                        <img src={course.img}/>
                    </div>
                    <div className='popular_item_content'>
                        <span className='popular_item_hint'>{course.name}</span>
                        <h4 className='popular_item_title'>{course.title}</h4>
                        <div className='popular_item_props'>
                            <ul className='popular_item_stars'>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                            </ul>
                            <div className='popular_item_price'>{course.price}</div>
                        </div>
                        <hr/>
                        <div className='popular_item_info'>
                            <li><i className="fa fa-book" aria-hidden="true"></i> <span>{course.lessons}</span> lesson</li>
                            <li><i className="fa fa-users" aria-hidden="true"></i> <span>{course.seats}</span> seats</li>
                        </div>
                    </div>
                    <div className='popular_item_creator'>
                        <div className='popular_item_creator_img'>
                            <img src={course.creatorImg}/>
                        </div>
                        <span className='popular_item_creator_name'>{course.creatorName}</span>
                    </div>
                 </div>
                )
              }
            
            })
          }


        </div>
       <li className='popular_btn'><NavLink to='#'>see more</NavLink></li>

      </div>
    </section>
  )
}
