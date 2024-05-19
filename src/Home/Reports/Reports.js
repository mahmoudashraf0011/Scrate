import React from 'react'
import './Reports.css'
import { NavLink } from 'react-router-dom'

export default function Reports() {
  return (
    <section className='reports'>
        <div className='reports_header'>
            <h2 className='reports_header_title'>News & <span>Events</span></h2>
            <p className='reports_header_desc'>Suspendisse sodales arcu velit, non pretium massa accumsan non. Proin accumsan placerat mauris sit amet condimentum. Morbi luctus risus tincidunt urna hendrerit mollis.</p>
      </div>
      <div className='container'>
      <div className='reports_items'>
        <div className='reports_news'>
            <div className='reports_news_item'>
                <div className='reports_news_item_img'>
                    <img src='images/New/1.jpg'/>
                </div>
                <div className='reports_news_item_content'>
                    <span className='reports_news_item_content_date'>February 9, 2022</span>
                    <p className='reports_news_item_content_desc'>Our Students Love Studying</p>
                    <NavLink to="#" className='reports_news_item_content_btn' >Read More <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
                </div>
            </div>
            <div className='reports_news_item'>
                <div className='reports_news_item_img'>
                    <img src='images/New/2.jpg'/>
                </div>
                <div className='reports_news_item_content'>
                    <span className='reports_news_item_content_date'>March 23, 2022</span>
                    <p className='reports_news_item_content_desc'>The First Twelve Years</p>
                    <NavLink to="#" className='reports_news_item_content_btn'>Read More <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
                </div>
            </div>
        </div>
        <div className='reports_events'>
            <div className='reports_events_item'>
                <h2 className='reports_events_item_title'>Future of Web APPS</h2>
                <p className='reports_events_item_desc'>at Manhattan Business Center</p>
                <NavLink to="#" className='reports_events_item_btn' >View Event <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
            </div>
            <div className='reports_events_item'>
                <h2 className='reports_events_item_title'>Geometry Course</h2>
                <p className='reports_events_item_desc'>at Manhattan Business Center</p>
                <NavLink to="#" className='reports_events_item_btn' >View Event <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
            </div>
            <div className='reports_events_item'>
                <h2 className='reports_events_item_title'>Spring Camping</h2>
                <p className='reports_events_item_desc'>at Manhattan Business Center</p>
                <NavLink to="#" className='reports_events_item_btn' >View Event <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
            </div>
        </div>
      </div>
      </div>

      
    </section>
  )
}
