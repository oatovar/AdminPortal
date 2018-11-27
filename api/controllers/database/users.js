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
  return res.view('pages/superadmin', { userGroups: groups });

};
