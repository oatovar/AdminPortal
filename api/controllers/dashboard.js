module.exports = async function showDashboard (req, res) {
  if (req.session.isAuthenticated) {
    // Grab links that are assigned to the that user's role.
    let group = await Links.findOne({ 'Group': req.session.user.role });
    let global = await Links.findOne({ 'Group': 'Global'});

    for (let i in group.Links) {
      console.log(i + ': ' + group.Links[i]);
    }

    for (let i in global.Links) {
      console.log(i + ': ' + global.Links[i]);
    }

    return res.view('pages/dashboard', {user: req.session.user, groupLinks: group.Links, globalLinks: global.Links});
  } else {
    return res.redirect('/login');
  }
};
