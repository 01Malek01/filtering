import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card({img , title , star , reviews , newPrice,prevPrice}) {
  return (
    <section className="card">
    <img
      className="card-img"
      src={img}
      alt="shoe"
    />
    <div className="card-detailes">
      <h3 className="card-title">{title}</h3>
      <section className="card-reviews">
   {star}
        <span className="total-reviews">{reviews}</span>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> 
          {newPrice}$
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </section>
    </div>
  </section>
  )
}
