// Course.js
import Count from "./count";
import "./Sample.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Course() {
  return (
    <div className="container1">
      <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/" className="logo"> {/* Use Link instead of anchor */}
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
    <div className="main">
      <h1>Courses</h1>
      <div className="completed" >
        <h2>COMPLETED</h2>
        <li>course -1  </li><br/>
        <li>course -2</li>
      </div>
      <br />
      <div className="ongoing">
        <h2>ONGOING</h2>
        <ul>
          <li>
            course-1
            <span className="count-wrapper">
              <Count />
              <div className="count-content"></div>
            </span>
          </li>
          <br/>
          <li>
            course-2
            <span className="count-wrapper">
              <Count />
              <div className="count-content"></div>
            </span>
          </li>
        </ul>
      </div>
      <br />
      <div className="upcoming">
        <h2>UPCOMING</h2>
        <ul>
          <li>
            course -1
            <span className="count-wrapper">
              <Count />
              <div className="count-content"></div>
            </span>
          </li>
          <br/>
          <li>
            course -2
            <span className="count-wrapper">
              <Count />
              <div className="count-content"></div>
            </span>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}