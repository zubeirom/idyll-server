/* eslint-disable no-underscore-dangle */
const express = require('express');
const asyncHandler = require('express-async-handler');
const googleTrends = require('google-trends-api');
const https = require('https');

const router = express.Router();

router.get('/google', asyncHandler(async (req, res, next) => {
    try {
        googleTrends.dailyTrends({ geo: req.query.country })
            .then(function (results) {
                const finalRes = JSON.parse(results)
                res.status(200).json(finalRes);
                next();
            })
            .catch(function (err) {
                next(err)
            });
    } catch (error) {
        next(error);
    }
}));

module.exports = router;
