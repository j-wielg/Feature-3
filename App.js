import {
  html,
  render,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { Game } from "./Game/Game.js";

function App() {
  return html` <${Game}></${Game}> `;
}

render(html` <${App} /> `, document.getElementById("app"));
