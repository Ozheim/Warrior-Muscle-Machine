const WorkoutSession = require("../models/Workoutsession");

exports.saveWorkoutSession = async (req, res, next) => {
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
      console.log("Champs manquants ou invalides");
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
    console.error("Erreur lors de la sauvegarde :", error);
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

    console.log("Requête MongoDB avec le cycle :", query);

    const sessions = await WorkoutSession.find(query);

    if (sessions.length > 0) {
      return res.status(200).json(sessions);
    } else {
      return res
        .status(404)
        .json({ message: "Pas de séance trouvée pour ce cycle" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Erreur du serveur" });
  }
};
