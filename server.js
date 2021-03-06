const express = require("express");
const bodyParser = require("body-parser")

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post("/temperature", function(req, res) {
    res.json({
        success: true
    })
});

app.listen(process.env.PORT || 3000, function() {
    console.log("server is running on port 3000");
})