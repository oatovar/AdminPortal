/**
 * login-controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function login(req, res) {
	let submittedUsername = req.param('inputEmail');
	let submittedPassword = req.param('inputPassword');

	if (submittedUsername === null && submittedPassword === null) {
		res.send('No creds.');
	}

	let user = User.findOne({
		username: submittedUsername,
	});

	await console.log(req.param('inputEmail'));
	await console.log(req.param('inputPassword'));

	if (!user) {
		console.log('User not found!');
		return res.redirect('/login');
	}
	if (submittedPassword !== user.password) {
		console.log('Passwords did not match up!');
		return res.redirect('/login');
	}
	else {
		console.log('Credentials validated');
	}

	return res.view('pages/dashboard');
};
