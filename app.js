const express = require("express");
const app = express();

const PORT = 8080;

// Routers
const homeRouter = require("./routes/HomeRouter");
const categoryRouter = require("./routes/CategoryRouter");

// hooking up ejs
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware to parse new message form data
app.use(express.urlencoded({ extended: true }));

// hooking up routers
app.use("/", homeRouter);
app.use("/categories", categoryRouter);

app.listen(PORT);