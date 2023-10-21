import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';

import "./nav.css";
export default function Nav({handleInputChange}) {
  return (
    <>
      <nav>
        <div className="nav-container">
          <input type="text" placeholder="Search for shoes" onChange={handleInputChange}></input>
          </div>
        <div className="profile-container">
          <a href="#">
            <FiHeart className='nav-icons' />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className='nav-icons' />
          </a>
          <a href="#">
            <AiOutlineUserAdd className='nav-icons' />
          </a>
        </div>
      </nav>
    </>
  );
}
