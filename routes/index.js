const express = require("express");
const asyncHandler = require("express-async-handler");
const googleTrends = require("google-trends-api");
const https = require("https");
var unirest = require("unirest");
const axios = require("axios");

require("dotenv").config();

const router = express.Router();

const isValid = (cc) => {
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
};

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
            // const url =
            //     "https://bing-news-search1.p.rapidapi.com/news?mkt=en-us&safeSearch=off&textFormat=raw";

            // const headers = {
            //     headers: {
            //         "x-bingapis-sdk": "true",
            //         "x-rapidapi-key": process.env.NA_KEY,
            //         "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            //         useQueryString: true,
            //     },
            // };

            // const res = await axios.get(url, headers);

            result.json(
                // 20210125032237
                // http://localhost:3000/news

                {
                    _type: "News",
                    webSearchUrl:
                        "https://www.bing.com/news/search?q=top+stories&form=TNSA02",
                    value: [
                        {
                            _type: "NewsArticle",
                            name:
                                "White House begins talks with lawmakers on COVID-19 relief ",
                            url:
                                "http://www.msn.com/en-us/news/politics/white-house-begins-talks-with-lawmakers-on-covid-19-relief/ar-BB1d37aP",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.SaXpqfNWNuaWad3gA9tbSi&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                "Top aides to President Joe Biden on Sunday began talks with a group of moderate Senate Republicans and Democrats on a $1.9 trillion coronavirus relief package as Biden faces increasing headwinds in",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "Associated Press",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AMMS_6c39d1938749f17b7db3d338632af3cb",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-25T00:50:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "A year from Wuhan lockdown: life returns to normal, but former epicenter still haunted by emotional scars ",
                            url:
                                "https://www.msn.com/en-us/news/world/a-year-after-wuhans-lockdown-chinas-former-covid-19-epicenter-has-emotional-scars/ar-BB1d3rmZ",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.A-A4zDK_SeUnzOoD-WuRlC&pid=News",
                                    width: 600,
                                    height: 315,
                                },
                                isLicensed: true,
                            },
                            description:
                                "On the surface, Wuhan bustles like a city that has never known a paralyzing 76-day lockdown. But the severe measures also came at a huge personal cost to residents, and despite the apparent return to",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "CNN",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_34c0b98797bce395c518158cf055747c",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-25T01:48:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "Biden to reinstate COVID travel rules, add South Africa ",
                            url:
                                "https://www.msn.com/en-us/news/world/biden-to-reinstate-covid-travel-rules-add-south-africa/ar-BB1d3qCe",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.jFZ-6gY7lTCvpwfbQ8SyPC&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                "President Joe Biden on Monday will formally reinstate COVID-19 travel restrictions on non-U.S. travelers from Brazil, Ireland, the United Kingdom and 26 other European countries that allow travel",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "Associated Press",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AMMS_6c39d1938749f17b7db3d338632af3cb",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-24T22:39:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name: "Tampa Bay Buccaneers advance to Super Bowl ",
                            url:
                                "https://www.msn.com/en-us/sports/nfl/tampa-bay-buccaneers-advance-to-super-bowl/ar-BB1d3xQV",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.ikIpe9lWpaq2G7YjujFHOy&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                "This will be the first time in Super Bowl history one of the competing teams will be playing in their home stadium.",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "CBS News",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_4ae1aeddeaac21a710cf413c2980e769",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-25T00:03:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "BP's oil exploration team swept aside in climate revolution ",
                            url:
                                "https://www.msn.com/en-us/money/companies/bps-oil-exploration-team-swept-aside-in-climate-revolution/ar-BB1d3raJ",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.iLXkIBEQAusF1-42cZXM_i&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                "Nothing escapes the winds of change now sweeping through BP, not even the exploration team that for more than a century powered its profits by discovering billions of barrels of oil.   Its geologists,",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "Reuters",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_62e71bb461e92ae25d37bed673fc53b9",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-25T00:13:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "Biden to lift Pentagon's ban on transgender people serving in military ",
                            url:
                                "https://www.msn.com/en-us/news/politics/biden-to-lift-pentagon-s-ban-on-transgender-people-serving-in-military/ar-BB1d3y79",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.ZGT5umUg5pIhzwr-IarnxS&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                "Multiple people familiar with the matter confirm to ABC News that President Joe Biden is expected to sign an executive order on Monday that will lift the Pentagon’s ban on transgender people serving",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "ABC News",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_0cfcddaa71cae000b74e3bf52bc84d78",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-25T00:36:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "Growing number of GOP senators oppose impeachment trial ",
                            url:
                                "http://www.msn.com/en-us/news/politics/growing-number-of-gop-senators-oppose-impeachment-trial/ar-BB1d3ouh",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.EjiHKB3Vh9JN14jhoOFLzi&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                "A growing number of Republican senators say they oppose holding an impeachment trial, a sign of the dimming chances that former President Donald Trump will be convicted on the charge that he incited",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "Associated Press",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AMMS_6c39d1938749f17b7db3d338632af3cb",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-24T19:58:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "5 people, including pregnant woman, killed in mass shooting ",
                            url:
                                "https://www.msn.com/en-us/news/crime/5-people-including-pregnant-woman-killed-in-mass-shooting/ar-BB1d3sMg",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.V0X9VqMpsKDYb9E5UwDbsy&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                'Police say a shooting in Indianapolis that killed five people, including a pregnant woman, "does not appear to be a random act."',
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "ABC News",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_0cfcddaa71cae000b74e3bf52bc84d78",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-24T22:28:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "Video shows Tacoma officer drive into crowd, injuring at least 1 ",
                            url:
                                "https://www.msn.com/en-us/news/crime/video-shows-tacoma-officer-drive-into-crowd-injuring-at-least-1/ar-BB1d3kq9",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.YpcURT-CdDC4Tnfz_RD7Xy&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                '"This officer just ran this group of people over and then fled the scene," a woman at the scene told CBS Seattle affiliate KIRO-TV.',
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "CBS News",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_4ae1aeddeaac21a710cf413c2980e769",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-24T22:50:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "Biden makes symbolic changes to Oval Office reflecting goals as president ",
                            url:
                                "https://www.msn.com/en-us/news/politics/biden-makes-symbolic-changes-to-oval-office-reflecting-goals-as-president/ar-BB1d1rR5",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.Wame2Y4xKv10h0KzlwREDy&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                "Not long after he was inaugurated, President Donald Trump had a portrait of the populist and controversial President Andrew Jackson placed prominently in the Oval Office, looking down as he held",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "ABC News",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_0cfcddaa71cae000b74e3bf52bc84d78",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-24T07:15:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "Asian shares under pressure on rising coronavirus cases ",
                            url:
                                "https://www.msn.com/en-us/money/markets/asian-shares-under-pressure-on-rising-coronavirus-cases/ar-BB1d3wmz",
                            image: {
                                _type: "ImageObject",
                                thumbnail: {
                                    _type: "ImageObject",
                                    contentUrl:
                                        "https://www.bing.com/th?id=OVFT.K_Pr0BzGEr8zCQ4F3jJZsC&pid=News",
                                    width: 1200,
                                    height: 630,
                                },
                                isLicensed: true,
                            },
                            description:
                                "Asian shares were on the defensive on Monday as rising COVID-19 cases and doubts over the ability of vaccine makers to supply the promised doses on time soured risk appetite.   MSCI's broadest index",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "Reuters",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_62e71bb461e92ae25d37bed673fc53b9",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-25T00:47:00.0000000Z",
                        },
                        {
                            _type: "NewsArticle",
                            name:
                                "Sarah Sanders, ex-Trump press secretary, to run for Arkansas governor ",
                            url:
                                "https://www.msn.com/en-us/news/politics/sarah-sanders-ex-trump-press-secretary-to-run-for-arkansas-governor/ar-BB1d3AGU",
                            description:
                                "Former White House Press Secretary Sarah Huckabee Sanders is expected to announce a run for governor of Arkansas on Monday, according to two people familiar with her plans.Sanders has toyed with",
                            provider: [
                                {
                                    _type: "Organization",
                                    name: "NBC News",
                                    image: {
                                        _type: "ImageObject",
                                        thumbnail: {
                                            _type: "ImageObject",
                                            contentUrl:
                                                "https://www.bing.com/th?id=AR_e4bde9ad3949725c2f4ad268ff549295",
                                        },
                                    },
                                },
                            ],
                            datePublished: "2021-01-25T01:45:00.0000000Z",
                        },
                    ],
                }
            );

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
