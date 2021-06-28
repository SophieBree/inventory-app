var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
  pages: { type: Number },
  availability: {
    type: String,
    required: true,
    enum: ["In Stock", "Low Stock", "Out of Stock"],
    default: "Out of Stock",
  },
  price: { type: Number, required: true },
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  return "/catalog/book/" + this._id;
});

// Export model
module.exports = mongoose.model("Book", BookSchema);
