import React, { useEffect, useState } from 'react'
import './Features.css'
import axios from 'axios';
export default function Features() {

    const [features,setFeatures]=useState([]);
    useEffect(()=>{
        axios.get("Data/featuresData.json").then(res=>{
            setFeatures(res.data.features)
        })
    })

  return (
    <section className='features'>
        <div className='container'>
            <div className='features_items'>
                
                    {
                        features.map((feature)=>{
                            return(
                                <div className='features_item' key={feature.id}>
                                    <div className='features_item_img'>
                                        <img  src={feature.src}/>
                                    </div>
                                    <h3 className='features_item_title'>{feature.title}</h3>
                                    <p className='features_item_desc'>{feature.desc}</p>
                                </div>
                            )
                        })
                    }

            </div>
        </div>
      
    </section>
  )
}
