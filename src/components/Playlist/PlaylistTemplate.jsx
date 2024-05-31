import { useState } from "react";
import style from "./Playlist.module.scss";
import MymodalPlaylist from "../Ui/Mymodal/ModalPlaylist";
import ChartsOfNavBar from "../Charts/ChartsOfNavBar";
import styleModal from "../Ui/Mymodal/ModalPlaylist.module.scss";

const PlaylistTemplate = ({ img, name, description }) => {
  const [modalPlaylist, setModalPlaylist] = useState(false);
  return (
    <>
      <button
        className={style.buttonCharts}
        onClick={() => setModalPlaylist(!modalPlaylist)}
      >
        <div>
          <img src={img} alt="" />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </button>
      <MymodalPlaylist visible={modalPlaylist} setVisible={setModalPlaylist}>
        <div className={styleModal.styleModalOfPlaylist}>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setModalPlaylist(!modalPlaylist)}
          ></i>
          <div
            style={{
              overflowX: "hidden",
              height: "600px",
            }}
          >
            <ChartsOfNavBar />
          </div>
        </div>
      </MymodalPlaylist>
    </>
  );
};
export default PlaylistTemplate;
