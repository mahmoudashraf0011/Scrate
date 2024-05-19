import React, { useEffect } from 'react'
import './Future.css'
export default function Future() {

    let startCount=(el)=>{
        let goal = el.dataset.goal;
        console.log(el,goal);
        let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == goal) {
            clearInterval(count);
          }
        }, 2000 / goal);
      }

    let startProgrss=(el)=>{
        let goal = el.dataset.goal;
        console.log(el,goal);
        let count = setInterval(() => {
            el.value++;
          if (el.value == goal) {
            clearInterval(count);
          }
        }, 1000 / goal);
      }

      let RunProgress=()=>{
        let nums = document.querySelectorAll(".future_bar .future_bar_perc span");
        let progresses=document.querySelectorAll(".future_bar .num");
        let section = document.querySelector(".future");
        let started = false;
        if (!started) {
            nums.forEach((num) => startCount(num));
            progresses.forEach((pro) => startProgrss(pro));
            }
            started = true;

 
      }

      let ShowNext=()=>{
        let container=document.querySelector('.future_item_img > img');
        container.src="images/bg5.jpg"
    
       }
    
       let ShowPrev=()=>{
        let container=document.querySelector('.future_item_img > img');
        container.src="images/bg3.jpg"

      
       }
    useEffect(()=>{
        RunProgress();
    })

  return (
    <section className='future'>
        <div className='container'>
            <div className='future_items'>
                <div className='future_item'>
                    <li onClick={ShowPrev}><i className="fa fa-angle-left fa-lg" aria-hidden="true" ></i></li>   
                    <div className='future_item_img'>
                        <img src='images/bg3.jpg' />
                    </div>
                    <li onClick={ShowNext}><i className="fa fa-angle-right fa-lg" aria-hidden="true" ></i></li>
                </div>
                <div className='future_item'>
                    <h2 className='future_item_title'>We are <span>Future of Education</span></h2>
                    <p className='future_item_desc'>You are definitely intrigued to discover who we are. We are Scrate Education – future of education. We have the best knowledge base for you study. Whether you are a prospective student.</p>
                    <div className='future_bars'>
                        <div className='future_bar'>
                            <div className='future_bar_data'>
                                <span className='future_bar_title'>Exact Sciences</span>
                                <p className='future_bar_perc'   ><span data-goal='70'>0</span>%</p>
                            </div>
                            <progress value="0" max="100" className='num' data-goal='70'> 0</progress>
                        </div>
                        <div className='future_bar'>
                            <div className='future_bar_data'>
                                <span className='future_bar_title'>Technologies</span>
                                <p className='future_bar_perc'   ><span data-goal='92'>0</span>%</p>
                            </div>
                            <progress value="0" max="100" className='num' data-goal='70'> 0</progress>
                        </div>
                        <div className='future_bar'>
                            <div className='future_bar_data'>
                                <span className='future_bar_title'>Languages</span>
                                <p className='future_bar_perc'   ><span data-goal='50'>0</span>%</p>
                            </div>
                            <progress value="0" max="100" className='num' data-goal='70'> 0</progress>
                        </div>
                        <div className='future_bar'>
                            <div className='future_bar_data'>
                                <span className='future_bar_title'>Humanities</span>
                                <p className='future_bar_perc'   ><span data-goal='87'>0</span>%</p>
                            </div>
                            <progress value="0" max="100" className='num' data-goal='70'> 0</progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
