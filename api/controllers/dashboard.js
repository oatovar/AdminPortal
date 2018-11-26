module.exports = async function showDashboard (req, res) {
  if (req.session.isAuthenticated) {
    // Grab links that are assigned to the that user's role.
    let group = await Links.findOne({ 'Group': req.session.user.role });

    for (let i in group.Links) {
      console.log(i + ': ' + group.Links[i]);
    }
    return res.view('pages/dashboard', {user: req.session.user, links: group.Links});
  } else {
    return res.redirect('/login');
  }
};
