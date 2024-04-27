import { Link } from "react-router-dom"
import './Collection.scss'
import MainCollection from "./mainCollection";

const Collection = () =>{
  return (
    <main className="Collection">
      <div className="main-info">
        <MainCollection/>
        <nav>
          <li>
            <Link to="/collection/trecks">Треки</Link>
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