import React from 'react'

function Buttons({buttonnme,handleClick}) {
  return (
    <>
    <button onClick={handleClick} className="btn">{buttonnme}</button>
    </>
  )
}

export default Buttons;
