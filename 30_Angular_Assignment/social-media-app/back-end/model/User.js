const mongoose = require("mongoose");
let UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: {
    type: String,
    default:
      "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png",
  },
  address: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
    mobile: { type: String },
  },
  followers: {
    count: { type: Number, default: 0 },
    profiles: [String],
  },
  following: {
    count: { type: Number, default: 0 },
    profiles: [String],
  },
  posts: {
    count: { type: Number, default: 0 },
    posts: [
      {
        image: { type: String },
        likeCount: { type: Number, default: 0 },
        commentCount: { type: Number, default: 0 },
        shareCount: { type: Number, default: 0 },
        comments: [
          {
            username: { type: String },
            comment: { type: String },
          },
        ],
        uploadDate: { type: Date },
      },
    ],
  },
  created: { type: Date, default: Date.now() },
});
let User = mongoose.model("user", UserSchema);
module.exports = User;
