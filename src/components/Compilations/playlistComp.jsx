import { useState } from 'react';
import style from './playlistComp.module.scss';
import MymodalPlaylist from '../Ui/Mymodal/ModalPlaylist';
import styleModal from '../Ui/Mymodal/ModalPlaylist.module.scss'
import ChartsTrack from '../Charts/Charts-Track/ChartsTrack';


const PlaylistComp = ({ img, name, modalName}) => {

  const [modalPlaylist, setModalPlaylist] = useState(false)

  const toggleModal = () => setModalPlaylist(!modalPlaylist)
  return (
    <>
      <button className={style.playlistCompStyle} onClick={toggleModal}>
        <img src={img} alt="" />
        <h1>{name}</h1>
      </button>

      <MymodalPlaylist visible={modalPlaylist} setVisible={setModalPlaylist}>
        <div className={styleModal.styleModalOfPlaylist}>
          <h6>Плейлист</h6>
          <h1>{modalName}</h1>
          <i className="fa-solid fa-xmark" onClick={toggleModal}></i>
          <div style={{
            overflowX: 'hidden',
            height: '600px'
          }}>
          <ChartsTrack />
          </div>
        </div>
      </MymodalPlaylist>
    </>
  );
  
};


export default PlaylistComp;
