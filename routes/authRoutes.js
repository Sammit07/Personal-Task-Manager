// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Make sure path is correct

const router = express.Router();

router.post('/register', registerUser); // Ensure registerUser is defined in authController
router.post('/login', loginUser);       // Ensure loginUser is defined in authController

module.exports = router;

