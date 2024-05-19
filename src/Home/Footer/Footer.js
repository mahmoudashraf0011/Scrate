import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer_items'>

                <div className='footer_data'>
                    <div className='footer_logo'>
                        <img src='images/logo1.png' />
                    </div>
                    <div className='footer_data_details'>
                        <h4 className='footer_location'>Location:</h4>
                        <p className='footer_location_desc'>47 Destiny Common, South Jolieview</p>
                        <h4 className='footer_hours'>Office Hours:</h4>
                        <p className='footer_hours_desc'>8:00am – 5:00pm</p>
                        <h4 className='footer_tel'>Telephone:</h4>
                        <p className='footer_tel_desc'>826-696-8370</p>
                        <h4 className='footer_email'>Email:</h4>
                        <p className='footer_email_desc'>info@example.com</p>
                    </div>
                </div>
                <div className='footer_explore'>
                    <h2 className='footer_explore_header'>explore</h2>
                    <ul className='footer_explore_list'>
                            <li>History & Mission</li>
                            <li>Administration</li>
                            <li>Community</li>
                            <li>Around the World</li>
                            <li>News Network</li>
                            <li>Visitor Information</li>
                            <li>Social Media</li>
                            <li>Our Campuses</li>
                            <li>Campus Directories</li>
                            <li>Employment</li>
                    </ul>
                </div>
                <div className='footer_admission'>
                    <h2 className='footer_admission_header'>ADMISSIONS</h2>
                    <ul className='footer_admission_list'>
                            <li>Undergraduate</li>
                            <li>By School</li>
                            <li>Process</li>
                            <li>Visitor Information</li>
                            <li>For Prospective Parents</li>
                    </ul>
                </div>
                <div className='footer_research'>
                    <h2 className='footer_search_header'>Research</h2>
                    <ul className='footer_research_list'>
                            <li>Applied Physics Laboratory</li>
                            <li>Research Projects Administration</li>
                            <li>Funding Opportunities</li>
                            <li>Undergraduate Research</li>
                            <li>Resources</li>
                            <li>Health & Medicine</li>
                            <li>Social Sciences, Humanities & Arts</li>
                            <li>Natural Sciences, Engineering & Tech</li>
                            <li>Global Research</li>
                            <li>Technology Transfer</li>
                    </ul>
                </div>

            </div>  
            <div className='footer_down'>
                <p className='footer_copywrite'>&copy; 2024 Scrate Education. All Rights Reserved</p>
                <p className='footer_privacy'><span>PRIVACY POLICY</span>   |   <span>TERMS OF USE</span></p>
            </div>
        </div>

    </footer>
  )
}
