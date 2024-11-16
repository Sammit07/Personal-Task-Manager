// src/index.js
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Set the base URL once for Axios
axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(<App />, document.getElementById('root'));
