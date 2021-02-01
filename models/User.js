const {
  Schema,
  model,
  Types
} = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  works: [{
    type: Types.ObjectId,
    ref: 'Work'
  }]
});

module.exports = model('User', schema);
