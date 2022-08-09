import React from 'react'
import logo from '../logo.svg'

export default function StartScreen(){
    return(
        <div className='container center'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Tic Tac React</h1>
            <input type="text" placeholder='Enter player1 name'/>
            <input type="text" placeholder='Enter player2 name'/>
            <button type="button">Start game</button>
        </div>
    )
}