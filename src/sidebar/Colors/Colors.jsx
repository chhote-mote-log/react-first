import "./colors.css"
import Input from "../../components/Input"
function Colors({handleChange}) {
  
  return (
    <>
      <div className="side-qcontainer color-title">
      <h3>Color</h3>
     </div>
     <div className="side-items">
     <div className="item-radio">
        <span className="dot"></span>
        <input type="radio" name="te" id='sideall-item' onChange={handleChange} value=""/>
        <label htmlFor="sideall-item" className='label-side'>
          All Products
          </label>
      </div>
      <Input handleChange={handleChange} name="te" value="black" title="Black"/>
      <Input handleChange={handleChange} name="te" value="blue" title="Blue"/>    
      <Input handleChange={handleChange} name="te" value="green" title="Green"/>    
      <Input handleChange={handleChange} name="te" value="white" title="White"/>    
      <Input handleChange={handleChange} name="te" value="red" title="Red"/>
     </div>
    </>
  )
}

export default Colors
