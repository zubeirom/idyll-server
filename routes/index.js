/* eslint-disable no-underscore-dangle */
const express = require('express');
const asyncHandler = require('express-async-handler');
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const JSONAPIError = require('jsonapi-serializer').Error;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a6621af2728b4b689ba4f4c17255b292');

const router = express.Router();

router.get('/news', asyncHandler(async (req, res, next) => {
    try {
        newsapi.v2.topHeadlines({
            language: 'en',
        }).then(response => {
            console.log(response);
            /*
              {
                status: "ok",
                articles: [...]
              }
            */
        });
    } catch (error) {
        next(error);
    }
}));

module.exports = router;
