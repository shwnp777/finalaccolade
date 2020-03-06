const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			trim: true,
			required: true,
			max: 32,
			unique: true,
			index: true,
			lowercase: true
		},
		firstName: {
			type: String,
			trim: true,
			required: true,
			max: 32
		},
		lastName: {
			type: String,
			trim: true,
			required: true,
			max: 32
		},
		jobTitle: {
			type: String,
			trim: true,
			required: true,
			max: 32
		},
		cellPhone: {
			type: String,
			trim: true,
			max: 32
		},

		homePhone: {
			type: String,
			trim: true,
			max: 32
		},
		companyLocation: {
			type: String,
			trim: true,
			max: 32
		},
		emergencyName: {
			type: String,
			trim: true,
			max: 32
		},
		emergencyPhone: {
			type: String,
			trim: true,

			max: 32
		},
		userStreet: {
			type: String,
			trim: true,
			max: 32
		},
		suiteNumber: {
			type: String,
			trim: true,
			max: 10
		},
		userCity: {
			type: String,
			trim: true,
			max: 32
		},
		userState: {
			type: String,
			trim: true,
			max: 32
		},
		userZip: {
			type: Number,
			trim: true,
			max: 32
		},

		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true
		},
		profile: {
			type: String,
			required: true
		},
		hashed_password: {
			type: String,
			required: true
		},
		salt: String,
		about: {
			type: String
		},
		role: {
			type: Number,
			default: 0
		},
		photo: {
			data: Buffer,
			contentType: String
		},
		resetPasswordLink: {
			data: String,
			default: ''
		}
	},
	{ timestamp: true }
);

userSchema
	.virtual('password')
	.set(function(password) {
		// create a temporarity variable called _password
		this._password = password;
		// generate salt
		this.salt = this.makeSalt();
		// encryptPassword
		this.hashed_password = this.encryptPassword(password);
	})
	.get(function() {
		return this._password;
	});

userSchema.methods = {
	authenticate: function(plainText) {
		return this.encryptPassword(plainText) === this.hashed_password;
	},

	encryptPassword: function(password) {
		if (!password) return '';
		try {
			return crypto
				.createHmac('sha1', this.salt)
				.update(password)
				.digest('hex');
		} catch (err) {
			return '';
		}
	},

	makeSalt: function() {
		return Math.round(new Date().valueOf() * Math.random()) + '';
	}
};

module.exports = mongoose.model('User', userSchema);
