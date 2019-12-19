const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./connection/index");
const applicationFormRoutes = require("./routes/index");
const app = express();

// DB connection
db;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/applicationForm", applicationFormRoutes);

// Path
app.use(express.static(path.resolve(__dirname, "../build")));

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening ${PORT}`));
