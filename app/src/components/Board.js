import React, { useState } from "react";
import logo from '../logo.svg'
import x from '../x.svg'
import o from '../o.svg'

export default function Board(props){
    const array = new Array(9).fill(0)
    const [activePlayer,setActivePlayer] = useState(1)
    const [clicked,setClicked] = useState({
        0:{
            clicked: null,
            player: null
        },
        1:{
            clicked: null,
            player: null
        },
        2:{
            clicked: null,
            player: null
        },
        3:{
            clicked: null,
            player: null
        },
        4:{
            clicked: null,
            player: null
        },
        5:{
            clicked: null,
            player: null
        },
        6:{
            clicked: null,
            player: null
        },
        7:{
            clicked: null,
            player: null
        }, 
        8:{
            clicked: null,
            player: null
        },

    })



    const [isHovered,setIsHovered] = useState({
        index: null,
        styles: null
    })

    const hoverHandler = (index) => {
        setIsHovered({
            index: index
        })
    }

    const handleClick = (index,activePlayer) => {
        if(!clicked[index].clicked){
        setClicked({
            ...clicked,
            [index]: {
                clicked:true,
                player: activePlayer
            }
        })
        setActivePlayer(activePlayer === 1 ? 2 : 1)
        }
    }


    const handleStyles = (index)=>{
        if(clicked[index].clicked && clicked[index].player === 1){
            return (
                {
                    backgroundColor: '#FFA000',
                    backgroundImage:`url(${x})`
                }
            )
        } else if(clicked[index].clicked && clicked[index].player === 2){
            return(
                {
                    backgroundColor: '#3688C3',
                    backgroundImage: `url(${o})`
                }
            )
        } else if(!clicked[index].clicked && isHovered.index === index){
            return(
                {
                    backgroundImage: activePlayer === 1 ? `url(${x})`: `url(${o})` 

                }
            )
        }
        
        
    }

    return(
        <div>
            <div className="flex-between">
                <div className={`player-box player1 ${activePlayer === 1 ? "active": null}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg>
                    <p>{props.player1}</p>
                </div>
                <div>
                    <h3>Tic Tac React</h3>
                </div>
                <div className={`player-box player2 ${activePlayer === 2 ? "active": null}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg>
                    <p>{props.player2}</p>
                </div>

            </div>
       
            <ul className="boxes">
                {array.map((item, index)=>{
                    return(
                        <li className="box"
                        key={index} 
                        onMouseEnter={(e)=> hoverHandler(index) }
                        onMouseLeave={()=> setIsHovered({index:null})} 
                        style={handleStyles(index)}
                        onClick={()=> handleClick(index,activePlayer)}
                        >
                        </li>
                    )
                })}
          
            </ul>
            
        </div>
    )
}