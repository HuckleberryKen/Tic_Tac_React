import React, { useState } from 'react'
import logo from '../logo.svg'

export default function StartScreen(props){
    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
    const handleChange = (e) => {
        if (e.target.name === "player1") setPlayer1(e.target.value.toUpperCase())
        else setPlayer2(e.target.value.toUpperCase())
    }
    const handleSubmit = () => {
        if(!player1 || !player2){
            alert('Please enter a name for each player')
        } else{
            props.updateState(player1,player2)
        }
    }

    return(
        <div className='container center'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Tic Tac React</h1>
            <input type="text" name="player1" placeholder='Enter player1 name' onChange={handleChange}/>
            <input type="text" name="player2" placeholder='Enter player2 name' onChange={handleChange}/>
            
            <button type="button" className="startButton" onClick={handleSubmit}>Start game</button>
        </div>
    )
}