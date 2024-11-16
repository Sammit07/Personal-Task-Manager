// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="col-md-8 offset-md-2 text-center">
      <h1>Welcome to Task Manager</h1>
      <p className="lead">A simple task management app to keep track of your to-do list.</p>
      
      <h3>About Us</h3>
      <p>
        This is a task management application built using the MERN stack (MongoDB, Express, React, Node.js).
        It allows you to keep track of your daily tasks, organize your work, and boost productivity.
      </p>
      
      <div className="mt-4">
        <Link className="btn btn-primary mx-2" to="/login">Login</Link>
        <Link className="btn btn-secondary mx-2" to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Home;
