const mongoose = require('mongoose');
const mongooseBcrypt = require('mongoose-bcrypt');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
    default: 1,
  },
  accessToken: {
    type: String,
  },
  age: {
    type: Number,
  },
}, {
  timestamps: true
});


UserSchema.plugin(mongooseBcrypt);

module.exports = mongoose.model('User', UserSchema);
