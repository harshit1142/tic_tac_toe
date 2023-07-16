import React, { useState } from 'react'



export default function Button({id,onSquareClick}) {

  return (
    <button style={{width:70,height:70}} name={id} onClick={onSquareClick}> {id} </button>
  )
}
