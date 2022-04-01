const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    userName: [String],
    userAvatar: [String],
  }, {
    timestamps: true
  });

const artistSchema = new Schema({
    name:{ type: String, required: true},
    birthday: Date,
    genre: { type: String },
    hobby: { type: String },
    onInstagram:{ type: Boolean },
    reviews: [reviewSchema],
    user: { type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('Artist', artistSchema)