import React from 'react'
import './Plan.css'

export default function Plan() {
  return (
    <section className='plan'>
        <div className='plan_header'>
            <h2 className='plan_header_title'>Choose <span>Your Plan</span></h2>
            <p className='plan_header_desc'>Set a plan, start learning and unlock your potencial. Proin accumsan placerat mauris sit amet condimentum. Morbi luctus risus tincidunt urna hendrerit mollis.</p>
        </div>
        <div className='container'>
            <div className='plan_items'>
                <div className='plan_item'>
                    <div className='plan_item_head'>
                        <h5 className='plan_title'>BEGGINER PACKAGE</h5>
                        <p className='plan_price'><span className='dollar'>$</span>129.90 <span>/ month</span></p>
                    </div>
                    <ul className='plan_items_list'>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> SEO Strategy Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> HTML5 & CSS Video Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> English Learning Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> Business & Internal Course</li>
                        <li><i className="fa fa-times wrong" aria-hidden="true"></i> Interior Design</li>
                        <li><i className="fa fa-times wrong" aria-hidden="true"></i> Geometry Course</li>
                    </ul>
                    <button className='plan_btn'>select plan</button>
                </div>
                <div className='plan_item'>
                    <div className='plan_item_head'>
                        <h5 className='plan_title'>BEGGINER PACKAGE</h5>
                        <p className='plan_price'><span className='dollar'>$</span>129.90 <span>/ month</span></p>
                    </div>
                    <ul className='plan_items_list'>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> SEO Strategy Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> HTML5 & CSS Video Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> English Learning Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> Business & Internal Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> Interior Design</li>
                        <li><i className="fa fa-times wrong" aria-hidden="true"></i> Geometry Course</li>
                    </ul>
                    <button className='plan_btn'>select plan</button>
                </div>
                <div className='plan_item'>
                    <div className='plan_item_head'>
                        <h5 className='plan_title'>BEGGINER PACKAGE</h5>
                        <p className='plan_price'><span className='dollar'>$</span>129.90 <span>/ month</span></p>
                    </div>
                    <ul className='plan_items_list'>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> SEO Strategy Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> HTML5 & CSS Video Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> English Learning Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> Business & Internal Course</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> Interior Design</li>
                        <li><i className="fa fa-check right" aria-hidden="true"></i> Geometry Course</li>
                    </ul>
                    <button className='plan_btn'>select plan</button>
                </div>
            </div>
        </div>
    </section>
  )
}
