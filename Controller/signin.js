const { newAcc } = require("../model/model");

const signIn = async (req, res) => {
  const { dn, pass } = req.body;
  try {
    const signInData = await newAcc.signin(dn, pass);
    if (!signInData.isAuthorized) {
      res.status(401).send({ signInData });
    }
    res.cookie("userToken", signInData.token, { expiresIn: 900000 });
    res.status(200).send({ user: signInData.user });
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = { signIn };
