import {
  html,
  render,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Game, fetchGame } from "./Game/Game.js";

function App() {
  // Manages the game state
  const [gamedata, setGamedata] = useState({});

  // Change the gamestate when the axios request completes
  useEffect(() => {
    fetchGame().then((game) => {
      setGamedata(game);
      console.log("Received gamestate JSON: ", game);
    });
  }, []);
  return html` <${Game} gamestate=${gamedata}></${Game}> `;
}

render(html` <${App} /> `, document.getElementById("app"));
