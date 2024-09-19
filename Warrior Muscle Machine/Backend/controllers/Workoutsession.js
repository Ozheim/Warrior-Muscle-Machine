const WorkoutSession = require("../models/Workoutsession");

exports.saveWorkoutSession = async (req, res) => {
  try {
    const { userId, week, day, sessions, cycle } = req.body;

    if (
      !userId ||
      !week ||
      !day ||
      !sessions ||
      sessions.length === 0 ||
      !cycle
    ) {
      console.log("Missing or invalid fields");
      return res.status(400).json({
        message: "Please provide all required information.",
      });
    }

    const newWorkoutSession = new WorkoutSession({
      Userid: req.auth.userId,
      week: week,
      day: day,
      cycle: parseInt(cycle, 10),
      exercises: sessions.map((session) => session.exercice).join(", "),
      Sets: sessions.map((session) => ({
        reps: session.repetitions,
        weight: session.weight,
      })),
    });

    await newWorkoutSession.save();
    return res.status(201).json({
      message: "Workout session saved.",
      session: newWorkoutSession,
    });
  } catch (error) {
    console.error("Error while saving:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getSession = async (req, res) => {
  try {
    const userId = req.auth.userId;
    let cycle = req.query.cycle;

    const query = { Userid: userId };
    if (cycle) {
      query.cycle = parseInt(cycle, 10);
    }

    console.log("MongoDB query with cycle:", query);

    const sessions = await WorkoutSession.find(query);

    if (sessions.length > 0) {
      return res.status(200).json(sessions);
    } else {
      return res
        .status(404)
        .json({ message: "No session found for this cycle" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getWeek = async (req, res) => {
  try {
    const userId = req.auth.userId;

    const weekSessions = await WorkoutSession.find({
      Userid: userId,
      week: req.query.week,
    });

    if (weekSessions.length > 0) {
      return res.status(200).json(weekSessions);
    } else {
      return res.status(404).json({ message: "No week found." });
    }
  } catch (error) {
    console.error("Error retrieving the week:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

exports.getDay = async (req, res) => {
  try {
    const userId = req.auth.userId;

    const daySessions = await WorkoutSession.find({
      Userid: userId,
      week: req.query.week,
      day: req.query.day,
    });

    if (daySessions.length > 0) {
      return res.status(200).json(daySessions);
    } else {
      return res.status(404).json({ message: "No day found." });
    }
  } catch (error) {
    console.error("Error retrieving the day:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

exports.getExercice = async (req, res) => {
  try {
    const userId = req.auth.userId;

    const exercises = await WorkoutSession.find({ Userid: userId });

    if (exercises.length > 0) {
      return res.status(200).json(exercises);
    } else {
      return res.status(404).json({ message: "No exercise found." });
    }
  } catch (error) {
    console.error("Error retrieving exercises:", error);
    return res.status(500).json({ message: "Server error." });
  }
};
