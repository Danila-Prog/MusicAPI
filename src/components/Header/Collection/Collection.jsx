import style from './Collection.module.scss'
import { Link } from "react-router-dom"
import MainCollection from "./MainCollection";

const Collection = () =>{
  return (
    <main className={style.collection}>
      <div className={style.mainInfo}>
        <MainCollection/>
        <nav>
          <li>
            <Link to="/collection/tracks">Треки</Link>
          </li>
          <li>
            <Link to="/collection/playlist">Плейлисты</Link>
          </li>
        </nav>
      </div>
    </main>
  );
}



export default Collection