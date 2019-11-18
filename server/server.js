const mongoose = require('mongoose');
const express = require('express');
var model = require('./model');
var bodyParser = require('body-parser');
var app = express()

const MONGO_URL = 'mongodb://127.0.0.1:27017/rdxPractice';
mongoose.connect(MONGO_URL)
.then((db) => {console.log('MongoDB Connected');})
.catch(err => console.log('MongoDB::', err));
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  next();
});



//  GET request 

app.get('/testGet', function (req, res) {
    model.find({},function(err , userr){
    res.json(userr);
  });
});



// POST request 

app.post('/testPost', async function (req, res) {
  const { username, password } = req.body;
  
  // model.updateOne({ username, password } , {}, {upsert : true})
  // .then(function(user){
  //   // res.send(user);
  //   console.log('Post is called', user);
  // });

  const Response = await model.findOne({ username, password });


  console.log(Response.length);
  if (Response.length !== 0)
  {
    res.send( { isLoggedIn: true });
  } else {
    res.send( { isLoggedIn: false });
  };

})



// PUUUUUT request 

app.put('/testPut', function (req, res) {
  console.log(" Request Body " , req.body );
  model.findByIdAndUpdate({ _id : req.body.objToUpdate._id} , { name : req.body.updatedObj.name , age : req.body.updatedObj.age , phone : req.body.updatedObj.phone , email : req.body.updatedObj.email } , {upsert : false})
  .then(function(rs){
    console.log(" Response  : " , req.body.updatedObj);
    res.send(" Response  : " , rs);
  });
  res.send('Got a PUT request at /user');
})

app.listen(3002, () => console.log(`Example app listening on port ${3002}!`))
