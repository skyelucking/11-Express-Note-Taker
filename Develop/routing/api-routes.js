const path = require("path");
const fs = require("fs");
const notesArray = require("../db/db.json");

module.exports = function(app) {
    app.get('/api/notes', function (req, res) {
        res.json(notesArray);
    })
};
    