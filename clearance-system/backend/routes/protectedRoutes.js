const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Admin-only route
router.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin, you can see everything.' });
});

// Department-only route
router.get('/department', authMiddleware, roleMiddleware('department'), (req, res) => {
  res.json({ message: 'Welcome Department, you can see your department data.' });
});

// Student-only route
router.get('/student', authMiddleware, roleMiddleware('student'), (req, res) => {
  res.json({ message: `Welcome ${req.user.role}, you can see your own requests.` });
});

module.exports = router;
