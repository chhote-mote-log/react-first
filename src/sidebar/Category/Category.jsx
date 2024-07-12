import React from 'react'
import "./category.css"
import Input from '../../components/Input'
function Category({handleChange}) {
  return (
    <>
     <div className="side-qcontainer">
      <h3>Category</h3>
     </div>
     <div className="side-items">
     <div className="item-radio">
        <span className="dot"></span>
        <input type="radio" name="ctegoty" id='sideall-item' onChange={handleChange} value=""/>
        <label htmlFor="sideall-item" className='label-side'>
          All Products
          </label>
      </div>
      <Input handleChange={handleChange} value="sneakers" name ="ctegoty" title="Sneakers"/>
      <Input handleChange={handleChange} value="flats" name ="ctegoty" title="Flats"/>
      <Input handleChange={handleChange} value="heels" name ="ctegoty" title="Heels"/>
      <Input handleChange={handleChange} value="sandals" name ="ctegoty" title="Sandals"/>
      
     </div>
    </>
  )
}

export default Category
