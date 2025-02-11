const express = require('express');
const { registerUser, authUser } = require('../controllers/authController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);

// Örnek korunan rota
router.get('/admin', protect, admin, (req, res) => {
  res.status(200).json({ message: 'Admin content' });
});

module.exports = router;