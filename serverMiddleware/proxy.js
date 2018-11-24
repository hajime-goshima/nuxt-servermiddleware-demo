const express = require("express");
const ogs = require('open-graph-scraper');

const app = express()

app.get("/proxy", function(req, res) {
    console.log(`URL: ${req.query.url}`)
    ogs({url: req.query.url}, function (error, results) {
        console.log('error:', error);
        console.log('results:', results);
        res.send(results)
    })
})

console.log("serverMiddleware Express is READY!!!")

module.exports = {
    parh: "/demo",
    handler: app
}
