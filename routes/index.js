const express = require("express");
const asyncHandler = require("express-async-handler");
const googleTrends = require("google-trends-api");
const https = require("https");
var unirest = require("unirest");
const axios = require("axios");

require("dotenv").config();

const router = express.Router();

const isValid = (mkt) => {
    const codes = [
        "da-dk",
        "de-at",
        "nl-be",
        "de-ch",
        "de-de",
        "en-au",
        "en-ca",
        "en-gb",
        "en-id",
        "en-ie",
        "en-in",
        "en-my",
        "en-nz",
        "en-ph",
        "en-sg",
        "en-us",
        "en-ww",
        "en-xa",
        "en-za",
        "es-ar",
        "es-cl",
        "es-es",
        "es-mx",
        "es-us",
        "es-xl",
        "fi-fi",
        "fr-be",
        "fr-ca",
        "fr-ch",
        "fr-fr",
        "it-it",
        "zh-hk",
        "zh-tw",
        "ja-jp",
        "ko-kr",
        "nl-nl",
        "zh-cn",
        "pl-pl",
        "pt-br",
        "ru-ru",
        "sv-se",
        "tr-tr",
    ];

    return codes.includes(mkt);
};

const businesslocales = [
    "en-au",
    "fr-ca",
    "fi-fl",
    "fr-fr",
    "de-de",
    "it-it",
    "es-mx",
    "zh-cn",
    "pt-br",
    "en-gb",
    "es-us",
];
const sportslocales = [
    "en-au",
    "fi-fl",
    "fr-fr",
    "de-de",
    "it-it",
    "es-mx",
    "zh-cn",
    "pt-br",
    "en-gb",
];
const scienceandtechlocales = [
    "fr-fr",
    "de-de",
    "it-it",
    "es-mx",
    "zh-cn",
    "pt-br",
    "en-gb",
];
const entertainmentlocales = [
    "en-au",
    "fr-fr",
    "de-de",
    "it-it",
    "es-mx",
    "zh-cn",
    "pt-br",
    "en-gb",
];

router.get(
    "/google",
    asyncHandler(async (req, res, next) => {
        try {
            googleTrends
                .dailyTrends({ geo: req.query.country })
                .then(function (results) {
                    const finalRes = JSON.parse(results);
                    res.status(200).json(finalRes);
                    next();
                })
                .catch(function (err) {
                    next(err);
                });
        } catch (error) {
            next(error);
        }
    })
);

router.get(
    "/news",
    asyncHandler(async (req, result, next) => {
        try {
            const mkt = isValid(req.query.locale) ? req.query.locale : "en-us";

            let url = `https://api.bing.microsoft.com/v7.0/news/search?q=&mkt=${mkt}&freshness=Day&originalImg=true`;

            const data = {
                headers: {
                    "Ocp-Apim-Subscription-Key": process.env.BING_KEY,
                },
            };

            const payload = await axios.get(url, data);

            result.json(payload.data);
            next();
        } catch (error) {
            throw error;
        }
    })
);

router.get(
    "/category",
    asyncHandler(async (req, res, next) => {
        try {
            let category = req.query.value;
            let locale = checkLocaleForCategory(category, req.query.locale)
                ? req.query.locale
                : "en-us";

            let url = `https://api.bing.microsoft.com/v7.0/news?category=${category}&mkt=${locale}`;

            const data = {
                headers: {
                    "Ocp-Apim-Subscription-Key": process.env.BING_KEY,
                },
            };

            const payload = await axios.get(url, data);

            res.json(payload.data);
            next();
        } catch (error) {
            throw error;
        }
    })
);

router.get(
    "/search",
    asyncHandler(async (req, res, next) => {
        try {
            let value = req.query.q;

            let url = `https://api.bing.microsoft.com/v7.0/news/search?q=${value}&mkt=en-us&freshness=Day&originalImg=true`;

            const data = {
                headers: {
                    "Ocp-Apim-Subscription-Key": process.env.BING_KEY,
                },
            };

            const payload = await axios.get(url, data);

            res.json(payload.data);
            next();
        } catch (error) {
            throw error;
        }
    })
);

const checkLocaleForCategory = (category, mkt) => {
    if (category === "business") {
        return businesslocales.includes(mkt);
    }

    if (category === "sports") {
        return sportslocales.includes(mkt);
    }

    if (category === "ScienceAndTechnology") {
        return scienceandtechlocales.includes(mkt);
    }

    if (category === "entertainment") {
        return entertainmentlocales.includes(mkt);
    }
    return false;
};

// router.get(
//     "/reddit",
//     asyncHandler(async (req, res, next) => {
//         try {
//             const url = `https://newsapi.org/v2/everything?sources=reddit-r-all&apiKey=${process.env.NA_KEY}`;
//             const payload = await axios.get(url);
//             res.json(payload.data);
//             next();
//         } catch (error) {
//             throw error;
//         }
//     })
// );

// router.get(
//     "/query-news",
//     asyncHandler(async (req, res, next) => {
//         try {
//             let url;
//             Object.keys(req.query).length !== 0
//                 ? (url = `https://newsapi.org/v2/everything?q=${req.query.searchValue}&apiKey=${process.env.NA_KEY}`)
//                 : `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.NA_KEY}`;
//             const payload = await axios.get(url);
//             res.json(payload.data);
//             next();
//         } catch (error) {
//             throw error;
//         }
//     })
// );

module.exports = router;
