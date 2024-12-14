import Modal from "../Utils/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Link,
  TableSortLabel,
  Box,
  styled,
} from "@mui/material";
import GameTable from "./GameTable";

function HomePage(params) {
  const fields = {
    name: "text",
    date: "date",
  };
  const [gameData, setGameData] = useState([]);

  const fetchGameData = () => {
    axios
      .get("http://localhost:5000/api/games/getGames")
      .then((response) => {
        setGameData(response.data);
        console.log("Updated game data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
      });
  };

  const handleSubmit = (formData) => {
    console.log("Form Submitted:", formData);
    axios
      .post("http://localhost:5000/api/games/addGame",formData)
      .then((response) => {
        fetchGameData()
      })
      .catch((error) => {
        console.error("Error creating game:", error);
      });
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="container d-flex justify-content-around">
            <a className="navbar-brand fw-bold" href="#">
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
      <div className="container">
        <GameTable gameData={gameData} />
      </div>
      <Modal fields={fields} onSubmit={handleSubmit} modalID="addNewGame" />
    </>
  );
}

export default HomePage;
