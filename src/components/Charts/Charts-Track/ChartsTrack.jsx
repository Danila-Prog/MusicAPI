import Tracks from "../../Tracks/Tracks"
import { TracksArr } from "./TracksArr";
const ChartsTrack = () =>{
  return (
    <>
      {TracksArr.map((tracks) => (
        <Tracks key={tracks.id} {...tracks} />
      ))}
    </>
  );
}
export default ChartsTrack