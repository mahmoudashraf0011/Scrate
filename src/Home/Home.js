import React from 'react'
import Slider from './Slider/Slider'
import Abstract from './Abstract/Abstract'
import Features from './Features/Features'
import Trusted from './Trusted/Trusted'
import Popular from './Popular/Popular'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Special from './Special/Special'
import Reports from './Reports/Reports'
import Footer from './Footer/Footer'
import "./Home.css"

export default function Home() {
  return (
      <div className='home'>

            <Slider />
            <Abstract />
            <Features />
            <Trusted />
            <Popular />
            <Special />
            <Reports />
            <Footer />
      </div>
  )
}
