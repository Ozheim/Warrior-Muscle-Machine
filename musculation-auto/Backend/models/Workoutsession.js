const mongoose = require("mongoose");

const workoutSessionSchema = new mongoose.Schema({
  Userid: { type: String, required: true },
  Date: { type: Date, default: Date.now },
  exercises: { type: String, require: true },
  Sets: [
    {
      reps: { type: Number, require: true },
      weight: { type: Number, require: true },
    },
  ],
});

const WorkoutSession = mongoose.model("WorkoutSession", workoutSessionSchema);

module.exports = WorkoutSession;
