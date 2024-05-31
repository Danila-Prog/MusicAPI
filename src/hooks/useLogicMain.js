import { useEffect, useRef, useState } from "react";
import { TracksArr } from "../components//Charts/Charts-Track/TracksArr";

export const useLogicMain = () => {

  const [isIconChanged, setIsIconChanged] = useState(false);
  const [isMusicPlay, setMusicPlay] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const musicRef = useRef(null);

  useEffect(() => {
    if (isMusicPlay) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
    }
  }, [isMusicPlay]);

  const handleClick = () => {
    setIsIconChanged(!isIconChanged);
    setMusicPlay(!isMusicPlay);
  }

  const handleNextTrack = () => {
    setCurrentTrackIndex(prevIndex => (prevIndex + 1) % TracksArr.length)
  };
  
  const handlePlayClick = () => {
    setMusicPlay(!isMusicPlay);
  }

  return {
    musicRef,
    handleClick,
    handlePlayClick,
    currentTrackIndex,
    handleNextTrack,
    isIconChanged,
    TracksArr,
  }; 
}