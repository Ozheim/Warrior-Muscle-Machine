const sendData = async () => {
  const forms = document.querySelectorAll(".exercice-form");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const sessions = [];

  const week = document.querySelector("#week-choice").value;
  const day = document.querySelector("#day-choice").value;

  forms.forEach((form) => {
    const exercice = form.querySelector('input[name="exercice"]').value;
    const weight = form.querySelector('input[name="weight"]').value;
    const repetitions = form.querySelector('input[name="repetitions"]').value;

    if (exercice && weight && repetitions) {
      sessions.push({ exercice, weight, repetitions });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });

  if (week && day && sessions.length > 0) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/saveWorkoutSession",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId: userId,
            week: parseInt(week),
            day: parseInt(day),
            sessions: sessions,
          }),
        }
      );

      if (response.ok) {
        console.log("Séance enregistrée avec succès");
        window.location.reload();
      } else {
        console.error("Erreur lors de l'enregistrement de la séance");
      }
    } catch (error) {
      console.error("Erreur serveur :", error);
    }
  } else {
    alert("Veuillez remplir tout les champs");
  }
};

export default sendData;
