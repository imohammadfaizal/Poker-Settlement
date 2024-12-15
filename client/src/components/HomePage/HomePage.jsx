import Modal from "../Utils/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getGames, addGame } from "../../service/gameServices";
import GameTable from "./GameTable";

function HomePage(params) {
  const fields = {
    name: "text",
    date: "date",
  };
  const [gameData, setGameData] = useState([]);

  const fetchGameData = async () => {
    try {
      const response = await getGames({});
      setGameData(response);
    } catch (err) {
      console.log("Error fetching game data:", err);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await addGame({ body: formData });
      fetchGameData();
    } catch (err) {
      console.log("Error fetching game data:", err);
    }
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="container d-flex justify-content-around">
            <span className="navbar-brand fw-bold">POKER</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addNewGame"
              >
                Add New Game
              </button>
            </div>
            <Modal
              fields={fields}
              onSubmit={handleSubmit}
              modalID="addNewGame"
            />
          </div>
        </div>
      </nav>
      <div className="container">
        <GameTable gameData={gameData} />
      </div>
    </>
  );
}

export default HomePage;
