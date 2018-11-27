/**
 * Module dependencies
 */

// ...


/**
 * database/add-link.js
 *
 * Add link.
 */
module.exports = async function addLink(req, res) {

  let linkToUpdate = await Links.findOne({Group: "Global"});
  console.log(linkToUpdate);
/*
  let user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });*/

  //let currentLinks = await Links.findOne({ "Group": "Global"});
// Add delete modifications here and save them in let say 'modifiedLinks'
  //let update = Links.update({"Group": "Global"}).set({
    //"Links": modifiedLinks,
//});

  let links = Links.update()
  sails.log.debug('TODO: implement');
  return res.ok();

};
