const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

const DB = process.env.MONGODB_URL;

mongoose
    .connect(DB)
    .then(() => {
        console.log(`Connection Established`);
    })
    .catch((e) => {
        console.log(e);
    });
app.use(authRouter);
app.listen(PORT, "0.0.0.0", () => {
    console.log(`port running at ${PORT}`);
})