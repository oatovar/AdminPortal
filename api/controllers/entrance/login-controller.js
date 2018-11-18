/**
 * login-controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = async function login(req, res) {
	let submittedUsername = req.body.username;
	let submittedPassword = req.body.password;

	// if (submittedUsername === null && submittedPassword === null) {
	// 	res.send('No creds.');
	// }
	//
	// let user = User.find({
	//
	// });

	var db = sails.getDatastore().manager;

	let user = db.collection('Admin-Users').find({"username": submittedUsername}).toArray(console.log);

	await console.log("Username Submitted: " + submittedUsername);
	await console.log("Password Submitted: " + submittedPassword);

	console.log(user);

	// if (!user) {
	// 	console.log('User not found!');
	// 	return res.redirect('/login');
	// }
	//
	// await console.log(user);
	//
	// if (submittedPassword !== user.password) {
	// 	console.log('Passwords did not match up!');
	// 	return res.redirect('/login');
	// }
	// else {
	// 	console.log('Credentials validated');
	// }

	return res.view('pages/dashboard', {profile: user});
};
