const User = require('../models/user');
const Job = require('../models/job');
const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.read = (req, res) => {
	req.profile.hashed_password = undefined;
	return res.json(req.profile);
};

exports.publicProfile = (req, res) => {
	let username = req.params.username;
	let user;
	let jobs;

	User.findOne({ username }).exec((err, userFromDB) => {
		if (err || !userFromDB) {
			return res.status(400).json({
				error: 'User not found'
			});
		}
		user = userFromDB;
		let userId = user._id;
		Job.find({ postedBy: userId })
			.populate('categories', '_id name slug')
			.populate('tags', '_id name slug')
			.populate('postedBy', '_id jobTitle firstName')
			.limit(10)
			.select(
				'_id title slug excerpt categories tags postedBy createdAt updatedAt'
			)
			.exec((err, data) => {
				if (err) {
					return res.status(400).json({
						error: errorHandler(err)
					});
				}
				user.photo = undefined;
				user.hashed_password = undefined;
				res.json({
					user,
					jobs: data
				});
			});
	});
};

// ----------------------------- I am adding a list of ALL users down here -------------------------

exports.listUsers = (req, res) => {
	let users;

	User.find({})
		.select(
			'_id username firstName lastName cellPhone emergencyName emergencyPhone jobTitle email'
		)
		.exec((err, data) => {
			if (err) {
				return res.json({
					error: errorHandler(err)
				});
			}
			users = data; // users

			// return all jobs categories tags
			res.json({ users, size: users.length });
		});
};

// ----------------------------- I am adding a list of ALL users up here -------------------------

exports.update = (req, res) => {
	let form = new formidable.IncomingForm();
	form.keepExtension = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				error: 'Photo could not be uploaded'
			});
		}
		let user = req.profile;
		user = _.extend(user, fields);

		if (fields.password && fields.password.length < 6) {
			return res.status(400).json({
				error: 'Password should be min 6 characters long'
			});
		}

		if (files.photo) {
			if (files.photo.size > 10000000) {
				return res.status(400).json({
					error: 'Image should be less than 1mb'
				});
			}
			user.photo.data = fs.readFileSync(files.photo.path);
			user.photo.contentType = files.photo.type;
		}

		user.save((err, result) => {
			if (err) {
				return res.status(400).json({
					error: errorHandler(err)
				});
			}
			user.hashed_password = undefined;
			user.salt = undefined;
			user.photo = undefined;
			res.json(user);
		});
	});
};

exports.photo = (req, res) => {
	const username = req.params.username;
	User.findOne({ username }).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User not found'
			});
		}
		if (user.photo.data) {
			res.set('Content-Type', user.photo.contentType);
			return res.send(user.photo.data);
		}
	});
};
