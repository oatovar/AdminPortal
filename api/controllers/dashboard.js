module.exports = async function showDashboard (req, res) {
    if (req.session.isAuthenticated) {
      return res.view('pages/dashboard', {user: req.session.user});
    } else {
      return res.redirect('/login');
    }
};