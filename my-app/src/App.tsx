import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
