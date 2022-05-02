import React from "react";

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (!this.props.tile.explored) {
            // false = revealing
            // true = flagging
            // If alt click deal with flagging
            if (event.altKey) {
                this.props.updateGame(this.props.tile, true);
            } else {
                this.props.updateGame(this.props.tile, false);
            }
        }
    }

    render() {
        let status;
        let text = "";
        let tile = this.props.tile;
        if (tile.explored) {
            if (tile.bombed) {
                status = "bombed";
                text = "\u2622"; 
            } else { 
                status = "explored"
                let count = tile.adjacentBombCount();
                text = (count > 0) ? count : "";
            }
        } else {
            if (tile.flagged) {
                status = "flagged";
                text = "\u2691";
            } else {
                status = "unexplored";
            }
        }
        return (
            <div 
            onClick={(event)=>this.handleClick(event)} className={`tile ${status}`} 
            >
                {text}
            </div>
        )
    }
}