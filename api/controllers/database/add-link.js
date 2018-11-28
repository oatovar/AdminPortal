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
  let params = req.body;
  // sails.log(params);
  try {
    // Create new Object that will hold all the links for a specific group.
    let links = new Object();
    // Store the user group inside the new Object
    let group = params.group;
    // Delete the user group from the parameters so that we don't add it as a link.
    delete params.group;

    // We will then iterate over the objects key/value pairs, copying the even
    // numbered indexes as Names/Descriptions and the odd ones as URLs.
    // We will hold the keys in an array to iterate through them using an index
    // intead of an iterator. During refactoring, this would be formatted client-side.
    let keys = Object.keys(params);
    for (let i = 0; i < keys.length; i++) {
      if (i % 2 === 0) {
        links[params[keys[i]]] = params[keys[i+1]];
      }
    }
    // Printing out the final object for debugging.
    sails.log.debug('The following links will be set for the '
      + group + ' Group');
    sails.log.debug(links);
    let update = await Links.update({
      'Group': group,
    }).set({
      'Links': links,
    });
    return res.redirect('/users');
  } catch (err) {
    sails.log.debug(err);
    return res.status(500).send('An error has occurred. Please try again. Contact an admin '
      + 'if this continues to happen.');
  }
  // let linkToUpdate = await Links.findOne({Group: "Global"});

  // let user = await User.findOne({
  // username: req.body.username,
  // password: req.body.password
  // });

  // let currentLinks = await Links.findOne({ "Group": "Global"});
  // Add delete modifications here and save them in let say 'modifiedLinks'
  // let update = Links.update({"Group": "Global"}).set({
  // "Links": modifiedLinks,
  // });

  // let links = Links.update()
  // return res.redirect('/users');

};
