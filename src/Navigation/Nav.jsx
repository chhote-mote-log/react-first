

import { FaHeart , FaRegUser} from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md"
import "./nav.css"
function Nav({handleInputChange,query}) {
  return (
    <>
     <div className="nav-bar">
    
      <div className="input">
        <input type="text" placeholder='Enter your search shoe' onChange={handleInputChange} value={query}/>
      </div>
      <div className="nav-icons">
      <FaHeart />
      <MdOutlineShoppingCart />
      <FaRegUser />

      </div>
      </div> 
    </>
  )
}

export default Nav;
