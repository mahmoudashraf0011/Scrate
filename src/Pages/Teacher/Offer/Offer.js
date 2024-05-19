
import React, { useState,useEffect } from 'react'
import './Offer.css'
import axios from 'axios';


export default function Offer() {

    const [offers,setOffers]=useState([]);
    useEffect(()=>{
        axios.get("Data/offerData.json").then(res=>{
            setOffers(res.data.offers)
        })
     
    })
    
        
    let  NextSliding =()=>{
        let parenta=document.querySelector('.offer_items');
            parenta.scrollLeft+=427;
    }

    let  prevSliding =()=>{
        let parenta=document.querySelector('.offer_items');
            parenta.scrollLeft-=427;
    }
 
    useEffect(()=>{
       
    })
      return (
        <section className='offer'>
          <div className='offer_header'>
            <h2 className='offer_header_title'>Our offer <span>Courses</span></h2>
            <p className='offer_header_desc'>Suspendisse sodales arcu velit, non pretium massa accumsan non. Proin accumsan placerat mauris sit amet condimentum. Morbi luctus risus tincidunt urna hendrerit mollis.</p>
          </div>
          <div className='container'>
            <div className='offer_items'>
                {
                    offers.map((offer)=>{
                        return(
                            <div className='offer_item' key={offer.id}>
                                <div className='offer_item_img'>
                                    <img src={offer.src} />
                                </div>
                                <h3 className='offer_item_title'>{offer.title}</h3>
                                <p className='offer_item_desc'>{offer.desc}</p>
                                <a className='offer_item_btn'>{offer.btn}<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                            </div>
                        )

                    })
                }


    
            </div>
            <div className='btns'>
                <button className='btn' onClick={prevSliding}>Back</button>
                <button className='btn' onClick={NextSliding}>See more</button>

            </div>

    
          </div>
        </section>
      )
    }
    

