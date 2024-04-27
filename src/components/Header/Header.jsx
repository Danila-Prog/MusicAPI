import './Header.scss'
import { Link } from 'react-router-dom';
const Header = () =>{
    return (
      <header>
        <button>
          <Link to="/"><h1>MusicAPI</h1></Link>
        </button>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/collection">Коллекция</Link>
          </li>
          <li>
            <button className="button-glass">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
        </ul>
        
         
      </header>
    );
}
export default Header