const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  urlLink: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Links = mongoose.model('LINK_DETS', linkSchema);
module.exports = Links;