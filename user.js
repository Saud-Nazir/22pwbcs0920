
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//unique index on email field
userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);
