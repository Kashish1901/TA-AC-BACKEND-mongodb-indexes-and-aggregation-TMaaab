var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    address: {
      city: String,
      state: { type: String, unique: true, index: true },
      country: { type: String, index: true },
      pin: Number,
    },
  },
  { timestamps: true }
);

userSchema.index({ state: 1, country: 1 });
module.exports = mongoose.model("User", userSchema);
