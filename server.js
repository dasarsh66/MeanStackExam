const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var db
app.use(bodyParser.urlencoded({extended: true}))  
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  db.collection('EOCq').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {EOC: result})
    console.log(result)
  })
})


app.get('/i2.ejs', (req, res) => {
  db.collection('EOCq').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('i2.ejs', {EOC: result})
   // console.log(result)
   
  })
})
//condole.log(document.getElementById(inp))

app.post('/quotes', (req, res) => {
  db.collection('EOCq').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/i2.ejs')
  })
})
//var MongoClient = require('mongodb').MongoClient;

// Connect to the db
// MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
// });
//"mongodb://edm:edm@ds111895.mlab.com:11895/eoc"
const MongoClient = require('mongodb').MongoClient
MongoClient.connect("mongodb://localhost:27017/exampleDb", (err, database) => {
  // ... start the server
if (err) return console.log(err)
  db = database
app.listen(8080, function() {
  console.log('listening ')
})
})

