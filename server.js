//Basic Import
const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cache = require("./cache.js");
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

  // Live streaming setup from youtube link to hls

  const reChannelName =
    /"owner":{"videoOwnerRenderer":{"thumbnail":{"thumbnails":\[.*?\]},"title":{"runs":\[{"text":"(.+?)"/;

  const getLiveStream = async (url) => {
  
    let data = await cache?.get(url);

    if (data) {
      return JSON.parse(data);
    } else {
      data = {};

      try {
        const response = await fetch(url);
        if (response.ok) {
          const text = await response.text();
          const stream = text.match(/(?<=hlsManifestUrl":").*\.m3u8/)?.[0];
          const name = reChannelName.exec(text)?.[1];
          const logo = text.match(
            /(?<=owner":{"videoOwnerRenderer":{"thumbnail":{"thumbnails":\[{"url":")[^=]*/
          )?.[0];

          data = { name, stream, logo };
        } else {
          console.log(
            JSON.stringify({
              url,
              status: response.status,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }

      await cache?.set(url, JSON.stringify(data), { EX: 300 });

      return data;
    }
  };

  app.use(require("express-status-monitor")());

  app.get("/channel/:id.m3u8", async (req, res, nxt) => {
    try {
      const url = `https://www.youtube.com/channel/${req.params.id}/live`;
      const { stream } = await getLiveStream(url);

      if (stream) {
        res.redirect(stream);
      } else {
        res.sendStatus(204);
      }
    } catch (err) {
      nxt(err);
    }
  });

  app.get("/video/:id.m3u8", async (req, res, nxt) => {
    try {
      const url = `https://www.youtube.com/watch?v=${req.params.id}`;
      const { stream } = await getLiveStream(url);

      if (stream) {
        res.redirect(stream);
      } else {
        res.sendStatus(204);
      }
    } catch (err) {
      nxt(err);
    }
  });

  app.get("/cache", async (req, res, nxt) => {
    try {
      const keys = await cache?.keys("*");

      const items = [];

      for (const key of keys) {
        const data = JSON.parse(await cache?.get(key));

        if (data) {
          items.push({
            url: key,
            name: data.name,
            logo: data.logo,
          });
        }
      }

      res.json(items);
    } catch (err) {
      nxt(err);
    }
  });

  //Live streaming code finish

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
