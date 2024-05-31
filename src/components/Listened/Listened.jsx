import Playlist from '../Playlist/Playlist';
import style from './Listened.module.scss'

const Listened = () => {
  return (
    <section className={style.listenedToItNotLongAgo}>
      <h1>Вы недавно слушали</h1>
      <Playlist />
    </section>
  );
};

export default Listened
