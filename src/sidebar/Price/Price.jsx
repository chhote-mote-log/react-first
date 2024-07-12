
import "./price.css"
import Input from "../../components/Input"
function Price({handleChange}) {
  return (
    <>
     <div className="side-qcontainer price-title">
       <h3>Price</h3>
     </div> 
     <div className="side-items">
     <div className="item-radio">
        <span className="dot"></span>
        <input type="radio" name="tet" id='sideall-item' onChange={handleChange} value=""/>
        <label htmlFor="sideall-item" className='label-side'>
          All Products
          </label>
      </div>
        
        <Input handleChange={handleChange} name="tet" value={50} title="$0-50"/>
        <Input handleChange={handleChange} name="tet" value={100} title="$50-$100"/>
        <Input handleChange={handleChange} name="tet" value={150} title="$100-$150"/>
        <Input handleChange={handleChange} name="tet" value={200} title="Over $150"/>
        
      </div>
    </>
  )
}

export default Price
