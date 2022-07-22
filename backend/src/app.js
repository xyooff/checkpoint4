const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router");
const UserRouter = require("./router/UsersRouter");
const LanguageRouter = require("./router/LanguageRouter");
const CreateWebSiteRouter = require("./router/CreateWebSiteRouter");

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use(router);

// api routes users
app.use("/users", UserRouter);

// api routes languages
app.use("/Language", LanguageRouter);

// api routes projects
app.use("/projects", CreateWebSiteRouter);

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
