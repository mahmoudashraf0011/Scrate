import React, { Component, createRef } from 'react'
import  { useEffect, useRef, useState } from 'react'
import logo1 from './../../images/logo1.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import '../../index.css'

export default class Navbar extends Component {

    constructor(props){
        super(props)
        this.searchItem=createRef();
        this.searchInput= createRef();
        this.userIcon=createRef();
        this.openUserForm=createRef();
        this.closUserForm=createRef();
        this.forgetBtn=createRef();
        this.userLoginForm=createRef();
        this.openRestForm=createRef();
        this.closeRestForm=createRef();
        this.cancelRestForm=createRef();
        this.loginForm=createRef();
        this.restForm=createRef();
        this.loginEmailInput=createRef();
        this.loginPassInput=createRef();
        this.restEmailInput=createRef();
        this.classNameFunc = ({ isActive }) => (isActive ? "on" : "");

    }

    showSearchInput=()=>{
        this.searchItem.current.onclick=(e)=>{
            let opacityInput= this.searchInput.current.style.opacity;
            let visibilityInput= this.searchInput.current.style.visibility;
            if(opacityInput=="" || opacityInput==0 && visibilityInput =="" || visibilityInput=="hidden"){
                this.searchInput.current.style.opacity=1;
                this.searchInput.current.style.visibility="visible";
                this.searchItem.current.className='fa fa-times';
            }else {
            this.searchInput.current.style.opacity=0;
            this.searchInput.current.style.visibility="hidden";
            this.searchItem.current.className='fa fa-search';

        }
    }


}
    showUserForm=()=>{
        this.userIcon.current.onclick=(e)=>{
            this.openUserForm.current.style.display='block';
        }
        this.closUserForm.current.onclick=(e)=>{
            this.openUserForm.current.style.display='none';

        }
    }
    showResrForm=()=>{

        this.forgetBtn.current.onclick=(e)=>{
            this.userLoginForm.current.style.display='none';
            this.openRestForm.current.style.display='block';

        }

        this.closeRestForm.current.onclick=(e)=>{
            this.openUserForm.current.style.display='none';

        }
        this.cancelRestForm.current.onclick=(e)=>{
            this.userLoginForm.current.style.display='block';
            this.openRestForm.current.style.display='none';


        }

    }
    submitLoginForm=()=>{
        this.loginForm.current.onsubmit=(e)=>{
            e.preventDefault();
            let emailValue=this.loginEmailInput.current.value;        
            let passValue=this.loginPassInput.current.value;   
            if(emailValue!=''&&passValue!=''){
                alert("This is invalid Email or Password!");
            }     
        
        }
    }

    submitRestForm=()=>{
        this.restForm.current.onsubmit=(e)=>{
            e.preventDefault();
            let emailValueOfRest=this.restEmailInput.current.value;          
            if(emailValueOfRest!=''){
                alert("This is invalid Email!");
            }     
        
        }
    }

    MakeLinkActive=()=>{

            let links=document.querySelectorAll(".links > li");
            links.forEach((link)=>{
                link.onclick=()=>{
                    links.forEach((ele)=>{
                       ele.children[0].classList.remove("on");            
                      })
                      link.children[0].classList.add("on");
                       
              }
            })           
    }

  
    componentDidMount(){
        this.showSearchInput();
        this.showUserForm();
        this.showResrForm();
        this.submitLoginForm();
        this.submitRestForm();
        this.MakeLinkActive();
  
    }
  render() {

    return (
        <section className='navbar'>
        <div className='container'>
            <div className='navbar-items'>
                <div className='logo'>
                    <img src={logo1} alt='bg1'/>
                </div>
                <nav className='links'>
                    <li className='home on'><NavLink to='/' className={this.classNameFunc} activeClassName='on' >Home</NavLink></li>
                    <li className='pages' >
                        <NavLink to='/AboutUs' className={this.classNameFunc}>pages</NavLink>
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        <div className='pages-dropDown'>
                            <ul>
                                <li><NavLink to='/AboutUs' exact className={this.classNameFunc}>about us</NavLink></li>
                                <li><NavLink to='/become_a_teacher' className={this.classNameFunc}>Become a Teacher</NavLink></li>
                                <li><NavLink to='/for_business' className={this.classNameFunc}>For Business</NavLink></li>
                                <li><NavLink to='/gallery' className={this.classNameFunc}>Gallery</NavLink></li>
                                <li><NavLink to='/our_mission' className={this.classNameFunc}>Our Mission</NavLink></li>
                                <li><NavLink to='/ourTeam' className={this.classNameFunc}>Our Team</NavLink></li>
                                <li><NavLink to='/single_team' className={this.classNameFunc}>Single Team</NavLink></li>
                                <li><NavLink to='/process' className={this.classNameFunc}>Process</NavLink></li>
                                <li><NavLink to='/services' className={this.classNameFunc}>Services</NavLink></li>
                                <li><NavLink to='/typography' className={this.classNameFunc}>Typography</NavLink></li>
                                <li><NavLink to='/coming_soon' className={this.classNameFunc}>Coming Soon</NavLink></li>
                                <li><NavLink to='/page_404' className={this.classNameFunc}>Page 404</NavLink></li>
                            </ul>
                        </div>
                        
                    </li>
                    <li className='news'>
                        <NavLink to='#' className='navLink'>news</NavLink>
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        <div className='news-dropDown'>
                            <ul>
                                <li><NavLink to='/listing' className='navLink'>listing</NavLink></li>
                                <li><NavLink to='/masonry' className='navLink'>Masonry</NavLink></li>
                                <li><NavLink to='/blog_single_post' className='navLink'>Blog Single Post</NavLink></li>
                            </ul>
                        </div>
                        </li>
                    <li className='events' style={{color:"red"}}>
                        <NavLink to='#' className='navLink'>events</NavLink>
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        <div className='events-dropDown'>
                            <ul>
                                <li><NavLink to='/events_list' className='navLink'>events list</NavLink></li>
                                <li><NavLink to='/single_event' className='navLink'>single event</NavLink></li>
                                <li><NavLink to='/events_calender' className='navLink'>events calender</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li><NavLink to='#' className='navLink'>courses</NavLink></li>
                    <li><NavLink to='#' className='navLink'>contacts</NavLink></li>
                </nav>
                <div className='navIcons'>
                    <li className='searchItem'  >
                        <i className="fa fa-search" aria-hidden="true" ref={this.searchItem}></i>
                        <div className='searchInput' ref={this.searchInput} >
                            <input type="text" placeholder='Search...'/>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>

                    
                   </li>
                    <li className='user'>
                        <i className="fa fa-user-o" aria-hidden="true" ref={this.userIcon}></i>
                        <div className='overlay useForm_dropdown' ref={this.openUserForm}>
                            <div className='userForm' ref={this.userLoginForm} >
                                <h3>Hey, welcome!</h3>
                                <form ref={this.loginForm}>
                                    <input type='email' placeholder='Enter Your Email*' required aria-autocomplete ref={this.loginEmailInput}/>
                                    <input  type='password' placeholder='Enter Your Password*' required ref={this.loginPassInput}/>
                                    <div className='userForm_more'>
                                        <div className='useForm_more_remember'>
                                            <input type="checkbox" id="forgget" name="forgget" value="Forget" />
                                            <label for="forgget"> Remember me?</label>
                                        </div>
                                        <span ref={this.forgetBtn}>Lost Your Password?</span>
                                    </div>
                                    <input type='submit' value='Login' className='inputLogin'/>
                                </form>
                                <li className='closeUserForm'><i className="fa fa-times" aria-hidden="true" ref={this.closUserForm}></i></li>
                            </div>
                            <div className='userRest' ref={this.openRestForm}>
                                 <h3>Reset Password</h3>
                                <form ref={this.restForm}>
                                    <input type='email' placeholder='Enter Your Email*' ref={this.restEmailInput} required/>
                                    <input type='submit' value='Get new Password' className='inputRest'/>
                                </form>
                                <button className='cancel' ref={this.cancelRestForm}>Cancel</button>
                                <li className='closeUserRestForm' ref={this.closeRestForm}><i className="fa fa-times" aria-hidden="true"></i></li>
                            </div>
                        </div>
                    </li>
                </div>
            </div>

        </div>

    </section>
     
    )
  }
}
