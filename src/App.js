// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // App.js
// import React from 'react';
// import { AuthProvider } from './AuthContext';
// import CourseList from './CourseList';
// import AdminPanel from './AdminPanel';
// import Login from './Login'; // Import the Login component
// import store from './store';
// import { Provider } from 'react-redux';
// import Dashboard from './Dashboard';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <AuthProvider>
//         <div>
//           {/* <Login /> */}
//           {/* <CourseList /> */}
//           {/* <AdminPanel /> */}
//           <Dashboard />
//         </div>
//       </AuthProvider>
//     </Provider>
//   );
// };

// export default App;

// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile'; // Import your Profile component
import Course from './Course'; // Import your Courses component
import Semester from './sem'; // Import your Gradebook component
import Exam from './Exam';
import Login from './Login';
// import Logout from './Logout'; // Import your Logout component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course" element={<Course />} />
        <Route path="/Semester" element={<Semester />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
