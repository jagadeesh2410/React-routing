import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import {Home} from'./Home.js';
import {Contact} from './Contact.js';
import {About} from './About.js';


const  Navbar =()=>{
  return(
    <div>

      <Router>
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact' >Contact</Link>
        <Routes>
          <Route path='/' element={<Home/>}/ >
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          
        </Routes>
      </Router>
    </div>


  );
}

export default Navbar;
