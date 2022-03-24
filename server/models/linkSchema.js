const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Links = mongoose.model('LINK_DETS', linkSchema);
module.exports = Links;