/**
 *  app
 *  @requires express
 *  @requires cors
 */
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

const whitelist = []; // Add origins to make calls

if (process.env.NODE_ENV !== 'production') {
    // cross origin settings
    app.use(cors({
        credentials: true,
        origin: function (origin, callback) {
            if (!origin || whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        }
    }));
}else{
    app.use(cors());
}

// configuration for cookies httpOnly
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});


//Last line of defence : if error was thrown and not handled correctly write to log
process.on('uncaughtException', (err, moreInfo) => {
    console.error("uncaughtException : ", {err});
});
process.on('unhandledRejection', (err, moreInfo) => {
    console.error("unhandledRejection :", {err});
});

//set all API routes
require('./src/routes')(app);

// init app
app.listen(port, () => {
    console.log(`app is running on ${port}| ENV is ${process.env.NODE_ENV}`);
});
