import React , {useEffect, useState}from 'react'
import './Gallery.css'
import Navbar from '../../Home/Nav/Navbar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../Home/Footer/Footer';

export default function Gallery() {
    const [imgs,setImgs]=useState([]);

    useEffect(()=>{
        document.querySelector('.pages').children[0].classList.add("on");
        document.querySelector('.pages').children[1].classList.add("on");   
        axios.get("Data/GalleryData.json").then((res)=>{
            setImgs(res.data.imgs)
        })
    })

  return (
    <section className='gallery'>
      <Navbar />
      <div className='page_header'>
            <h2 className='page_title'>Gallery</h2>
            <div className='page_path'>
                <NavLink to="/" >Home </NavLink>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span>Gallery</span>
            </div>
            <div className='gallery_items'>
                    {
                        imgs.map((img)=>{
                            return(
                                <div className='gallery_item' id={"item"+img.id} key={img.id}>
                                    <a className={"img"+img.id}><img src={img.src}/></a>
                                </div>
                            )

                        })

                    }

                </div>
             </div>
        <Footer />
    </section>
  )
}
