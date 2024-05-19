import React, { useEffect } from 'react'
import "./Special.css"
export default function Special() {

    let AccordinBar=()=>{
        let accordionItems=document.querySelectorAll('.accordion_item > li')
        accordionItems.forEach((item)=>{

            item.onclick=(e)=>{
                accordionItems.forEach((ele)=>{
                    ele.classList.remove("on");
                    ele.children[0].setAttribute('class','fa fa-angle-down');
                })

                item.classList.add('on');
                item.children[0].setAttribute('class','fa fa-angle-up');

            }
        })
        
    }

    useEffect(()=>{
        AccordinBar();
    })
  return (
    <section className='special'>
        <div className='special_items'>
            <div className='special_img'></div>
            <div className='special_content'>
                <h2 className='special_content_title'>What Make Us <span>Different?</span></h2>
                <div className='special_content_accordion'>
                    <div className='accordion_item'>
                        <li className='on'><i className="fa fa-angle-up" aria-hidden="true"></i> Campus Life</li>
                        <p>Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                    </div>
                    <div className='accordion_item'>
                        <li><i className="fa fa-angle-down" aria-hidden="true"></i> Perfect Programs</li>
                        <p>Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                    </div>
                    <div className='accordion_item'>
                        <li><i className="fa fa-angle-down" aria-hidden="true"></i> Classic College Experience</li>
                        <p>Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                    </div>
                    <div className='accordion_item'>
                        <li><i className="fa fa-angle-down" aria-hidden="true"></i> Hands on Research</li>
                        <p >Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
