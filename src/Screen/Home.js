import React, { useState } from 'react'
import Button from '../Components/Button.js'

export default function () {
   const [winner,setWinner]=useState("");
   const [squares,setSquares]=useState(Array(9).fill("..."));
   const [xTurn,isxTurn]=useState(true);

   function handleSquare(i){
    if(winner!="")return;
    if(squares[i]!="...")return ;
      const temp=squares.slice();
      if(xTurn){
        temp[i]="X";
      }
      else{temp[i]="O";}
      isxTurn(!xTurn);
      setSquares(temp);
      setWinner((CalculateWinner()!=null)?CalculateWinner():"");
      if(isDone()==true){winner="DRAW";}
   }
   function CalculateWinner(){
    const list=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  
        for(const i=0;i<list.length;i++)
        {
          const [a,b,c]=list[i];
          if (squares[a]!="..." && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
          }
          return null;
        }
   }
   function isDone(){
    for(const i=0;i<9;i++)
    {
      if(squares[i]=="..."){return false;}
    }
    return true;
   }
  return (
    <div className='container-fluid home d-flex flex-column align-items-center'>
        <div className='container-fluid d-flex justify-content-center w-100 '>
           <div className='logo'>Tic Tac Toe</div>
        </div>
        <div className='ttt'>
        <div className='row'>
           <h1>Player A ---{'>'} X </h1>
           <h1>Player B ---{'>'} O</h1>
           {(winner!="")? <h1>Winner is {winner} </h1>:<h1></h1>}
        </div>
            <div className='container-fluid d-flex justify-content-center mt-5'>
            <div >
                <div className='row'>
                <div>
                  <Button id={squares[0]} onSquareClick={() => handleSquare(0)}/>
                  <Button  id={squares[1]} onSquareClick={() => handleSquare(1)}/>
                  <Button  id={squares[2]} onSquareClick={() => handleSquare(2)}/>
                </div>
                </div>
                <div className='row'>
                <div>
                  <Button  id={squares[3]} onSquareClick={() => handleSquare(3)}/>
                  <Button  id={squares[4]} onSquareClick={() => handleSquare(4)}/>
                  <Button id={squares[5]} onSquareClick={() => handleSquare(5)}/>
                </div>
                </div>
                <div className='row'>
                <div>
                  <Button id={squares[6]} onSquareClick={() => handleSquare(6)}/>
                  <Button id={squares[7]} onSquareClick={() => handleSquare(7)}/>
                  <Button id={squares[8]} onSquareClick={() => handleSquare(8)}/>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
