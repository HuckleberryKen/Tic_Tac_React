import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Board from './components/Board';
import EndScreen from './components/EndScreen';

function App() {
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [inProgress, setInProgress] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [winner,setWinner] = useState(null)

  const updateState = (player1,player2) =>{
    setPlayer1(player1)
    setPlayer2(player2)
    setInProgress(true)
  }

  const endGame = (activePlayer) => {
    ////winner is !activeplayer
    let winner; 
    if(!activePlayer){
      winner = null
    } else {
      winner = activePlayer === 1 ? player2 : player1
    }
    setGameOver(true)
    setWinner(winner)
  }

  const newGame = () => {
    setInProgress(false)
    setGameOver(false)
  }

  return (
    <div className="App">
      {!inProgress  && !gameOver ?
      <StartScreen updateState={updateState}/>
      :
      inProgress && !gameOver ?
      <Board player1={player1} player2={player2} endGame={endGame}/>
      :
      <EndScreen winner={winner} newGame={newGame}/>
      }
    </div>
  );
}

export default App;
