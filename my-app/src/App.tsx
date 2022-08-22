import './App.css';

import { Route, Routes } from 'react-router-dom';

import Courses from './components/Courses';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import React from 'react';
import Students from './components/Students';
import Welcome from './components/Welcome';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
      <Routes>
          <Route path="" element={<Welcome/>}></Route>
          <Route path="welcome" element={<Welcome/>}></Route>
          <Route path="students" element={<Students/>}></Route>
          <Route path="courses" element={<Courses/>}></Route>
        </Routes>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
