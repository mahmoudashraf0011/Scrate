import React , {useEffect, useState} from 'react'
import './Team.css'
import Navbar from '../../Home/Nav/Navbar'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Footer from '../../Home/Footer/Footer';
export default function Team() {
    const [allTeam,setAllTeam]=useState([]);
    const [upTeam,setUPTeam]=useState([]);

    let CheckCatagort=()=>{
        let allBtns=document.querySelectorAll('.team_categories > button')
        axios.get("Data/TeamData.json").then((res)=>{
            setAllTeam(res.data.team[0]["all"])
             allBtns.forEach(btn=>{

             btn.onclick=()=>{
                allBtns.forEach((B)=>{
                   B.classList.remove("active");
                    
                })
                btn.classList.add("active");   
                setUPTeam(res.data.team[btn.dataset.n][btn.id])
            }
        })
            
     })

    }

  
    useEffect(()=>{
        document.querySelector('.pages').children[0].classList.add("on");
        document.querySelector('.pages').children[1].classList.add("on");

        CheckCatagort();
        

    })
    
 
  return (
    <section className='team'>
      <Navbar />
      <div className='page_header'>
        <h2 className='page_title'>Our Team</h2>
        <div className='page_path'>
            <NavLink to="/" >Home </NavLink>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span>our team</span>
        </div>
        <div className='team_content'>
            <div className='team_categories'>
                <button className='active' id='all' data-n="0">all</button>
                <button id='B'  data-n="1">Biology</button>
                <button id='E' data-n="2">Economy</button>
                <button id='GE' data-n="3">Geometry</button>
                <button id='GR' data-n="4">Graphic Arts</button>
                <button id='L' data-n="5">Languages</button>
                <button id='M' data-n="6">Mathematic</button>
            </div>
            <div className='teams_items'>
                {
                    upTeam!=""?upTeam.map((t)=>{
                        return (
                            <div className='team_item' key={t.id}>
                                <div className='team_item_img'>
                                    <img src={t.src}/>
                                    <div className='team_item_overlay'>
                                        <ul>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-instagram" aria-hidden="true"></i></li>     
                                        </ul>                       
                                    </div>
                                </div>
                                <h4 className='team_item_title'><NavLink to="#">{t.name}</NavLink></h4>
                                <span className='team_item_desc'>{t.job}</span>
                            </div>
                        )
                    }):allTeam.map((t)=>{
                        return (
                            <div className='team_item' key={t.id}>
                                <div className='team_item_img'>
                                    <img src={t.src}/>
                                    <div className='team_item_overlay'>
                                        <ul>
                                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                                            <li><i class="fa fa-instagram" aria-hidden="true"></i></li>     
                                        </ul>                       
                                    </div>
                                </div>
                                <h4 className='team_item_title'><NavLink to="#">{t.name}</NavLink></h4>
                                <span className='team_item_desc'>{t.job}</span>
                            </div>
                        )
                    })
                }

            </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
