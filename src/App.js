import React from 'react';
import './App.css';


import Home from './Home/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUS/AboutUs';
import Teacher from './Pages/Teacher/Teacher';
import Business from './Pages/Business/Business';
import Gallery from './Pages/Gallery/Gallery';
import Team from './Pages/Team/Team';


function App() {

  return (
      <BrowserRouter>
        <div className='App'>
              <Routes>
                <Route path='/' exact Component={Home} />
                <Route path='/AboutUS' exact Component={AboutUs} />
                <Route path='/become_a_teacher' exact Component={Teacher} />
                <Route path='/for_business' exact Component={Business} />
                <Route path='/gallery' exact Component={Gallery} />
                <Route path='/ourTeam' exact Component={Team} />
              </Routes>

        </div>
      </BrowserRouter>




  );
}

export default App;
