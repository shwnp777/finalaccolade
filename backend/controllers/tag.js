const Tag = require('../models/tag');
const Job = require('../models/job');
const slugify = require('slugify');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
	const { name } = req.body;
	let slug = slugify(name).toLowerCase();

	let tag = new Tag({ name, slug });

	tag.save((err, data) => {
		if (err) {
			console.log(err);
			return res.status(400).json({
				error: errorHandler(err)
			});
		}
		res.json(data); // dont do this res.json({ tag: data });
	});
};

exports.list = (req, res) => {
	Tag.find({}).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			});
		}
		res.json(data);
	});
};

exports.read = (req, res) => {
	const slug = req.params.slug.toLowerCase();

	Tag.findOne({ slug }).exec((err, tag) => {
		if (err) {
			return res.status(400).json({
				error: 'Tag not found'
			});
		}
		// res.json(tag);
		Job.find({ tags: tag })
			.populate('categories', '_id name slug')
			.populate('tags', '_id name slug')
			.populate('postedBy', '_id jobTitle')
			.select(
				'_id title slug excerpt categories postedBy tags createdAt updatedAt'
			)
			.exec((err, data) => {
				if (err) {
					return res.status(400).json({
						error: errorHandler(err)
					});
				}
				res.json({ tag: tag, jobs: data });
			});
	});
};

exports.remove = (req, res) => {
	const slug = req.params.slug.toLowerCase();

	Tag.findOneAndRemove({ slug }).exec((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err)
			});
		}
		res.json({
			message: 'Tag deleted successfully'
		});
	});
};
