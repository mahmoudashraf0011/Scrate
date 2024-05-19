import React , {useEffect} from 'react'
import './Counter.css'
export default function Counter() {

    let startCounter=(el)=>{
        let goal = el.dataset.max;

        let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == goal) {
            clearInterval(count);
          }
        }, 4000/goal);
      }
    
    let RunCounter=()=>{
        let adjNums = document.querySelectorAll(".counter_item .counter_num");
        let adjSection = document.querySelector(".counter");
        let adjstarted = false;
        window.onscroll = function () {
            if (window.scrollY >= adjSection.offsetTop) {
                if (!adjstarted) {
                    adjNums.forEach((num) => startCounter(num));
                }
                adjstarted = true;
            }
            };
    }
    useEffect(()=>{
        RunCounter();
    })

  return (
    
    <section className='counter'>
        <div className='counter_content'>
            <div className='counter_items'>
                <div className='counter_item'>
                    <h3 className='counter_num' data-max="362">0</h3>
                    <p className='counter_desc'>People Working</p>
                </div>
                <div className='counter_item'>
                    <h3 className='counter_num' data-max="1158">0</h3>
                    <p className='counter_desc'>Student Enrolled</p>
                </div>
                <div className='counter_item'>
                    <h3 className='counter_num' data-max="19">0</h3>
                    <p className='counter_desc'>Years of Experience</p>
                </div>
                <div className='counter_item'>
                    <h3 className='counter_num' data-max="35">0</h3>
                    <p className='counter_desc'>Exelent Courses</p>
                </div>
            </div>
        </div>

    </section>
  )
}
