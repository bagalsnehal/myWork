import "./Menu.css";
import React from "react";
import Home from '../Home/index'
import About from '../About/index'
import Contact from '../Contact/index'
import ListsAndKeys from '../ListsAndKeys/index'
import ReusableComponents from '../ReusableComponents/index'
import LifeCycle from '../LifeCycle/index'
import ExceptionHandling from "../Exceptionhandling/ExceptionHandling";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from "../Login";

function template() {
  return (
    <div style={{marginBottom:'50px'}}>
    <div className="menu">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/lists-and-keys">Lists And Keys</a>
      <a href="/reusablecomponents">ReusableComponents</a>
      <a href="/life-cycle">LifeCycle</a>
      <a href="/exceptionhandling">ExceptionHandling</a>
      <a href="/Login">Login</a>
    </div> 
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/lists-and-keys" element={< ListsAndKeys/>}/>
      <Route path="/reusablecomponents" element={< ReusableComponents/>}/>
      <Route path="/life-cycle" element={< LifeCycle/>}/>
      <Route path="/exceptionhandling" element={<ExceptionHandling/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
};

export default template;
