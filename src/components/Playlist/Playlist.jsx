import './Playlist.scss'
const Playlist = () => {
  return (
    <div className="Playlist-of-the-day-and-charts">
      <div className="Charts-block">
        <img src="./src/img/charts.jpg" alt="" />
        <h2>Чарты</h2>
        <p>Звучит на все чарты</p>
      </div>

      <div className="Playlist-of-the-day">
        <img src="./src/img/day.jpg" alt="" />
        <h2>Плейлист дня</h2>
        <p>Звучит по вашему каждый день</p>
      </div>
    </div>
  );
};

export default Playlist;
