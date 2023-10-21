// import { AiFillStar } from "react-icons/ai";
// import { BsFillBagHeartFill } from "react-icons/bs";
import "./products.css";
import Card from "../components/Card";
export default function Products({result}) {
  return (
    <>
      <section className="card-container">
        {result}
      </section>
    </>
  );
}
