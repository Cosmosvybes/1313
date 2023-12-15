const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.cookies.userToken;
  if (!token) {
    res
      .status(401)
      .send({
        response:
          "un-authorized user, sign in to you account!",
      });
  } else {
    const data = jwt.verify(token, "secret");
    req.user = data;
    next();
  }
};
module.exports = { Auth };
