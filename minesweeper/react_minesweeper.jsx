import ReactDOM from "react-dom";
import React from "react";
import Game from "./components/game"

document.addEventListener("DOMContentLoaded",()=>{
    const main = document.getElementById("main");
    const restartGame = document.getElementById("modal")
    ReactDOM.render(<Game restartGame={restartGame} gridSize={10} numBombs={10} />, main);
})