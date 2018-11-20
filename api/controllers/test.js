module.exports = async function action (req, res) {
  let user = await User.findOne({username: 'john.doe'});

  if (!req.session.userId) {
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.username);
    console.log(user.password);
    req.session.userId = user.username;
    req.session.isAuthenticated = true;
    return res.json(user);
  } else {
    console.log('Session already stored.');
    return res.status(420).send('You\'re already authenticated!');
  }

};
