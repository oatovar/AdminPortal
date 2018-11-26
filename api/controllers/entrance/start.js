module.exports = async function start (req, res) {
  if (req.session.isAuthenticated) {
    return res.redirect('/dashboard');
  } else {
    if(req.session.invalidLogin){
      req.session.invalidLogin = false;
      return res.view('pages/entrance/login', {invalidLogin: true});
    } else {
      return res.view('pages/entrance/login', {invalidLogin: false});
    }
  }
};
