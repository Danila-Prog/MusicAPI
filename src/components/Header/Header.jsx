import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleInputClick = (e) => {
    e.stopPropagation();
  };
  
  return (
    <header className={style.header}>
      <button>
        <Link to="/">
          <h1>MusicAPI</h1>
        </Link>
      </button>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/collection/tracks">Коллекция</Link>
        </li>
        <li>
          <button
            className={style.buttonGlass}
            onClick={() => setShowSearchInput(!showSearchInput)}
          >
            {showSearchInput ? (
              <div className={style.glassInput}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Введите название трека"
                  onClick={handleInputClick}
                />
              </div>
            ) : (
              <i className="fa-solid fa-magnifying-glass"></i>
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};
export default Header;
