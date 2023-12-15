const Auth = (req, res, next) => {
  const token = req.cookies.userToken
  if (!token) {
    res.status(401).send("unauthorized");
    }
  else {
      next()
    }
};
module.exports = { Auth };
