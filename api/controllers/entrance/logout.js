/**
 * Module dependencies
 */

// ...


/**
 * entrance/logout.js
 *
 * Logout entrance.
 */
module.exports = async function logout(req, res) {

  if(req.session.isAuthenticated) {
    console.log(req.session);
    req.session.destroy();
    console.log('Session value: ');
    console.log(req.session);
  }
  return res.redirect('/login');

};
