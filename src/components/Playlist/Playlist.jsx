import style from './Playlist.module.scss'
import PlaylistTemplate from './PlaylistTemplate';

const Playlist = () => {
  return (
    <div className={style.PlaylistOfTheDayAndCharts}>
      <PlaylistTemplate
        img={"./images/Playlist-Img/Чарты.jpg"}
        name={"Чарты"}
        description={"Звучит на все чарты"}
      />
      
      <PlaylistTemplate
        img={"./images/Playlist-Img/Плейлист дня.jpg"}
        name={"Плейлист дня"}
        description={"Звучит по вашему каждый день"}
      />
    </div>
  );
};

export default Playlist;
