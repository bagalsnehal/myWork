import "./Menu.css";
import React from "react";
import Home from '../Home/index'
import About from '../About/index'
import Contact from '../Contact/index'
import { BrowserRouter,Routes,Route } from "react-router-dom";

function template() {
  return (
    <div>
       <div className="menu">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
    <BrowserRouter>
    <Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
  

    </div>
  );
};

export default template;
