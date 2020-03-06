const express = require('express');
const router = express.Router();
const {
	requireSignin,
	authMiddleware,
	adminMiddleware
} = require('../controllers/auth');
const {
	read,
	listUsers,
	publicProfile,
	update,
	photo
} = require('../controllers/user');

router.get('/user/profile', requireSignin, authMiddleware, read);
router.get('/users', listUsers);
router.get('/user/:username', publicProfile, authMiddleware);
router.put('/user/update', requireSignin, authMiddleware, update);
router.get('/user/photo/:username', photo);

module.exports = router;
