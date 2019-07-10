require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/api/drugs", (req, res) => {
        db.Drug.find().then(
            (drugData) => {
                res.json(drugData);
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    app.post("/search", (req, res) => {
        // set drugTitle to the req.body.title with spaces replaced with plus signs(+)
        let drugTitle = req.body.title.replace(/\s/g, "+");
        axios.get(
            `https://api.fda.gov/drug/event.json?limit=1`
        ).then(
            (response) => {
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                res.json({error: error})
            }
        );
    });

    app.post("/api/drugs", (req, res) => {
        db.Drug.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    app.delete("/api/drugs/:id", (req, res) => {
        db.drug.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                rres.json({error: err});
            }
        );
    });

    // Send every other request to the React app
    // Define any API routes before this runs
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}