var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [{ type: String, index: true }],
  },
  { timestamps: true }
);
articleSchema.index({ tags: 1, title: "text", description: "text" });
module.exports = mongoose.model("Article", articleSchema);
