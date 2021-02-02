var bodyParser = require('body-parser');
var express = require('express');
var app = express ();
var path = require('path');
var PORT = process.env.PORT || 8080;

// app.get('/', function (req, res){
// res.send('Hello Beautiful')
// })

//parse application
app.use(express.urlencoded({ extended: true }))

//parse application/json
app.use(bodyParser.json())

// app.use(function (req, res){
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);


app.listen(PORT, function (){
    console.log("App listening on PORT " + PORT)
});