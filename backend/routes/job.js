const express = require('express');
const router = express.Router();
const {
	create,
	list,
	listAllJobsCategoriesTags,
	read,
	remove,
	update,
	photo,
	listRelated
} = require('../controllers/job');

const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post('/job', requireSignin, adminMiddleware, create);
router.get('/jobs', list);
router.post('/jobs-categories-tags', listAllJobsCategoriesTags);
router.get('/job/:slug', read);
router.delete('/job/:slug', requireSignin, adminMiddleware, remove);
router.put('/job/:slug', requireSignin, adminMiddleware, update);
router.get('/job/photo/:slug', photo);
router.post('/jobs/related', listRelated);

module.exports = router;
