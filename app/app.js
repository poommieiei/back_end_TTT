var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var authRoute = require("./routes/auth");
var menuRoute = require("./routes/menu");

var app = express();



var fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());



app.use("/api/test", indexRouter);
app.use("/api/auth",authRoute);
app.use("/api/menu",menuRoute);


app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.disable("x-powered-by");

module.exports = app;
