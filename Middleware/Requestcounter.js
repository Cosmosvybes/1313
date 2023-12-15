let count = 0;
const requestCounter = (req, res, next) => {
  try {
    const freemium = true;
    if (freemium) {
      if (count >= 2) {
        //if user package is free ?
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
