const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const EmblemsSchema = new Schema({
  name: {
    type: String, 
    require: true
  },
  gods: [
    {
      type: Schema.Types.ObjectId,
      ref: "god"
    }
  ]
})

module.exports = mongoose.model("emblems", EmblemsSchema)