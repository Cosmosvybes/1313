const { changeCappings } = require("../Controller/1313.js");
const translateCapp = async (req, res) => {
  const { cappings } = req.body;

  try {
    const response = changeCappings(cappings.toLowerCase());
    res.status(200).send({ response });
    if (!response) {
      res.status(503).send("internal error");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { translateCapp };
