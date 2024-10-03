// React component which renders the game state to the screen
// Statefule component that requires fetching the game state json

import {
  html,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Board } from "./Board.js";

// Helper function that fetches game data
export function fetchGame() {
  const axios = window.axios;
  return axios.get("../JSON/sample_game.json").then((response) => {
    return response.data;
  });
}

// Component that renders the game
// Requires the game to be in the correct JSON format
export function Game(gamestate) {
  gamestate = gamestate.gamestate;
  // Converts the player from +-1 to 1 or 2
  var convert_player = (p) => {
    if (p == 1) return "1";
    else return "2";
  };
  return html`
    <p>Turn: ${gamestate.turn}</p>
    <p>Player: ${convert_player(gamestate.player)}</p>
    <${Board} pieces="${gamestate.board}" />
  `;
}
