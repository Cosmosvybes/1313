const { MongoClient } = require("mongodb");
const { config } = require("dotenv");
config();
const client = new MongoClient(process.env.MONGO_URI);
module.exports = { client };
