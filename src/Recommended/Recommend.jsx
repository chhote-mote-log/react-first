
import "./recommend.css"
import Buttons from "../components/Buttons";
const Recommend = ({handleClick})=> {
  return (
    <>
      <div className="recommend-container">
        <h3>Recommended</h3>
        <div className="button">
          <button className="btn" value="" onClick={handleClick}>All Products</button>
          <Buttons handleClick={handleClick} value="Nike" buttonnme="Nike" />
          <Buttons handleClick={handleClick} value="Adidas" buttonnme="Adidas"/>
          <Buttons handleClick={handleClick} value="Puma" buttonnme="Puma"/>
          <Buttons handleClick={handleClick} value="Vans" buttonnme="Vans"/>
        </div>
      </div>
    </>
  )
}

export default Recommend;
