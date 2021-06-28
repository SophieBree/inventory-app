var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 25 },
  password: { type: String, required: true, minLength: 8 },
  membershipStatus: {
    type: String,
    required: true,
    enum: ["Admin", "Member"],
    default: "Member",
  },
});

module.exports = mongoose.model("User", UserSchema);
