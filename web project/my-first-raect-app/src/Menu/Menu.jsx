import "./Menu.css";
import React from "react";
import Home from '../Home/index';
import About from '../About/index';
import Contact from '../Contact/index';
import Services from '../Services/index';
import {HashRouter,Routes,Route} from "react-router-dom";
function template() {
  return (
    <div>
     <div className="menu">
      
        <a href="#/home">HOME</a>
        <a href="#/about">ABOUT</a>
        <a href="#/contact">CONTACT</a>
        <a href="#/services">SERVICES</a>
      
    </div>
    <HashRouter>
    <Routes>
      <Route path='home' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='services' element={<Services/>}></Route>
      </Routes>
      </HashRouter>
    </div>
  );
};

export default template;
