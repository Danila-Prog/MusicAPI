import './Header.scss'
import { Link } from 'react-router-dom';
const Header = () =>{
    return (
      <header>
        <button>
          <h1>MusicAPI</h1>
        </button>
        <ul>
          <li>
            <Link to="/app">Главная</Link>
          </li>
          <li>
            <Link to="/collection">Коллекция</Link>
          </li>
          <li>
            <button className="button-glass">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
          <li>
            <button className="button-img">
              <img src="./src/img/profile_stock.jpg" alt="" />
            </button>
          </li>
        </ul>
        
         
      </header>
    );
}
export default Header