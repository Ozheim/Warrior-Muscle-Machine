const sendData = async () => {
  const date = document.querySelector('input[name="date"]').value;
  const forms = document.querySelectorAll(".exercice-form");
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const sessions = [];

  forms.forEach((form) => {
    const date = document.querySelector('input[name="date"]');
    const exercice = document.querySelector('input[name="exercice"]').value;
    const weight = form.querySelector('input[name="weight"]').value;
    const repetitions = form.querySelector('input[name="repetitions"]').value;

    if (exercice && weight && repetitions && date) {
      sessions.push({ exercice, weight, repetitions });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  });

  if (date && sessions.length > 0) {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/saveWorkoutSession",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId: userId, date, sessions }),
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
    alert("remplissez les champs vides");
  }
};

export default sendData;
