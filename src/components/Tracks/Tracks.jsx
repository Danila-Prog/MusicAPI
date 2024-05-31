import { useLogicMain } from "../../hooks/useLogicMain";
import style from "./Tracks.module.scss";

const Tracks = ({ id, title, artist, audio, img }) => {
  const { musicRef, handlePlayClick} = useLogicMain();

  return (
    <div className={style.buttonTracks} onClick={handlePlayClick}>
      <div className={style.tile}>
        <span>{id}</span>
        <img src={img} alt="" />
        <div className={style.textTile}>
          <h5>{title}</h5>
          <h6>{artist}</h6>
        </div>
        <audio controls ref={musicRef} src={audio}/>
      </div>
    </div>
  );
};

export default Tracks;
