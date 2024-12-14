import Modal from "../Utils/Modal";
import React from "react";
import axios from "axios";
import { useEffect } from "react";

function HomePage(params) {
  const fields = {
    Game: "text",
    Date: "date",
  };

  const handleSubmit = (formData) => {
    console.log("Form Submitted:", formData);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/games/getGames")
      .then((response) => {
        console.log("Game created successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error creating game:", error);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="container d-flex justify-content-around">
            <a className="navbar-brand" href="#">
              POKER
            </a>
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
          </div>
        </div>
      </nav>
      <div className="container"></div>
      <Modal fields={fields} onSubmit={handleSubmit} modalID="addNewGame" />
    </>
  );
}

export default HomePage;
