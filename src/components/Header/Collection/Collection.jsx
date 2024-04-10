import { Link } from "react-router-dom"
import './Collection.scss'

const Collection = () =>{
  return (
    <main className="Collection">  
      <div className="main-info">
        <div className="main-collection">
          <img src="./src/img/profile_stock.jpg" alt="" />
          <div className="collection-text">
            <h3>Коллекция</h3>
            <h2>Данила</h2>
          </div>
        </div>
        {/* <Collection/> */}
        <nav>
          <ul>
            <li>
              <Link to="/collection/trecks">Треки</Link>
            </li>
            <li>
              <Link to="/collection/playlist">Плейлисты</Link>
            </li>
          </ul>
        </nav>
        {/* <Routes>
          <Route path="/playlist" element={<Playlist />}/>
        </Routes> */}
      </div>
    </main>
  );
}

export default Collection