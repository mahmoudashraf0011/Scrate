import React from 'react'
import './Brief.css'

export default function Brief() {
  return (
    <section className='brief'>
      <div className='container'>
        <div className='brief_items'>
            <div className='brief_bg'>
                <img src='images/business/bg1.png' alt='digram' />
            </div>
            <div className='brief_item'>
                <h3 className='brief_item_title'>Scrate Education <span>for Your Business</span></h3>
                <p className='brief_item_desc'>The most engaging corporate learning platform available. Arm your talent with industry-leading skills in Business, Leadership, Data Science, Technology, and more. With access to real courses, from the world’s most respected universities, there’s no limit to what your workforce can achieve.</p>
                <button className='brief_item_btn'>read more</button>
            </div>
        </div>
      </div>

    </section>
  )
}
