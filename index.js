const port = 8081,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts"), // This should come before defining routes
  bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(layouts); // Use express-ejs-layouts middleware first

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.use(errorController.logErrors);

app.get("/", homeController.respondWithAboutPage);

app.get("/:page", homeController.respondWithView);
app.post("/contact", homeController.receiveContactMessage);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(port, () => {
  console.log(`The server has started and is listening on port number: ${port}`);
});
