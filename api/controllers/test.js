module.exports = async function action (req, res) {
  // let user = await User.findOne({username: 'john.doe'});
  //
  // if (!req.session.userId) {
  //   console.log(user.firstName);
  //   console.log(user.lastName);
  //   console.log(user.username);
  //   console.log(user.password);
  //   req.session.userId = user.username;
  //   req.session.isAuthenticated = true;
  //   return res.json(user);
  // } else {
  //   console.log('Session already stored.');
  //   return res.status(420).send('You\'re already authenticated!');
  // }
  
  //let linkToUpdate = await Links.findOne({Group: "Global"});
  //console.log(linkToUpdate);
  //console.log(linkToUpdate.Links);
/*
  let user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  });*/

  //let currentLinks = await Links.findOne({ "Group": "Global"});
// Add delete modifications here and save them in let say 'modifiedLinks'
  /*await Links.updateOne({Group: "Global"})
    .set({
      Links: {
        "Description 1" : "modifiedLink 1", 
        "Description 2" : "modifiedLink 2"
      }
    });
  linkToUpdate = await Links.findOne({Group: "Global"});
  console.log(linkToUpdate)
  res.ok();
*/
  //--------------------
  let currentLinks = await Links.findOne({ Group: "Global"});

  let testLinks = {
    'linkOne': 'One',
    'linkTwo': 'Two',
  };

  for (let entry in testLinks) {
    currentLinks.Links[entry] = testLinks[entry];
  }

  await Links.update({"Group": "Global"}).set({
      "Links": currentLinks.Links,
  });

  res.ok();
};
