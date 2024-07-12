import "./sidebar.css"
import { GiShoppingCart } from "react-icons/gi";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
function Sidebar({ handleChange }) {
 
  return (
    <>
      <div className="side-container">
        <div className="logo-container">
          <h1><GiShoppingCart /></h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </div>
    </>
  )
}

export default Sidebar;
