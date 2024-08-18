const mongoose = require("mongoose");

const workoutSessionSchema = new mongoose.schema({
  Userid: { type: String, require: true },
  Date: { type: Date, default: Date.now },
  exercises: { type: String, require: true },
  Sets: [
    {
      reps: { type: Number, require: true },
      weight: { type: Number, require: true },
    },
  ],
});
