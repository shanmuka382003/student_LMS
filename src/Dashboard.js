// Dashboard.js

import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LineChart from "./LineChart";
import { UserData } from "./Data";
import './Dashboard.css';
import { Line } from 'react-chartjs-2';
import SGPAChart from './LineChart';


const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.semester),
    datasets: [
      {
        label: "SGPA",
        data: UserData.map((data) => data.sgpa),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [userData1, setUserData1] = useState({
    labels: UserData.map((data) => data.semester),
    datasets: [
      {
        label: "CGPA",
        data: UserData.map((data) => data.cgpa),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
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

      <section className="main">
        <div className="main-top">
          <h1>Overview</h1>
          <i className="fas fa-user-cog"></i>
        </div>
        <div className="main-skills">
          <div className="card">
            <h3>Courses</h3>
            <p>Join Over 1 million Students.</p>
          </div>
          <div className="card">
            <h3>Exams</h3>
            <p>Join Over 3 million Students.</p>
          </div>
        </div>
        <div style={{ width: 700 }}>
          <br/>
          <LineChart chartData={userData} />
          <br/>
          <LineChart chartData={userData1} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;