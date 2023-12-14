//Basic Import
const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const router = require("./src/routes/api.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//Security Middleware
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//Database Middleware
const mongoose = require("mongoose");

//Custom Express Server Setup In NextJS
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });

nextApp.prepare().then(() => {
  const app = express();

  //Middleware Implementation
  app.use(cookieParser());
  app.use(cors());
  app.use(mongoSanitize());
  app.use(xssClean());
  app.use(hpp());

  //Body parser implementation
  app.use(bodyParser.json());

  //Express rate limit implementation
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 500000,
  });
  app.use(limiter);

  // Mongo DB Database Connection

  // let URI = "mongodb://localhost:27017/internetmadrasha";

  let URI = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@internetmadrasha.oo78neo.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

  let OPTION = {
    autoIndex: true,
  };
  mongoose
    .connect(URI, OPTION)
    .then(() => {
      console.log(">Alhamdulillah. Mongoose Connection Successful");
    })
    .catch((err) => {
      console.log(err);
    });
  //Routing are done here
  app.use("/apis/v1", router);

  app.all("*", (req, res) => {
    return nextApp.getRequestHandler()(req, res);
  });

  app.listen(process.env.RUNNING_PORT || 3000, () => {
    console.log(
      ">Alhamdulillah. Server Ready on http://localhost:" +
        process.env.RUNNING_PORT
    );
  });
});
