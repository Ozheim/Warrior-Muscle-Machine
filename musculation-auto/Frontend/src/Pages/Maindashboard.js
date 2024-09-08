import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/modal";
import "../Styles/Pages/MainDashboard.scss";

const MainDashboard = () => {
  const [seances, setSeances] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/user/session", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSeances(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des séances :", error);
      });
  }, []);

  const buttonClick = (day) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header>
        <h1>Vos performances</h1>
      </header>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Semaine 1</th>
              <th>Semaine 2</th>
              <th>Semaine 3</th>
              <th>Semaine 4</th>
              <th>Semaine 5</th>
              <th>Semaine 6</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <tr key={day}>
                {[1, 2, 3, 4, 5, 6].map((week) => (
                  <td key={week}>
                    <button
                      onClick={() => buttonClick(day)}
                    >{` Jour ${day}`}</button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default MainDashboard;
