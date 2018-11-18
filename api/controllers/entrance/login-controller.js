/**
 * login-controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function login(req, res) {
	let submittedUsername = req.body.username;
	let submittedPassword = req.body.password;

	if (submittedUsername === null && submittedPassword === null) {
		res.send('No creds.');
	}

	let user = await User.findOne({
		username: submittedUsername,
	});

	console.log(user);

	if (user === null) {
		console.log('User not found!');
		return res.redirect('/login');
	}

	if (submittedPassword !== user.password) {
		console.log('Passwords did not match up!');
		console.log('Submitted: ' + submittedPassword);
		console.log('Expected: ' + user.password);
		return res.redirect('/login');
	}
	else {
		console.log('Credentials validated');
		return res.view('pages/dashboard', {profile: user});
	}
};
