import PlaylistComp from "./playlistComp";

const Compilations = () => {
  return (
    <div>
      <PlaylistComp
        img={"./images/Playlist-Img/Весна.jpg"}
        name={"Весна"}
        modalName={"Весна"}
      />
      <PlaylistComp
        img={"./images/Playlist-Img/Песни 90-х.jpg"}
        name={"Песни 90-х"}
        modalName={"Песни 90-х"}
      />
      <PlaylistComp
        img={"./images/Playlist-Img/Лето.jpg"}
        name={"Летняя подборка"}
        modalName={"Летняя подборка"}
      />
      <PlaylistComp
        img={"./images/Playlist-Img/100 хитов.jpg"}
        name={"100 хитов"}
        modalName={"100 хитов"}
      />
    </div>
  );
};
export default Compilations;
