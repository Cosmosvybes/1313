const { client } = require("../utils/Mongo");
const jwt = require("jsonwebtoken");
const nyben = client.db("alora-sealord").collection("five-fingaz");
const bcrypt = require("bcrypt");


//sign up
const createAccount = async (dn, password) => {
  const response = "Welcome on board nyben";
  try {
    if (dn || password) return;
    const user = await nyben.insertOne({ dn, password });
    let newLord = await findLord(dn);
    return user.insertedId && { response, newLord };
  } catch (error) {
    return { error };
  }
};

//find user
const findLord = async (dn) => {
  const lord = await nyben.findOne({ dn: dn });
  return lord ? lord : "not found";
};


//sign in
const signin = async (username, password) => {
  try {
    let user = await findLord(username);
    if (!user._id) {
      return "Account does not exist";
    }
    const isAuthorized = await bcrypt.compare(password, user.passsword);
    return isAuthorized
      ? (() => {
          let token = jwt.sign({ user: user.dn }, "secret");
          return { isAuthorized: isAuthorized, token, user };
        })()
      : "Incorrect password";
  } catch (error) {
    return error.message;
  }
};


const newAcc = { createAccount, nyben, signin , findLord};
module.exports = { newAcc };
