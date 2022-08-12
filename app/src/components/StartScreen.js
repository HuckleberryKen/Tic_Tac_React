import React, { useState } from 'react'
import logo from '../logo.svg'

export default function StartScreen(props){
    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
    const handleChange = (e) => {
        if (e.target.name === "player1") setPlayer1(e.target.value)
        else setPlayer2(e.target.value)
    }

    return(
        <div className='container center'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Tic Tac React</h1>
            <input type="text" name="player1" placeholder='Enter player1 name' onChange={handleChange}/>
            <input type="text" name="player2" placeholder='Enter player2 name' onChange={handleChange}/>
            
            <button type="button" onClick={()=> props.updateState(player1,player2)}>Start game</button>
        </div>
    )
}