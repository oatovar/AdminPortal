module.exports = async function start (req, res) {
  if (req.session.isAuthenticated) {
    return res.redirect('/dashboard');
  } else {
    return res.view('pages/entrance/login');
  }
};
