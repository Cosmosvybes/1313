const express = require("express");
const port = process.env.PORT || 1313;
const app = express();
const { urlencoded } = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const path = require("path");
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
app.use(express.static(path.join(__dirname, "dist")));
const { translateCapp } = require("./API/Index");

app.post("/api/translate/", translateCapp);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
