/**
 * Module dependencies
 */

// ...


/**
 * database/users.js
 *
 * Users database.
 */
module.exports = async function users(req, res) {

  let groups = await Links.find({}); // Find all links.
  // sails.log.debug(groups)
  // sails.log.debug('Super Admin requested it\'s dashboard');
  if(req.session.user == undefined){
    return res.view('pages/entrance/login', {invalidLogin: true});
  } 
  else if(req.session.user.role == "Super Admin"){
    return res.view('pages/superadmin', { userGroups: groups });
  } 
  else {
    req.session.invalidLogin = false;
    return res.redirect('dashboard');
  }
};
