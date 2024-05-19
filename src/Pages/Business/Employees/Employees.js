import React , {useEffect,useState} from 'react'
import './Employees.css'
import axios from 'axios';


export default function Employees() {
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
      axios.get("Data/CoursesData.json").then(res=>{
        setCourses(res.data.courses)
      }).catch((e)=>{
        console.log(e);
      })
  })
  
  return (
    <section className='employees'>
      <div className='employees_header'>
        <h2 className='employees_header_title'>High-quality Courses<span>for Employees</span></h2>
        <p className='employees_header_desc'>High-quality courses on anything your employees need to learn. Proin accumsan placerat mauris sit amet condimentum. Morbi luctus risus tincidunt urna hendrerit mollis.</p>
      </div>
      <div className='container'>
        <div className='employees_items'>
          {
            courses.map((course)=>{
              if(course.id < 5){
                return (
                  <div className='employees_item' key={course.id}>
                    <div className='employees_item_img'>
                        <img src={course.img}/>
                    </div>
                    <div className='employees_item_content'>
                        <span className='employees_item_hint'>{course.name}</span>
                        <h4 className='employees_item_title'>{course.title}</h4>
                        <div className='employees_item_props'>
                            <ul className='employees_item_stars'>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                            </ul>
                            <div className='employees_item_price'>{course.price}</div>
                        </div>
                        <hr/>
                        <div className='employees_item_info'>
                            <li><i className="fa fa-book" aria-hidden="true"></i> <span>{course.lessons}</span> lesson</li>
                            <li><i className="fa fa-users" aria-hidden="true"></i> <span>{course.seats}</span> seats</li>
                        </div>
                    </div>
                    <div className='employees_item_creator'>
                        <div className='employees_item_creator_img'>
                            <img src={course.creatorImg}/>
                        </div>
                        <span className='employees_item_creator_name'>{course.creatorName}</span>
                    </div>
                 </div>
                )
              }
            
            })
          }


        </div>
      </div>
    </section>
  )
}
