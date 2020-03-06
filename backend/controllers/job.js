const Job = require('../models/job');
const Category = require('../models/category');
const Tag = require('../models/tag');
const formidable = require('formidable');
const slugify = require('slugify');
const stripHtml = require('string-strip-html');
const _ = require('lodash');
const { errorHandler } = require('../helpers/dbErrorHandler');
const fs = require('fs');
const { smartTrim } = require('../helpers/job');

exports.create = (req, res) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				error: 'Image could not upload'
			});
		}

		const { title, body, categories, tags } = fields;

		if (!title || !title.length) {
			return res.status(400).json({
				error: 'Job title is required'
			});
		}

		if (!body || body.length < 100) {
			return res.status(400).json({
				error: 'Content is too short'
			});
		}

		if (!categories || categories.length === 0) {
			return res.status(400).json({
				error: 'At least one category is required'
			});
		}

		if (!tags || tags.length === 0) {
			return res.status(400).json({
				error: 'At least one tag is required'
			});
		}

		let job = new Job();
		job.title = title;
		job.body = body;
		job.excerpt = smartTrim(body, 120, ' ', ' ...');
		job.slug = slugify(title).toLowerCase();
		job.mtitle = `${title} | ${process.env.APP_NAME}`;
		job.mdesc = stripHtml(body.substring(0, 160));
		job.postedBy = req.user._id;
		// categories and tags
		let arrayOfCategories = categories && categories.split(',');
		let arrayOfTags = tags && tags.split(',');

		if (files.photo) {
			if (files.photo.size > 50000000) {
				return res.status(400).json({
					error: 'Image should be less then 5mb in size'
				});
			}
			job.photo.data = fs.readFileSync(files.photo.path);
			job.photo.contentType = files.photo.type;
		}

		job.save((err, result) => {
			if (err) {
				return res.status(400).json({
					error: errorHandler(err)
				});
			}
			// res.json(result);
			Job.findByIdAndUpdate(
				result._id,
				{ $push: { categories: arrayOfCategories } },
				{ new: true }
			).exec((err, result) => {
				if (err) {
					return res.status(400).json({
						error: errorHandler(err)
					});
				} else {
					Job.findByIdAndUpdate(
						result._id,
						{ $push: { tags: arrayOfTags } },
						{ new: true }
					).exec((err, result) => {
						if (err) {
							return res.status(400).json({
								error: errorHandler(err)
							});
						} else {
							res.json(result);
						}
					});
				}
			});
		});
	});
};

// list, listAllJobsCategoriesTags, read, remove, update, photo

exports.list = (req, res) => {
	Job.find({})
		.populate('categories', '_id name slug')
		.populate('tags', '_id name slug')
		.populate('postedBy', '_id firstName jobTitle username')
		.select(
			'_id title slug excerpt categories tags postedBy createdAt updatedAt'
		)
		.exec((err, data) => {
			if (err) {
				return res.json({
					error: errorHandler(err)
				});
			}
			res.json(data);
		});
};

exports.listAllJobsCategoriesTags = (req, res) => {
	let limit = req.body.limit ? parseInt(req.body.limit) : 10;
	let skip = req.body.skip ? parseInt(req.body.skip) : 0;

	let jobs;

	let categories;
	let tags;

	Job.find({})
		.populate('categories', '_id name slug')
		.populate('tags', '_id name slug')
		.populate('postedBy', '_id firstName jobTitle username profile')
		.sort({ createdAt: -1 })
		.skip(skip)
		.limit(limit)
		.select(
			'_id title slug excerpt categories tags postedBy createdAt updatedAt'
		)
		.exec((err, data) => {
			if (err) {
				return res.json({
					error: errorHandler(err)
				});
			}
			jobs = data; // jobs
			// get all categories
			Category.find({}).exec((err, c) => {
				if (err) {
					return res.json({
						error: errorHandler(err)
					});
				}
				categories = c; // categories
				// get all tags
				Tag.find({}).exec((err, t) => {
					if (err) {
						return res.json({
							error: errorHandler(err)
						});
					}
					tags = t;
					// return all jobs categories tags
					res.json({ jobs, categories, tags, size: jobs.length });
				});
			});
		});
};

exports.read = (req, res) => {
	const slug = req.params.slug.toLowerCase();
	Job.findOne({ slug })
		// .select("-photo")
		.populate('categories', '_id name slug')
		.populate('tags', '_id name slug')
		.populate('postedBy', '_id firstName jobTitle username')
		.select(
			'_id title body slug mtitle mdesc categories tags postedBy createdAt updatedAt'
		)
		.exec((err, data) => {
			if (err) {
				return res.json({
					error: errorHandler(err)
				});
			}
			res.json(data);
		});
};

exports.remove = (req, res) => {
	const slug = req.params.slug.toLowerCase();
	Job.findOneAndRemove({ slug }).exec((err, data) => {
		if (err) {
			return res.json({
				error: errorHandler(err)
			});
		}
		res.json({
			message: 'Job deleted successfully'
		});
	});
};

exports.update = (req, res) => {
	const slug = req.params.slug.toLowerCase();

	Job.findOne({ slug }).exec((err, oldJob) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			});
		}

		let form = new formidable.IncomingForm();
		form.keepExtensions = true;

		form.parse(req, (err, fields, files) => {
			if (err) {
				return res.status(400).json({
					error: 'Image could not upload'
				});
			}

			let slugBeforeMerge = oldJob.slug;
			oldJob = _.merge(oldJob, fields);
			oldJob.slug = slugBeforeMerge;

			const { body, desc, categories, tags } = fields;

			if (body) {
				oldJob.excerpt = smartTrim(body, 320, ' ', ' ...');
				oldJob.desc = stripHtml(body.substring(0, 160));
			}

			if (categories) {
				oldJob.categories = categories.split(',');
			}

			if (tags) {
				oldJob.tags = tags.split(',');
			}

			if (files.photo) {
				if (files.photo.size > 10000000) {
					return res.status(400).json({
						error: 'Image should be less then 1mb in size'
					});
				}
				oldJob.photo.data = fs.readFileSync(files.photo.path);
				oldJob.photo.contentType = files.photo.type;
			}

			oldJob.save((err, result) => {
				if (err) {
					return res.status(400).json({
						error: errorHandler(err)
					});
				}
				// result.photo = undefined;
				res.json(result);
			});
		});
	});
};

exports.photo = (req, res) => {
	const slug = req.params.slug.toLowerCase();
	Job.findOne({ slug })
		.select('photo')
		.exec((err, job) => {
			if (err || !job) {
				return res.status(400).json({
					error: errorHandler(err)
				});
			}
			res.set('Content-Type', job.photo.contentType);
			return res.send(job.photo.data);
		});
};

exports.listRelated = (req, res) => {
	// console.log(req.body.job);
	let limit = req.body.limit ? parseInt(req.body.limit) : 3;
	const { _id, categories } = req.body.job;

	Job.find({ _id: { $ne: _id }, categories: { $in: categories } })
		.limit(limit)
		.populate('postedBy', '_id jobTitle profile')
		.select('title slug excerpt postedBy createdAt updatedAt')
		.exec((err, jobs) => {
			if (err) {
				return res.status(400).json({
					error: 'Jobs not found'
				});
			}
			res.json(jobs);
		});
};
