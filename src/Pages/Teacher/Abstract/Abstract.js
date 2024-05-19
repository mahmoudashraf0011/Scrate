import React from 'react'
import './Abstract.css'

export default function Abstract() {
  return (
    <section className='abstract'>
        <div className='container'>
            <div className='abstract_items'>
                <div className='abstract_content'>
                    <h3 className='abstract_content_title'>Become <span>a Teacher with Us</span></h3>
                    <p className='abstract_content_desc'>The Scrate Education degree is equal in academic standard to a degree from any other university. The Scrate Education is subject to the same quality assurance procedures as all other universities, and uses external assessors and examiners to ensure quality standards. We’re consistently rated ‘excellent’ in teaching assessments.</p>
                    <p className='abstract_content_note'><i class="fa fa-quote-left" aria-hidden="true"></i> It’s really clear that the most precious resource we all have is time.</p>
                    <button className='abstract_content_btn'>start now</button>
                </div>
                <div className='abstract_bg'>
                    <img src='images\Become_a_teacher\bg1.png' alt='abstract' />
                </div>
            </div>
        </div>
    </section >
  )
}
