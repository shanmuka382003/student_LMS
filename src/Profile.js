// Profile.js
import React from 'react';
import './Profile.css';
import './Dashboard.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Profile = () => {
  return (
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
    
    <div className='main'>
      <h1>My Profile</h1>

      {/* Personal Details */}
      <div className="personaldetails">
        <h2><b>Personal Details</b></h2>
        <ul>
          <li><b>Name:</b> Student</li>
          <li><b>Phone Number:</b> 1234567890</li>
          <li><b>Personal Email:</b> example1@gmail.com</li>
          <li><b>College Email:</b> regno@college.ac.in</li>
          <li><b>Address:</b> </li>
          <li><b>LinkedIn:</b> www.linkedin.com/example</li>
          <li><b>Github:</b> https://github.com/example</li>
        </ul>
      </div>

      <br />

      {/* Academic Details */}
      <div className="academicdetails">
        <h2><b>Academic Details</b></h2>
        <ul>
          <li><b>Roll Number:</b> 21501a12a3</li>
          <li><b>Course:</b> Bachelor of Technology</li>
          <li><b>Branch:</b> Information Technology</li>
          <li><b>Year and Semester:</b> III year, second semester</li>
          <li><b>Current CGPA:</b> 9.00</li>
        </ul>
      </div>

      <br />

      {/* Projects */}
      <div className="projects">
        <h2><b>Projects</b></h2>
        <dl>
          <dt><b>Project1</b></dt>
          <dd>-Project1 Description</dd>
          <dt><b>Project2</b></dt>
          <dd>-Project2 Description</dd>
        </dl>
      </div>

      <br />

      {/* Achievements and Certificates */}
      <div className="achievementsandcertificates">
        <h2><b>Achievements and Certificates</b></h2>
        <dl>
          <dt><b>Achievement1</b></dt>
          <dd>-Achievement1 Description</dd>
          <dt><b>Achievement2</b></dt>
          <dd>-Achievement2 Description</dd>
        </dl>
      </div>
    </div>
    </div>
  );
};

export default Profile;