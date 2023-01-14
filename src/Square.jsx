import React from "react";
//TODO
//handling clicks for individual squares
//checking the value in props.squareValue
const Square = (props) => {
    const handleClick = () => {
        if (!props.squareValue) {
            if (props.player) {
                props.squares.splice(props.index, 1, "X");
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            } else {
                //change value to O, invoke props.setSquares with new value
                props.squares.splice(props.index, 1, "O") 
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            }
        }
    };
    return (
//onClick property with value of handleClick
//render the "O" as the Devmountain Logo
    <div className="square" onClick={handleClick}>
        {props.squareValue === "O" ? <img src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/devmountain/original.png?1568083750"/> : props.squareValue}
    </div>
    );
};

export default Square;