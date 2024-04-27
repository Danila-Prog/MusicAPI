import { useState } from 'react';
import scss from './playlistComp.module.scss';
import PropTypes from 'prop-types';
import MymodalPlaylist from '../Ui/Mymodal/ModalPlaylist';
import ChartsOfNavBar from '../Charts/ChartsOfNavBar';
import styleModal from '../Ui/Mymodal/ModalPlaylist.module.scss'

const PlaylistComp = ({ images, name}) => {

  const [modalPlaylist, setModalPlaylist] = useState(false)

  return (
    <>
      <button
        className={scss.playlistCompStyle}
        onClick={() => setModalPlaylist(!modalPlaylist)}
      >
        <img src={images} alt="" />
        <h1>{name}</h1>
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
    </>
  );
  
};
PlaylistComp.propTypes = {
    images: PropTypes.node,
    name: PropTypes.node,
  };

export default PlaylistComp;
