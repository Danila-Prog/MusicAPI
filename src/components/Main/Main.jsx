import Playlist from '../Playlist/Playlist'
import classes from './Main.module.scss'
const Main = () =>{
    return (
      <main className={classes}>
        <h1>Главное</h1>
        <ul>
          <li>
            <a href="">Всё</a>
          </li>
          <li>
            <a href="">Чарт</a>
          </li>
          <li>
            <a href="">Подборки</a>
          </li>
        </ul>
        <button>
          <i className="fa-solid fa-play"></i>Моя волна
        </button>

        <Playlist/>
      </main>
    );
}

export default Main