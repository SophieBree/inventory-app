var mongoose = require("mongoose");
const { DateTime } = require("luxon");

var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

// Virtual for author's lifespan
AuthorSchema.virtual("lifespan").get(function () {
  var db_formatted = this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toFormat('yyyy') : '';
  var dd_formatted = this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toFormat('yyyy') : '';
  return `${db_formatted} - ${dd_formatted}`;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);
