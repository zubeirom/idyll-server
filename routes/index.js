const express = require("express");
const asyncHandler = require("express-async-handler");
const googleTrends = require("google-trends-api");
const https = require("https");
const axios = require("axios");

require("dotenv").config();

const router = express.Router();

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
    asyncHandler(async (req, res, next) => {
        try {
            // let url;
            // Object.keys(req.query).length !== 0
            //     ? (url = `https://newsapi.org/v2/top-headlines?${
            //           Object.keys(req.query)[0]
            //       }=${req.query[Object.keys(req.query)[0]]}&apiKey=${
            //           process.env.NA_KEY
            //       }`)
            //     : (url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.NA_KEY}`);
            // const payload = await axios.get(url);
            res.json({
                articles: [
                    {
                        author: "Zubeir Mohamed",
                        content: "nichts",
                        description:
                            "The UK's decision to wait up to 12 weeks before giving people their second dose of the Pfizer/BioNTech coronavirus vaccine should be scrapped, senior doctors have said, reigniting a debate over the British government's unorthodox inoculation strategy.",
                        publishedAt: Date.now(),
                        source: { id: "news24", name: "News24" },
                        title:
                            "UK should cut its 12-week delay between vaccine doses, doctors group says",
                        url:
                            "https://edition.cnn.com/2021/01/23/health/uk-covid-vaccine-delay-bma-gbr-intl/index.html",
                        urlToImage:
                            "https://www.main-echo.de/storage/image/9/9/6/1/5271699_artikeldetail-bild_1vqFBy_Y8nUpm.jpg",
                    },
                    {
                        author: "Zubeir Mohamed",
                        content: "nichts",
                        description:
                            "The UK's decision to wait up to 12 weeks before giving people their second dose of the Pfizer/BioNTech coronavirus vaccine should be scrapped, senior doctors have said, reigniting a debate over the British government's unorthodox inoculation strategy.",
                        publishedAt: Date.now(),
                        source: { id: "news24", name: "News24" },
                        title:
                            "UK should cut its 12-week delay between vaccine doses, doctors group says",
                        url:
                            "https://edition.cnn.com/2021/01/23/health/uk-covid-vaccine-delay-bma-gbr-intl/index.html",
                        urlToImage:
                            "https://www.main-echo.de/storage/image/9/9/6/1/5271699_artikeldetail-bild_1vqFBy_Y8nUpm.jpg",
                    },
                    {
                        author: "Zubeir Mohamed",
                        content: "nichts",
                        description:
                            "The UK's decision to wait up to 12 weeks before giving people their second dose of the Pfizer/BioNTech coronavirus vaccine should be scrapped, senior doctors have said, reigniting a debate over the British government's unorthodox inoculation strategy.",
                        publishedAt: Date.now(),
                        source: { id: "news24", name: "News24" },
                        title:
                            "UK should cut its 12-week delay between vaccine doses, doctors group says",
                        url:
                            "https://edition.cnn.com/2021/01/23/health/uk-covid-vaccine-delay-bma-gbr-intl/index.html",
                        urlToImage:
                            "https://www.main-echo.de/storage/image/9/9/6/1/5271699_artikeldetail-bild_1vqFBy_Y8nUpm.jpg",
                    },
                    {
                        author: "Zubeir Mohamed",
                        content: "nichts",
                        description:
                            "The UK's decision to wait up to 12 weeks before giving people their second dose of the Pfizer/BioNTech coronavirus vaccine should be scrapped, senior doctors have said, reigniting a debate over the British government's unorthodox inoculation strategy.",
                        publishedAt: Date.now(),
                        source: { id: "news24", name: "News24" },
                        title:
                            "UK should cut its 12-week delay between vaccine doses, doctors group says",
                        url:
                            "https://edition.cnn.com/2021/01/23/health/uk-covid-vaccine-delay-bma-gbr-intl/index.html",
                        urlToImage:
                            "https://www.main-echo.de/storage/image/9/9/6/1/5271699_artikeldetail-bild_1vqFBy_Y8nUpm.jpg",
                    },
                    {
                        author: "Zubeir Mohamed",
                        content: "nichts",
                        description:
                            "The UK's decision to wait up to 12 weeks before giving people their second dose of the Pfizer/BioNTech coronavirus vaccine should be scrapped, senior doctors have said, reigniting a debate over the British government's unorthodox inoculation strategy.",
                        publishedAt: Date.now(),
                        source: { id: "news24", name: "News24" },
                        title:
                            "UK should cut its 12-week delay between vaccine doses, doctors group says",
                        url:
                            "https://edition.cnn.com/2021/01/23/health/uk-covid-vaccine-delay-bma-gbr-intl/index.html",
                        urlToImage:
                            "https://www.main-echo.de/storage/image/9/9/6/1/5271699_artikeldetail-bild_1vqFBy_Y8nUpm.jpg",
                    },
                    {
                        author: "Zubeir Mohamed",
                        content: "nichts",
                        description:
                            "The UK's decision to wait up to 12 weeks before giving people their second dose of the Pfizer/BioNTech coronavirus vaccine should be scrapped, senior doctors have said, reigniting a debate over the British government's unorthodox inoculation strategy.",
                        publishedAt: Date.now(),
                        source: { id: "news24", name: "News24" },
                        title:
                            "UK should cut its 12-week delay between vaccine doses, doctors group says",
                        url:
                            "https://edition.cnn.com/2021/01/23/health/uk-covid-vaccine-delay-bma-gbr-intl/index.html",
                        urlToImage:
                            "https://www.main-echo.de/storage/image/9/9/6/1/5271699_artikeldetail-bild_1vqFBy_Y8nUpm.jpg",
                    },
                    {
                        author: "Zubeir Mohamed",
                        content: "nichts",
                        description:
                            "The UK's decision to wait up to 12 weeks before giving people their second dose of the Pfizer/BioNTech coronavirus vaccine should be scrapped, senior doctors have said, reigniting a debate over the British government's unorthodox inoculation strategy.",
                        publishedAt: Date.now(),
                        source: { id: "news24", name: "News24" },
                        title:
                            "UK should cut its 12-week delay between vaccine doses, doctors group says",
                        url:
                            "https://edition.cnn.com/2021/01/23/health/uk-covid-vaccine-delay-bma-gbr-intl/index.html",
                        urlToImage:
                            "https://www.main-echo.de/storage/image/9/9/6/1/5271699_artikeldetail-bild_1vqFBy_Y8nUpm.jpg",
                    },
                    {
                        author: "Zubeir Mohamed",
                        content: "nichts",
                        description:
                            "The UK's decision to wait up to 12 weeks before giving people their second dose of the Pfizer/BioNTech coronavirus vaccine should be scrapped, senior doctors have said, reigniting a debate over the British government's unorthodox inoculation strategy.",
                        publishedAt: Date.now(),
                        source: { id: "news24", name: "News24" },
                        title:
                            "UK should cut its 12-week delay between vaccine doses, doctors group says",
                        url:
                            "https://edition.cnn.com/2021/01/23/health/uk-covid-vaccine-delay-bma-gbr-intl/index.html",
                        urlToImage:
                            "https://www.main-echo.de/storage/image/9/9/6/1/5271699_artikeldetail-bild_1vqFBy_Y8nUpm.jpg",
                    },
                ],
            });
            next();
        } catch (error) {
            throw error;
        }
    })
);

router.get(
    "/reddit",
    asyncHandler(async (req, res, next) => {
        try {
            const url = `https://newsapi.org/v2/everything?sources=reddit-r-all&apiKey=${process.env.NA_KEY}`;
            const payload = await axios.get(url);
            res.json(payload.data);
            next();
        } catch (error) {
            throw error;
        }
    })
);

router.get(
    "/query-news",
    asyncHandler(async (req, res, next) => {
        try {
            let url;
            Object.keys(req.query).length !== 0
                ? (url = `https://newsapi.org/v2/everything?q=${req.query.searchValue}&apiKey=${process.env.NA_KEY}`)
                : `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.NA_KEY}`;
            const payload = await axios.get(url);
            res.json(payload.data);
            next();
        } catch (error) {
            throw error;
        }
    })
);

module.exports = router;
