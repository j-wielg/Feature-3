// React component which renders the game state to the screen
// Statefule component that requires fetching the game state json

import {
  html,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

// Component that renders the game
// Requires the game to be in the correct JSON format
function Game(gamestate) {
  return html` <h2>Hello</h2> `;
}
