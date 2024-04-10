import './Listened.scss'

const Listened = () => {
  return (
    <section className="listened-to-it-not-long-ago">
      <h1>Вы недавно слушали</h1>
      <div className="playlist-blocks">
        <div className="Charts-block">
          <img src="" alt="" />
          <h2>Чарты</h2>
          <p>Звучит на все чарты</p>
        </div>
        <div className="Playlist-of-the-day">
          <img src="" alt="" />
          <h2>Плейлист дня</h2>
          <p>Звучит по вашему каждый день</p>
        </div>
      </div>
    </section>
  );
};

export default Listened
