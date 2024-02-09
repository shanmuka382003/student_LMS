//sem.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Sample.css"
import images1 from './images/sres1.jpg'
import images2 from './images/sres2.jpg'
import images3 from './images/sres3.jpg'
import images4 from './images/sres4.jpg'

function Semester(){
    return(
        <div className='container1'>
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <Link to="/dashboard" className="logo"> {/* Use Link instead of anchor */}
                    <span className="nav-item">Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      <span className="nav-item">Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/course">
                      <span className="nav-item">Courses</span>
                    </Link>
                  </li>
          <li>
            <Link to="/semester">
              <span className="nav-item">Gradebook</span>
            </Link>
          </li>
          <li>
            <Link to="/exam">
              <span className="nav-item">Assignments</span>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Log out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
        <div className='entire'>
           <h1>SEM-1</h1>
            <img src={images1} alt=" "/>
            <h1>Sem-2</h1>
            <img src={images2} alt=" "/>
            <h1>SEM-3</h1>
            <img src={images3} alt=" "/>
            <h1>Sem-4</h1>
            <img src={images4} alt=" "/>
              
        </div>
        </div>
       
    );
    
}
export default Semester;