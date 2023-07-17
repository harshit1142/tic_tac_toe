import React, { useState } from 'react'
import Button from '../Components/Button.js'

export default function () {
   const [winner,setWinner]=useState("");
   const [isFinish,setFinish]=useState(false);
   const [squares,setSquares]=useState(Array(9).fill("..."));
   const [xTurn,isxTurn]=useState(true);

   function Clicked(i){
    handle(i);
    CalculateWinner();
   }

   function handle(i){
    
    if(winner!=="")return;
    if(squares[i]!=="...")return ;
      const temp=squares.slice();
      if(xTurn){
        temp[i]="X";
      }
      else{temp[i]="O";}
      isxTurn(!xTurn);
      setSquares(temp);
      
   }
   function CalculateWinner(){
     const list=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
     var flag=0;
     for(var i=0;i<list.length;i++)
     {
          const [a,b,c]=list[i];
          if (squares[a].length===1 && squares[a] === squares[b] && squares[a] === squares[c]) {
            flag=1;
            setWinner(squares[a]);
          }
        }
        if(flag===0){
          flag=1;
          setFinish(isDone)
          if(isFinish===true){setWinner("Draw");}
        }
      }
   function isDone(){
    for(var i=0;i<9;i++)
    { 
        if(squares[i]==="..."){return false;}
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
           {(winner!=="")? <h1>Winner is {winner} </h1>:<h1></h1>}
        </div>
            <div className='container-fluid d-flex justify-content-center mt-5'>
            <div>
                <div className='row'>
                <div>
                  <Button id={squares[0]} onSquareClick={() => Clicked(0)}  />
                  <Button  id={squares[1]} onSquareClick={() => Clicked(1) } />
                  <Button  id={squares[2]} onSquareClick={() => Clicked(2)} />
                </div>
                </div>
                <div className='row'>
                <div>
                  <Button  id={squares[3]} onSquareClick={() => Clicked(3)} />
                  <Button  id={squares[4]} onSquareClick={() => Clicked(4)} />
                  <Button id={squares[5]} onSquareClick={() => Clicked(5)} />
                </div>
                </div>
                <div className='row'>
                <div>
                  <Button id={squares[6]} onSquareClick={() => Clicked(6)} />
                  <Button id={squares[7]} onSquareClick={() => Clicked(7)}/>
                  <Button id={squares[8]} onSquareClick={() => Clicked(8)}/>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
