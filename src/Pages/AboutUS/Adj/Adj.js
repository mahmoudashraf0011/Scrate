import React, { useEffect } from 'react'
import './Adj.css'

export default function Adj() {

    let startCountADJ=(el)=>{
        let goalAdj = el.dataset.max;

        let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == goalAdj) {
            clearInterval(count);
          }
        }, 4000/goalAdj);
      }
    
    let RunCount=()=>{
        let adjNums = document.querySelectorAll(".adj_content_num .num");
        let adjSection = document.querySelector(".adj_content");
        let adjstarted = false;
        window.onscroll = function () {
            if (window.scrollY >= adjSection.offsetTop) {
                if (!adjstarted) {
                    adjNums.forEach((num) => startCountADJ(num));
                }
                adjstarted = true;
            }
            };
    }
    useEffect(()=>{
      RunCount();
    })
  return (
    <section className='adj'>
        <div className='adj_items'>
            <div className='adj_content'>
                <h3 className='adj_content_title'>Advantages <span>of Learning Online</span></h3>
                <p className='adj_content_desc'>The Scrate Education degree is equal in academic standard to a degree from any other university. The Scrate Education is subject to the same quality assurance procedures as all other universities, and uses external assessors and examiners to ensure quality standards. We’re consistently rated ‘excellent’ in teaching assessments.</p>
                <p className='adj_content_note'><i class="fa fa-quote-left" aria-hidden="true"></i> It’s really clear that the most precious resource we all have is time.</p>
                <div className='adj_content_nums'>
                    <div className='adj_content_num'>
                        <span className='num' data-max="362">0</span>
                        <span className='desc'>People Working</span>
                    </div>
                    <div className='adj_content_num'>
                        <span className='num' data-max="1158">0</span>
                        <span className='desc'>Student Enrolled</span>
                    </div>
                    <div className='adj_content_num'>
                        <span className='num' data-max="19">0</span>
                        <span className='desc'>Years of Experience</span>
                    </div>
                </div>
            </div>
            <div className='adj_bg'>
                <img src='images/adj.png' alt='adj' />
            </div>
        </div>

    </section>
  )
}
