import React, { useEffect } from 'react'
import './Percentage.css'


export default function Percentage() {
    
 let CircleProgrss=()=>{
    let circles=document.querySelectorAll('.circle');
    let numbers=document.querySelectorAll('.n');
   
        circles.forEach((circle)=>{
  
            let s=0;
            let end=circle.dataset.v;
            let inter=setInterval(() => {
                s+=1;
                console.log(s);

                circle.style.background=`conic-gradient(var(--maincolor)${ s * 3.6}deg,transparent 0deg)`
                circle.children[0].children[0].innerHTML=`${s} %`;
                if(s==end){
                    clearInterval(inter);
                    
                }
            }, 50);

        })

        
 }
 useEffect(()=>{
    let prent=document.querySelector('.percentage');
    let started = false;
    window.onscroll=()=>{
        if (window.scrollY >= 1926){
            if (!started) {
                CircleProgrss();
            }
            started=true;
        }

    }
 

 })
  return (
    <section className='percentage'>
      <div className='container'>
        <div className='perc_items'>
            <div className='perc_item'>
                <div className='circle' data-v="75">
                    <div className='wrapp'>
                        <span className='n'>0%</span>
                    </div>
          
                </div>
                <p>Satisfied Students</p>
            </div>
            <div className='perc_item'>
                <div className='circle' data-v="100">
                    <div className='wrapp'>
                        <span className='n'>0%</span>
                    </div>
                </div>
                <p>Online Stydying</p>
            </div>
            <div className='perc_item'>
                <div className='circle' data-v="91">
                    <div className='wrapp'>
                        <span className='n'>0%</span>
                    </div>

                </div>
                <p>Success in Learning</p>
            </div>
            <div className='perc_item'>
                <div className='circle' data-v="80">
                    <div className='wrapp'>
                        <span className='n'>0%</span>
                    </div>
             
                </div>
                <p>Complited Courses</p>
            </div>
        </div>
      </div>

    </section>
  )
}
