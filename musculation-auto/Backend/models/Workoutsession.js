const mongoose = require("mongoose");
const workoutSessionSchema = new mongoose.Schema({
  Userid: { type: String, required: true },
  Date: { type: Date, default: Date.now },
  week: { type: Number, required: true },
  day: { type: Number, required: true },
  exercises: { type: String, required: true },
  Sets: [
    {
      reps: { type: Number, required: true },
      weight: { type: Number, required: true },
    },
  ],
});

const WorkoutSession =
  mongoose.models.WorkoutSession ||
  mongoose.model("WorkoutSession", workoutSessionSchema);

module.exports = WorkoutSession;
