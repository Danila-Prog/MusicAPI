import { Link } from "react-router-dom";
import cl from './Main.module.scss'
const MainLink = () => {
  return (
    <div className={cl.MainLink}>
      <h1>Главное</h1>
      <ul>
        <li>
          <Link to="/">Всё</Link>
        </li>
        <li>
          <Link to="/charts">Чарт</Link>
        </li>
        <li>
          <Link to="/compilations">Подборки</Link>
        </li>
      </ul>
    </div>
  );
};
export default MainLink;
