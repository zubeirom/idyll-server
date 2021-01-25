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
        "ae",
        "ar",
        "at",
        "au",
        "be",
        "bg",
        "br",
        "ca",
        "ch",
        "cn",
        "co",
        "cu",
        "cz",
        "de",
        "eg",
        "fr",
        "gb",
        "gr",
        "hk",
        "hu",
        "id",
        "ie",
        "il",
        "in",
        "it",
        "jp",
        "kr",
        "lt",
        "lv",
        "ma",
        "mx",
        "my",
        "ng",
        "nl",
        "no",
        "nz",
        "ph",
        "pl",
        "pt",
        "ro",
        "rs",
        "ru",
        "sa",
        "se",
        "sg",
        "si",
        "sk",
        "th",
        "tr",
        "tw",
        "ua",
        "us",
        "ve",
        "za",
    ];

    return codes.includes(cc);
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
            // const cc = isValid(req.query.cc) ? req.query.cc : "us";

            // const url = `
            // https://newsapi.org/v2/top-headlines?country=${cc}&apiKey=${process.env.NA_KEY}`;

            // const res = await axios.get(url);

            result.json({
                status: "ok",
                totalResults: 38,
                articles: [
                    {
                        source: {
                            id: "cnn",
                            name: "CNN",
                        },
                        author: "Katelyn Polantz, CNN",
                        title:
                            "Dominion sues Giuliani for $1.3 billion over 'Big Lie' about election fraud - CNN",
                        description:
                            'Dominion Voting Systems has sued former President Donald Trump\'s personal lawyer Rudy Giuliani for defamation after he pushed the "Big Lie" about election fraud on his podcast and TV appearances.',
                        url:
                            "https://www.cnn.com/2021/01/25/politics/dominion-lawsuit-giuliani/index.html",
                        urlToImage:
                            "https://cdn.cnn.com/cnnnext/dam/assets/201222110730-rudy-giuliani-1107-super-tease.jpg",
                        publishedAt: "2021-01-25T14:03:00Z",
                        content:
                            '(CNN)Dominion Voting Systems has sued former President Donald Trump\'s personal lawyer Rudy Giuliani for defamation after he pushed the "Big Lie" about election fraud on his podcast and TV appearances… [+3251 chars]',
                    },
                    {
                        source: {
                            id: null,
                            name: "TMZ",
                        },
                        author: "TMZ Staff",
                        title:
                            "Floyd Mayweather Rips Conor McGregor As 'Con Artist McLoser' After UFC Knockout - TMZ",
                        description:
                            'The hits keep on coming for Conor McGregor -- this time, it\'s Floyd Mayweather trashing his old boxing opponent ... "Con Artist McLoser."',
                        url:
                            "https://www.tmz.com/2021/01/25/floyd-mayweather-conor-mcgregor-dustin-poirier-manny-pacquiao-ufc-boxing/",
                        urlToImage:
                            "https://imagez.tmz.com/image/ba/16by9/2021/01/25/ba459782c0784754adefbf3b2f0ad38d_xl.jpg",
                        publishedAt: "2021-01-25T13:54:00Z",
                        content:
                            'The hits keep on coming for Conor McGregor-- this time, it\'s Floyd Mayweather trashing his old boxing opponent ... "Con Artist McLoser."\r\nIn fact, Floyd says the positive way Conor continues to be tr… [+1830 chars]',
                    },
                    {
                        source: {
                            id: "usa-today",
                            name: "USA Today",
                        },
                        author: "Maurie Backman",
                        title:
                            "New investors: Don't be too hasty or you could lose money - USA TODAY",
                        description:
                            "Most of us can't just flip a switch and turn our emotions off, but there are steps you can take to be a less emotional investor.",
                        url:
                            "https://www.usatoday.com/story/money/investing/2021/01/25/ways-to-lose-money-in-the-stock-market/115355692/",
                        urlToImage:
                            "https://www.gannett-cdn.com/-mm-/596c70d782a57ca3655daca5d6b042fb675e0755/c=0-98-2141-1302/local/-/media/2021/01/24/USATODAY/usatsports/MotleyFool-TMOT-b9eaf0c8-8b6f640b.jpg?width=1600&height=800&fit=crop",
                        publishedAt: "2021-01-25T13:40:00Z",
                        content:
                            "Finance Your Life: Up your investing game with these two simple moves.\r\nYears ago, when I bought one of my first stocks, its share price dropped several days later. As a newbie investor, I got spooke… [+3986 chars]",
                    },
                    {
                        source: {
                            id: null,
                            name: "CNBC",
                        },
                        author: "Berkeley Lovelace Jr.",
                        title:
                            "Moderna says it's working on Covid booster shot for variant in South Africa, says current vaccine provides some protection - CNBC",
                        description:
                            "Moderna said it's accelerating work on a Covid-19 booster shot to guard against the recently discovered variant in South Africa.",
                        url:
                            "https://www.cnbc.com/2021/01/25/covid-vaccine-moderna-working-on-covid-booster-shots-for-south-african-strain.html",
                        urlToImage:
                            "https://image.cnbcfm.com/api/v1/image/106825571-1610746777869-gettyimages-1296415996-sfchroniclevirusvaccine8.jpeg?v=1610746873",
                        publishedAt: "2021-01-25T13:29:00Z",
                        content:
                            "Moderna said Monday it's accelerating work on a Covid-19 booster shot to guard against the recently discovered variant in South Africa.\r\nIts researchers said its current coronavirus vaccine appears t… [+3802 chars]",
                    },
                    {
                        source: {
                            id: "cnn",
                            name: "CNN",
                        },
                        author: "Lianne Kolirin, CNN",
                        title:
                            "'Godzilla vs Kong' trailer gives first glimpse of epic monster showdown - CNN",
                        description:
                            'The trailer for "Godzilla vs. Kong" runs for almost two-and-a-half minutes and features just about everything you might want from a face-off between a leviathan lizard and a supersized gorilla.',
                        url:
                            "https://www.cnn.com/2021/01/25/entertainment/godzilla-kong-trailer-scli-intl/index.html",
                        urlToImage:
                            "https://cdn.cnn.com/cnnnext/dam/assets/210125111726-03-godzilla-vs-kong-super-tease.jpg",
                        publishedAt: "2021-01-25T13:14:00Z",
                        content: null,
                    },
                    {
                        source: {
                            id: "nfl-news",
                            name: "NFL News",
                        },
                        author: null,
                        title:
                            "Frank Clark, Chiefs D ready for Tom Brady: 'I'll see his (expletive) on Sunday in the Super Bowl' - NFL.com",
                        description:
                            "Patrick Mahomes﻿ and the high-flying Chiefs offense garner most of the attention. Rightfully so, as Andy Reid's crew sets records as a unstoppable force. It's time to start viewing the K.C. defense in a similar light.",
                        url:
                            "https://www.nfl.com/news/frank-clark-chiefs-defense-ready-for-tom-brady-buccaneers",
                        urlToImage:
                            "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/twsdooj8mikhc40ebm9n",
                        publishedAt: "2021-01-25T13:14:00Z",
                        content:
                            "Patrick Mahomes and the high-flying Kansas City Chiefs offense garner most of the attention. Rightfully so, as Andy Reid's crew sets records as a seemingly unstoppable force. It's time, however, to s… [+2015 chars]",
                    },
                    {
                        source: {
                            id: null,
                            name: "MacRumors",
                        },
                        author: "Hartley Charlton",
                        title:
                            "Apple Watch Series 7 Rumored to Feature Blood Glucose Monitoring - MacRumors",
                        description:
                            "The Apple Watch Series 7 will reportedly feature blood glucose monitoring via an optical sensor, according to ETNews.\r \n\r \n\r \n\r \nThe report, which...",
                        url:
                            "https://www.macrumors.com/2021/01/25/apple-watch-series-7-blood-glucose-monitoring/",
                        urlToImage:
                            "https://images.macrumors.com/t/S1Hn7uJ9hBIpNZIi5q0jagog1q4=/1600x/https://images.macrumors.com/article-new/2014/09/bloodoxygenapplewatch.jpg",
                        publishedAt: "2021-01-25T13:05:00Z",
                        content:
                            "The Apple Watch Series 7 will reportedly feature blood glucose monitoring via an optical sensor, according to ETNews.\r\nThe report, which mainly focuses on the blood glucose capabilities of the Samsun… [+2215 chars]",
                    },
                    {
                        source: {
                            id: "nbc-news",
                            name: "NBC News",
                        },
                        author: "Elisha Fieldstadt",
                        title:
                            "Fauci says drop in Covid cases not due to vaccine: 'We don't want to get complacent' - NBC News",
                        description:
                            "Dr. Anthony Fauci on Monday said that a drop in Covid-19 cases and hospitalizations in most of the country cannot likely be attributed to vaccines.",
                        url:
                            "https://www.nbcnews.com/news/us-news/fauci-says-drop-covid-cases-not-due-vaccine-we-don-n1255505",
                        urlToImage:
                            "https://media4.s-nbcnews.com/j/newscms/2021_04/3396667/200713-anthony-fauci-se-401p_61b9825e68343d93d1526d14c3ba82f5.nbcnews-fp-1200-630.jpg",
                        publishedAt: "2021-01-25T12:54:00Z",
                        content:
                            "Dr. Anthony Fauci on Monday said that a drop in Covid-19 cases and hospitalizations in most of the country cannot likely be attributed to vaccines, meaning people should continue to be as cautious as… [+1686 chars]",
                    },
                    {
                        source: {
                            id: "the-verge",
                            name: "The Verge",
                        },
                        author: "Tom Warren",
                        title:
                            "Microsoft mocks Apple’s doomed Touch Bar in new Surface ad - The Verge",
                        description:
                            "Microsoft’s new Surface commercial takes aim at Apple’s Touch Bar. The new TV ad pits the MacBook Pro against the Surface Pro 7, and bizarrely claims Surface is good for gaming.",
                        url:
                            "https://www.theverge.com/2021/1/25/22248238/microsoft-apple-macbook-touch-bar-surface-ad-nfl",
                        urlToImage:
                            "https://cdn.vox-cdn.com/thumbor/O-crPa1GA53dFD_YN-gRE6wWqDU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7462669/jbareham_161111_1263_0050.jpg",
                        publishedAt: "2021-01-25T12:48:47Z",
                        content: "Apples Touch Bar might be disappearing soon",
                    },
                    {
                        source: {
                            id: null,
                            name: "Variety",
                        },
                        author: "Todd Spangler",
                        title:
                            "NBCU’s Peacock Pins WWE Network Exclusive U.S. Streaming Rights - Variety",
                        description:
                            "NBCUniversal’s Peacock soon will be the only place to watch WWE Network in the U.S. WWE and NBCU reached a multiyear agreement giving Peacock exclusive streaming rights to WWE Network for American viewers. The over-the-top wrestling entertainment service’s ex…",
                        url:
                            "https://variety.com/2021/digital/news/wwe-network-peacock-exclusively-streaming-1234890954/",
                        urlToImage:
                            "https://variety.com/wp-content/uploads/2021/01/WWE-Network-Peacock-Drew-McIntyre.png?w=1024",
                        publishedAt: "2021-01-25T12:40:00Z",
                        content:
                            "NBCUniversal’s Peacock soon will be the only place to watch WWE Network in the U.S.\r\nWWE and NBCU reached a multiyear agreement giving Peacock exclusive streaming rights to WWE Network for American v… [+4263 chars]",
                    },
                    {
                        source: {
                            id: "usa-today",
                            name: "USA Today",
                        },
                        author: "Elinor Aspegren, John Bacon",
                        title:
                            "Coronavirus updates: 2 in 5 Americans live where hospitals are at capacity; COVID-19 vaccines may be less effective against variants - USA TODAY",
                        description:
                            "Australia has approved use of its first coronavirus vaccine. More than 40% of Americans live in areas running out of ICU space. Latest virus updates.",
                        url:
                            "https://www.usatoday.com/story/news/health/2021/01/25/covid-news-joe-biden-travel-restrictions-coronavirus-vaccines/6694674002/",
                        urlToImage:
                            "https://www.gannett-cdn.com/presto/2021/01/25/USAT/e12d72dd-1a85-489b-a9aa-79c8af45cb02-AP21025058125301.jpg?crop=3985,2242,x0,y149&width=3200&height=1680&fit=bounds",
                        publishedAt: "2021-01-25T12:19:42Z",
                        content:
                            "There are many questions surrounding Covid-19 vaccines, one of which is whether vaccines can be mixed and matched. Veuers Johana Restrepo has more.\r\nBuzz60\r\nCOVID-19 has killed nearly 420,000 America… [+5005 chars]",
                    },
                    {
                        source: {
                            id: "cbs-news",
                            name: "CBS News",
                        },
                        author: "Peter Martinez",
                        title:
                            'Indianapolis shooting: Pregnant woman among 6 killed in "mass murder" - CBS News',
                        description:
                            "Police said this was a targeted attack. An investigation into the shooting is ongoing and there are no suspects in custody.",
                        url:
                            "https://www.cbsnews.com/news/indianapolis-shooting-mass-murder-pregnant-woman-dead-six-killed/",
                        urlToImage:
                            "https://cbsnews2.cbsistatic.com/hub/i/r/2021/01/25/cd2c7245-b27e-488c-8276-032fc5f9afee/thumbnail/1200x630/8baa8d72d665453f2ce1fb302740ef16/ap21024846660378.jpg",
                        publishedAt: "2021-01-25T12:14:00Z",
                        content:
                            "Six people were killed, including a pregnant woman, in a shooting inside an Indianapolis home early Sunday, CBS affiliate WTTV reports. Police said a juvenile was also hospitalized in critical condit… [+1888 chars]",
                    },
                    {
                        source: {
                            id: "cbs-news",
                            name: "CBS News",
                        },
                        author: "William Harwood",
                        title:
                            'SpaceX Falcon 9 boosts record 143 satellites into orbit on "rideshare" mission - CBS News',
                        description:
                            "It was the most satellites ever launched by a single rocket",
                        url:
                            "https://www.cbsnews.com/news/spacex-143-satellites-falcon-9-rocket-rideshare/",
                        urlToImage:
                            "https://cbsnews1.cbsistatic.com/hub/i/r/2021/01/24/44393848-f3d7-42fe-8b00-bae0d91d3330/thumbnail/1200x630/19da90c15a0ea15e594711bf85caff34/012421-launch1.jpg",
                        publishedAt: "2021-01-25T12:11:00Z",
                        content:
                            'A SpaceX Falcon 9 rocket boosted a record 143 small satellites into a polar orbit on Sunday in the company\'s first dedicated "rideshare" mission, a response to the growing demand for low-cost access … [+4795 chars]',
                    },
                    {
                        source: {
                            id: "associated-press",
                            name: "Associated Press",
                        },
                        author: "Mae Anderson",
                        title:
                            "Budweiser joins Coke, Pepsi brands in sitting out Super Bowl - Associated Press",
                        description:
                            "NEW YORK (AP) — For the first time since 1983, when Anheuser-Busch used all of its ad time to introduce a beer called Bud Light, the beer giant isn't advertising its iconic Budweiser brand during...",
                        url:
                            "https://apnews.com/article/nfl-super-bowl-football-coronavirus-pandemic-c17d72e98fda8f07d114657dfb7f5b90",
                        urlToImage:
                            "https://storage.googleapis.com/afs-prod/media/bf1f6061c6964e62b33a56366a071d3a/1920.jpeg",
                        publishedAt: "2021-01-25T12:08:45Z",
                        content:
                            "NEW YORK (AP) For the first time since 1983, when Anheuser-Busch used all of its ad time to introduce a beer called Bud Light, the beer giant isnt advertising its iconic Budweiser brand during the Su… [+4736 chars]",
                    },
                    {
                        source: {
                            id: "cbs-news",
                            name: "CBS News",
                        },
                        author: "Caroline Linton",
                        title:
                            "Video shows Tacoma police officer drive into crowd, injuring at least 1 - CBS News",
                        description:
                            '"This officer just ran this group of people over and then fled the scene," a woman at the scene told CBS Seattle affiliate KIRO-TV.',
                        url:
                            "https://www.cbsnews.com/news/tacoma-police-officer-drive-through-crowd-injury/",
                        urlToImage:
                            "https://cbsnews1.cbsistatic.com/hub/i/r/2021/01/24/502c1470-b737-44c1-aeeb-f2eae58d4dd9/thumbnail/1200x630/99748f4b82bc52ed6338876a5755cbc7/tacoma-washington-police-car.png",
                        publishedAt: "2021-01-25T12:02:00Z",
                        content:
                            "A Tacoma, Washington, police officer apparently drove his car into a crowd on Saturday night, sending at least one person to the hospital, authorities said. The incident was captured in video that wa… [+1732 chars]",
                    },
                    {
                        source: {
                            id: null,
                            name: "ESPN",
                        },
                        author: "Ramona Shelburne",
                        title:
                            "Pau Gasol, Kobe Bryant and the bond of brothers - ESPN",
                        description:
                            'Pau Gasol knew Kobe Bryant like few others -- and he cherishes each of those memories, big and small. He\'s "Uncle Pau."',
                        url:
                            "https://www.espn.com/nba/story/_/id/30760714/pau-gasol-kobe-bryant-bond-brothers",
                        urlToImage:
                            "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0122%2Fr805151_1296x729_16%2D9.jpg",
                        publishedAt: "2021-01-25T12:00:07Z",
                        content:
                            "Kobe Bryant liked to tell people he didn't have time for friends. Not in the conventional way most people have friends in which they talk regularly or grab a meal when they're in the same part of tow… [+9973 chars]",
                    },
                    {
                        source: {
                            id: null,
                            name: "Daily Mail",
                        },
                        author: "Jonathan Chadwick",
                        title:
                            "'Exquisitely preserved' skull of tube-crested dinosaur found in New Mexico - Daily Mail",
                        description:
                            "The skull belongs to the iconic, tube-crested dinosaur Parasaurolophus, which lived during the Late Cretaceous Period, about 76.5 million to 73 million years ago.",
                        url:
                            "https://www.dailymail.co.uk/sciencetech/article-9183847/Exquisitely-preserved-skull-tube-crested-dinosaur-New-Mexico.html",
                        urlToImage:
                            "https://i.dailymail.co.uk/1s/2021/01/25/12/38448848-0-image-a-2_1611576815703.jpg",
                        publishedAt: "2021-01-25T12:00:00Z",
                        content:
                            "Scientists have found an 'exquisitely preserved' skull of a herbivorous dinosaur species in New Mexico, known for its weird head adornment. \r\nThe skull belongs to the iconic tube-crested dinosaur Par… [+8338 chars]",
                    },
                    {
                        source: {
                            id: null,
                            name: "CNBC",
                        },
                        author: "Reuters",
                        title:
                            "Merck ends Covid vaccine program, citing inferior immune responses - CNBC",
                        description:
                            "Merck will end development of its two Covid-19 vaccines, and will focus pandemic research on treatments.",
                        url:
                            "https://www.cnbc.com/2021/01/25/merck-ends-covid-vaccine-program-cites-inferior-immune-responses.html",
                        urlToImage:
                            "https://image.cnbcfm.com/api/v1/image/102116497-182937559.jpg?v=1414096790",
                        publishedAt: "2021-01-25T11:57:00Z",
                        content:
                            "Drugmaker Merck on Monday said it will end development of its two Covid-19 vaccines, and will focus pandemic research on treatments, with initial efficacy data on an experimental oral antiviral expec… [+1823 chars]",
                    },
                    {
                        source: {
                            id: null,
                            name: "MarketWatch",
                        },
                        author: "Ciara Linnane",
                        title:
                            "AMC shares soar 36% premarket on news of new $917 million debt and equity financing - MarketWatch",
                        description:
                            "AMC Entertainment Holdings Inc. shares undefined soared 36% in premarket trade Monday, after the biggest cinema-chain operator in the world said it has...",
                        url:
                            "https://www.marketwatch.com/story/amc-shares-soar-36-premarket-on-news-of-new-917-million-debt-and-equity-financing-2021-01-25",
                        urlToImage:
                            "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
                        publishedAt: "2021-01-25T11:45:00Z",
                        content:
                            "AMC Entertainment Holdings Inc. shares \r\n AMC,\r\n +17.79%\r\nsoared 36% in premarket trade Monday, after the biggest cinema-chain operator in the world said it has raised $917 million in debt and equity… [+1325 chars]",
                    },
                    {
                        source: {
                            id: "the-wall-street-journal",
                            name: "The Wall Street Journal",
                        },
                        author: "Jared S. Hopkins",
                        title:
                            "Merck Scraps Covid-19 Vaccine Candidates - The Wall Street Journal",
                        description:
                            "The two shots generated comparatively weak immune responses in early-stage studies",
                        url:
                            "https://www.wsj.com/articles/merck-scraps-covid-19-vaccine-candidates-11611575103",
                        urlToImage: "https://images.wsj.net/im-289837/social",
                        publishedAt: "2021-01-25T11:45:00Z",
                        content:
                            "Merck &amp; Co. said Monday that it is halting development of its two experimental Covid-19 vaccines, after early clinical-trial data showed the shots generated disappointing immune responses against… [+746 chars]",
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
    "/category",
    asyncHandler(async (req, res, next) => {
        try {
            let category = req.query.value;
            let locale = req.query.locale;

            let url = `https://bing-news-search1.p.rapidapi.com/news?category=${category}&mkt=${locale}`;

            const data = {
                headers: {
                    "x-bingapis-sdk": "true",
                    "x-rapidapi-key": process.env.BING_KEY,
                    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
                    useQueryString: true,
                },
            };

            const res = await axios.get(url, data);

            res.json(res.data);
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
