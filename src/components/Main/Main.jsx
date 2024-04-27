import { useState } from "react";
import Playlist from "../Playlist/Playlist";
import classes from "./Main.module.scss";
const Main = () => {
  const [isIconChanged, setIsIconChanged] = useState(false);

  const handleClick = () => {
    setIsIconChanged(!isIconChanged);
  };

  return (
    <>
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
