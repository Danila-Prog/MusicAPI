import Playlist from "../Playlist/Playlist";
import classes from "./Main.module.scss";
import { useLogicMain } from "../../hooks/useLogicMain";

const Main = () => {
  const {
    musicRef,
    handleClick,
    currentTrackIndex,
    handleNextTrack,
    isIconChanged,
    TracksArr,
  } = useLogicMain();

  return (
    <>
      {TracksArr.map((track, index) => (
        <audio
          ref={index === currentTrackIndex ? musicRef : null}
          key={track.id}
          src={track.audio}
          hidden={index !== currentTrackIndex}
          onEnded={handleNextTrack}
        />
      ))}
      <main className={classes.main}>
        <button className={classes.buttonMain} onClick={handleClick}>
          {isIconChanged ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
          Моя волна
        </button>

        <Playlist />
      </main>
    </>
  );
};

export default Main;
