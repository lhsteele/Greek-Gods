const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const AbodeSchema = newSchema({
  name: {
    type: String, 
    required: true,
    unique: true
  },
  coordinates: {
    type: String,
    required: true
  },
  residents: [
    {
      type: Schema.Types.ObjectId,
      ref: "god"
    }
  ]
})