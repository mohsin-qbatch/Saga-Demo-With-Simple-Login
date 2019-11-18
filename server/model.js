var mongoose = require('mongoose');
// import mongoose from 'mongoose'

  var userSchema = new mongoose.Schema({
    username :  {type : String},
    password :  {type : String}
  });

const  user = mongoose.model('users' , userSchema);
module.exports = user;