import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styelApp from './App.module.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Headers from './Components/Navbar/Navbar'

import Settings from './Components/Settings/Settings';
import Projects from './Components/Projects/Projects';
import Courses from './Components/Courses/Courses';
import Friends from './Components/Friends/Friends';
import Files from './Components/Files/Files';
import Plans from './Components/Plans/Plans';
import Profile from './Components/Profile/Profile';

export default function App() {

  return (
    <>
      <div className={' bg-offwhite'} >
        <Headers />
        <div className={' mt-70' + ' ' + styelApp.scoup}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='Settings' element={<Settings />} />
            <Route path='Profile' element={<Profile />} />
            <Route path='Projects' element={<Projects />} />
            <Route path='Courses' element={<Courses />} />
            <Route path='Friends' element={<Friends />} />
            <Route path='Files' element={<Files />} />
            <Route path='Plans' element={<Plans />} />
          </Routes>
        </div>
      </div>

    </>
  )
}
