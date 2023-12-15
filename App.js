const express = require("express");
const port = process.env.PORT || 1313;
const app = express();
const { urlencoded } = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:1313");
  res.setHeader("Access-Control-Allow-Credientials", "true");
  res.setHeader("Access-Control-Allow-Method", "GET PUT PATCH DELETE UPDATE");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Authorization",
    "Application/json"
  );
  next();
});
const { translateCapp } = require("./API/Index");
const { requestCounter } = require("./Middleware/Requestcounter");
const { Auth } = require("./Auth/Auth");
const { signUp } = require("./Controller/signup");
const { signIn } = require("./Controller/signin");
app.get("/api/", (req, res) => {
  res.send("hello world");
});
app.post("/api/translate/", Auth, requestCounter, translateCapp);
app.post("/signup", signUp);
app.post("api/sign_in", signIn);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
