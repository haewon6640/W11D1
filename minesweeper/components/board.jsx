import React from "react";
import Tile from "./tile";

export default class Board extends React.Component {
    constructor(props) {
        super(props);    
        this.renderRows = this.renderRows.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
        
    }   

    render() {
        return (
            <div id="board">
               {this.renderRows()}
            </div>
        )
    }

    renderRows() {
        const board = this.props.board;
        
        return board.grid.map((row,i)=>{
            return (<div key={`row-${i}`} className="row">
                {this.renderTiles(row,i)}
            </div>);
        });
    }
    
    renderTiles(row,i) {
        const board = this.props.board;
        
        return row.map((tile, j)=>{
            return (<Tile 
                tile={tile}
                updateGame={this.props.updateGame}
                key={i * board.gridSize + j} />
            );
        });

    }
}