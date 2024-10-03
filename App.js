import {
  html,
  render,
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

function App() {
  return html` <h1>Put title here</h1> `;
}

render(html` <${App} /> `, document.getElementById("app"));
