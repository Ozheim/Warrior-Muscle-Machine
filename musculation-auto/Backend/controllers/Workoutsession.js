const WorkoutSession = require("../models/WorkoutSession");

exports.saveWorkoutSession = async (req, res) => {
  try {
    const { userId, date, sessions } = req.body;

    if (!userId || !date || !sessions || sessions.length === 0) {
      return res.status(400).json({
        message:
          "Données invalides. Veuillez fournir toutes les informations requises.",
      });
    }

    const newWorkoutSession = new WorkoutSession({
      Userid: userId,
      Date: date,
      exercises: sessions.map((session) => session.exercice).join(", "),
      Sets: sessions.map((session) => ({
        reps: session.repetitions,
        weight: session.weight,
      })),
    });

    await newWorkoutSession.save();

    return res.status(201).json({
      message: "Séance enregistrée avec succès.",
      session: newWorkoutSession,
    });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de la séance :", error);
    return res
      .status(500)
      .json({ message: "Erreur du serveur. Veuillez réessayer plus tard." });
  }
};
