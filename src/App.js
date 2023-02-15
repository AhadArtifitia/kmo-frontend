import React from 'react';
import './App.css';
import About from './routes/About.js'
import Institutions from './routes/Institutions.js'
import Courses from './routes/Courses'
import Contact from './routes/Contact'
import Career from './routes/Career'
import Alumni from './routes/Alumni'
import {Route, Routes} from 'react-router-dom'
import Admission from './routes/Admission';
import Faculty from './routes/Faculty';
import StudentsCorner from './routes/StudentsCorner';
import Home from './routes/Home';
import Administration from './routes/Administration';
import Departments from './routes/Departments';
import Fee from './routes/Fee';
import Gallery from './routes/Gallery';
import English from './routes/English';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/institutions' element={<Institutions />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/english' element={<English />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/alumni' element={<Alumni />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/studentscorner' element={<StudentsCorner />} />
        <Route path='/administration' element={<Administration />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/feestructure' element={<Fee />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
