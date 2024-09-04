const WorkoutSession = require("../models/Workoutsession");

exports.saveWorkoutSession = async (req, res) => {
  try {
    const { userId, date, sessions } = req.body;

    if (!userId || !date || !sessions || sessions.length === 0) {
      return res.status(400).json({
        message: " Please provide all required information.",
      });
    }

    const newWorkoutSession = new WorkoutSession({
      Userid: req.auth.userId,
      Date: date,
      exercises: sessions.map((session) => session.exercice).join(", "),
      Sets: sessions.map((session) => ({
        reps: session.repetitions,
        weight: session.weight,
      })),
    });

    await newWorkoutSession.save();

    return res.status(201).json({
      message: "Workout session  saved.",
      session: newWorkoutSession,
    });
  } catch (error) {
    console.error("Error while saving the workout session:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
