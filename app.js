// dotenv config
require("dotenv").config();

// dotenv test logs
// console.log(process.env.PORT);
// console.log(process.env.DATABASE_URI);

// packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./config/dbConnect");

// router
const testRouter = require("./routes/test");

// connect DB
connectDB();

const app = express();

const PORT = process.env.PORT || 8000;

// express 내장 body-parser setting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors setting
app.use(cors({ origin: "*" }));

// connection test route
// index path
app.get("/", (req, res) => {
    res.send("index route");
});

// test router
app.use("/test", testRouter);

// server - db connection
// config/dbConnect 참고
mongoose.connection.once("open", () => {
    console.log("DB Connected!");
    app.listen(PORT, () =>
        console.log(`Server is running on http://localhost:${PORT}`)
    );
});

// server start command : npm run start
// nodemon을 사용했습니다.
