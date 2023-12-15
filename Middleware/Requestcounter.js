const { newAcc } = require("../model/model");
let count = 0;
const requestCounter = async (req, res, next) => {
  const user = await newAcc.findLord(req.user.dn);
  try {
    const premium = user.isPremium; //if user package is free and the request sent is more than 2 ?
    if (!premium) {
      if (count == 3) {
        res.status(403).send({
          response: "exceeded daily request limit!",
        });
      } else {
        next();
      }
    } else {
      next();
    }
    count++;
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { requestCounter };
