import Playlist from '../Playlist/Playlist';
import './Listened.scss'

const Listened = () => {
  return (
    <section className="listened-to-it-not-long-ago">
      <h1>Вы недавно слушали</h1>
      <Playlist />
    </section>
  );
};

export default Listened
