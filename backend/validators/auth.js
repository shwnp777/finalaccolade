const { check } = require('express-validator');

exports.userSignupValidator = [
	check('firstName')
		.not()
		.isEmpty()
		.withMessage('First name is required'),
	check('lastName')
		.not()
		.isEmpty()
		.withMessage('Last name is required'),
	check('jobTitle')
		.not()
		.isEmpty()
		.withMessage('Job title is required'),
	check('email')
		.isEmail()
		.withMessage('Must be a valid email address'),
	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long')
];

exports.userSigninValidator = [
	check('email')
		.isEmail()
		.withMessage('Must be a valid email address'),
	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long')
];
