// React component which renders the game state to the screen
// Statefule component that requires fetching the game state json

import {
  html,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

// Helper function that fetches game data
export function fetchGame() {
  const axios = window.axios;
  return axios.get("../JSON/start_game.json").then((response) => {
    return response.data;
  });
}

// Component that renders the game
// Requires the game to be in the correct JSON format
export function Game(gamestate) {
  gamestate = gamestate.gamestate;
  return html` <h2>${gamestate.turn}</h2> `;
}
