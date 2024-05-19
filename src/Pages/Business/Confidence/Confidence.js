import React from 'react'
import "./Confidence.css"

export default function Confidence() {
  return (
    <section className='confidence'>
        <div className='confidence_header'>
            <h2 className='confidence_header_title'>Why People <span>Trust Us</span></h2>
            <p className='confidence_header_desc'>Suspendisse sodales arcu velit, non pretium massa accumsan non. Proin accumsan placerat mauris sit amet condimentum. Morbi luctus risus tincidunt urna hendrerit mollis.</p>
        </div>
        <div className='container'>
            <div className='confidence_items'>
                <div className='confidence_item'>
                    <div className='confidence_item_img'>
                        <img src='images/business/trust1.png' />
                    </div>
                    <h3 className='confidence_item_title'>Learning Engagement</h3>
                    <p className='confidence_item_desc'>Get valuable insights to user behavior and learning patterns. Create custom courses for empoyees.</p>

                </div>
                <div className='confidence_item'>
                    <div className='confidence_item_img'>
                        <img src='images/business/trust2.png' />
                    </div>
                    <h3 className='confidence_item_title'>Profesinal Courses</h3>
                    <p className='confidence_item_desc'>Give your organization access to 2,000+ courses. Accurately monitor and track your organization's training.</p>
                    
                </div>
                <div className='confidence_item'>
                    <div className='confidence_item_img'>
                        <img src='images/business/trust3.png' />
                    </div>
                    <h3 className='confidence_item_title'>Access to Content</h3>
                    <p className='confidence_item_desc'>Learn on any device anywhere. Access to content anytime, anywhere. View a summary of user activity.</p>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
