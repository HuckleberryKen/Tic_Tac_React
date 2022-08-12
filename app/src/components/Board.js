import React, { useState } from "react";
import logo from '../logo.svg'
import x from '../x.svg'
import o from '../o.svg'

export default function Board(props){
    const array = new Array(9).fill(0)
    const [activePlayer,setActivePlayer] = useState("player1")
    const [isHovered,setIsHovered] = useState({
        index: null,
        styles: {
            backgroundColor:'red'
        }
    })
    const hoverHandler = (index) => {
        setIsHovered({
            index: index,
            styles: {
                backgroundImage: activePlayer === "player1" ? `url(${x})`: `url(${o})` ,
            }
        })
    }
    return(
        <div>
            <div className="flex-between">
                <div className="player-box">
                    <p>player1</p>
                    <p>X</p>
                </div>
                <div>
                    <h3>Tic Tac React</h3>
                </div>
                <div className="player-box">
                    <p>player 2</p>
                    <p>O</p>
                </div>
            </div>
       
            <ul className="boxes">
                {array.map((item, index)=>{
                    return(
                        <li className="box"
                        key={index} 
                        onMouseEnter={(e)=> hoverHandler(index) }
                        onMouseLeave={()=> setIsHovered({index:null})} 
                        style={isHovered.index === index ? isHovered.styles: {}}
                        >
                        </li>
                    )
                })}
          
            </ul>
            
        </div>
    )
}