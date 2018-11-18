module.exports = async function action (req, res) {
	let user = await User.findOne({username: "john.doe"});

	console.log(user.firstName);
	console.log(user.lastName);
	console.log(user.username);
	console.log(user.password);

	return res.ok();
};
