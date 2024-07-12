import React from 'react'
import { IoBag } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

function Card({img,title,star,reviews,newPrice,prevPrice}) {
  
  return (
    <>
      <div className="card">
          <div className="card-img">
            <img src={img} alt={title} />
            <div className="card-detail">
              <h3 className="card-title">{title}</h3>
              <div className="review">
                <div className="star-review">
               {star}{star}{star}{star}
                </div>
                <span className="no-review">{reviews}</span>
              </div>
              <div className="last-card">
                   <div className="price">
                     <del>{prevPrice}</del> {newPrice}
                   </div>
                   <div className="bag-icon">
                     <IoBag />
                   </div>
                 </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card
