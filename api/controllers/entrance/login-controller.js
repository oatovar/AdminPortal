/**
* login-controller
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
*/

module.exports = async function login(req, res) {
  if (req.session.isAuthenticated) {
    return res.redirect('/dashboard');
  }
 
  if (req.body.username === null || req.body.password === null) {
    return res.redirect('/login');
  }
 
  let user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });
 
  if (user === undefined) {
    req.session.invalidLogin = true;
    return res.redirect('/login');
  } else {
    req.session.invalidLogin = false;
    req.session.user = user;
    req.session.isAuthenticated = true;
    return res.redirect('/dashboard');
  }
 };
