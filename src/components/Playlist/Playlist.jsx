import { useState } from 'react';
import cl from './Playlist.module.scss'
import MymodalPlaylist from '../Ui/Mymodal/ModalPlaylist';
import ChartsOfNavBar from '../Charts/ChartsOfNavBar';
import styleModal from '../Ui/Mymodal/ModalPlaylist.module.scss'
const Playlist = () => {

  const [modalPlaylist, setModalPlaylist] = useState(false)

  return (
    <div className={cl.PlaylistOfTheDayAndCharts}>
      <button
        className={cl.buttonCharts}
        onClick={() => setModalPlaylist(!modalPlaylist)}
      >
        <div className="Charts-block">
          <img src="./src/img/charts.jpg" alt="" />
          <h2>Чарты</h2>
          <p>Звучит на все чарты</p>
        </div>
      </button>
      <button
        className={cl.buttonCharts}
        onClick={() => setModalPlaylist(!modalPlaylist)}
      >
        <div className="Playlist-of-the-day">
          <img src="./src/img/day.jpg" alt="" />
          <h2>Плейлист дня</h2>
          <p>Звучит по вашему каждый день</p>
        </div>
      </button>
      <MymodalPlaylist visible={modalPlaylist} setVisible={setModalPlaylist}>
        <div className={styleModal.styleModalOfPlaylist}>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setModalPlaylist(!modalPlaylist)}
          ></i>
          <ChartsOfNavBar />
        </div>
      </MymodalPlaylist>
    </div>
  );
};

export default Playlist;
