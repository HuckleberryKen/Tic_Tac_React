import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import Board from './components/Board';

function App() {
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [inProgress, setInProgress] = useState(false)

  const updateState = (player1,player2) =>{
    setPlayer1(player1)
    setPlayer2(player2)
    setInProgress(true)
  }

  return (
    <div className="App">
      {!inProgress ?
      <StartScreen updateState={updateState}/>
      :
      <Board player1={player1} player2={player2}/>
      }
    </div>
  );
}

export default App;
