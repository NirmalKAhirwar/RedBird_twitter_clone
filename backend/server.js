const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// Importing cloudinary variable to upload images in tweet
const cloudinary = require("./utilities/cloudinaryConfig.js");

dotenv.config();

const authRoutes = require("./routes/authRoutes.js");
const tweetRoutes = require("./routes/tweetRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/tweet", tweetRoutes);

// Initialising database connection
require("./database/connect.js");

app.listen(PORT, () => {
  console.log("Server started!");
});
