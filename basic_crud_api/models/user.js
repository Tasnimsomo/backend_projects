const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 100
	},

	lastName: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 100
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 100
	},

const User = mongoose.model('User', userSchema);
module.exports = User;
