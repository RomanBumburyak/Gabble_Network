const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const author = require("./routes/author");
const book = require("./routes/book");

const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.set("layout", "layout");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan("dev"));

// app.use(author);
// app.use(book);

app.listen(3000, function() {
  console.log("App is running on localhost: 3000");
});