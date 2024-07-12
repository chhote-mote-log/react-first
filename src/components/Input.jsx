import React from 'react'

function Input({handleChange,value,name,title}) {
  return (
    <>
       <div className="item-radio">
        <span className="dot"></span>
        <input type="radio" name={name} id='sideall-item' onChange={handleChange} value={value}/>
        <label htmlFor="sideall-item" className='label-side'>
          {title}
          </label>
      </div>
    </>
  )
}

export default Input;
