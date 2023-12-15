const { newAcc } = require("../model/model");
const signUp = async (req, res) => {
  const { dn, password } = req.body;
  try {
    const dataResponse = await newAcc.createAccount(dn, password);
    res.status(200).send({ dataResponse });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
module.exports = { signUp };
