const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String}
})
const Users = mongoose.model('Users', userSchema);
module.exports = Users