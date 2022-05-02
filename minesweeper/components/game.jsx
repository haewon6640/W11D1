import React from "react";
import Board from "./board";
import * as Minesweeper from "../minesweeper.js";


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(props.gridSize, props.numBombs)
        }
        this.updateGame = this.updateGame.bind(this);
        this.restart = this.restart.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.props.restartGame.querySelector("#modal-button").addEventListener("click", ()=>{this.restart()})
    }   

    updateGame(tile, flagged) {
        // if (tile.flagged && flagged) {
        // } else if (!tile.flagged && flagged) {
        // } else if (!flagged) tile.explored = true;
        // tile.toggleFlag()
        if (flagged) {
            tile.toggleFlag();
        } else tile.explore();
        this.setState({board: this.state.board});

    }

    componentDidUpdate(){
        if (this.state.board.won() || this.state.board.lost()){
            let text = this.state.board.won() ? "YOU WIN" : "YOU LOSE"
            this.props.restartGame.querySelector("h1").innerHTML = text;
            this.toggleModal();
        }
    }

    toggleModal() {
        this.props.restartGame.style.display = (this.props.restartGame.style.display === "flex") ? "none" : "flex";
    }
    
    restart(){
        this.setState ({board: new Minesweeper.Board(this.props.gridSize, this.props.numBombs)})
        this.toggleModal();
    }

    render() {
        return (
            <Board board={this.state.board} updateGame={this.updateGame}/>
        )
    }
}