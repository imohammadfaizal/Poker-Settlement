import { api } from "../api/api";

const getGames = async (params) => {
  const response = await api.Games.find(params);
  return response;
};

const addGame = async (params) => {
  const response = await api.Games.save(params);
  return response;
};

export { getGames, addGame };
