import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Square from './Square'

//Stating game squares to an array of empty strings
function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  //initializing state of the player variable to "true"
  const [player, setPlayer] = useState(true)

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  //calculateWinner Function taking in an array
  function calculateWinner(squares) {
    //variable lines equal to an array
    const lines = [
      //creating sub array of winning combinations
      [0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
    ];
    //for loop over the lines variable
    for (let i = 0; i < lines.length; i++) {
      //destructure the values of each sub array from lines
      const [a, b, c] = lines[i];
//Check values of array a,b,c match. return string squares[a] won 
//else return string "who will win?""
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return `${squares[a]} won!`
    }
  }

  return "Who will win?"
}
//TODO
//Mapping over square arrays and render Square.jsx for each item in array
//Create span element as child of App "div"
//render jsx equal to calculateWinner invoked with squares array as argument
return (
  <div className='App'>
    <span>{calculateWinner(squares)}</span>
    <div className='container'>
      {squares.map((val, index) => {
        return (
          <Square
          setSquares={setSquares}
          index={index}
          squareValue={val}
          squares={squares}
          player={player}
          setPlayer={setPlayer}
          />
        )
      }
      )
      }

    </div>
    <button onClick={handleClick}>Reset</button>
  </div>
)
 }



export default App;
