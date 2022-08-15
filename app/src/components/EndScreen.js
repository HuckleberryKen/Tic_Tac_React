import React from 'react'
import logo from '../logo.svg'
export default function EndScreen(props){
    return(
        <div className='container center'>
            <img src={logo} className="App-logo" alt="logo" />
            {props.winner? 
                <h2>{props.winner} WINS!</h2>
                :
                <h2>TIE!</h2>
            }
            <button type="button" onClick={props.newGame}>New game</button>
        </div>
    )
}