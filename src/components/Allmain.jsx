import Header from "./Header/Header.jsx"
import { Routes, Route} from 'react-router-dom';
import Collection from './Header/Collection/Collection.jsx'
import App from "./App/App.jsx";
import Footer from "./Footer/Footer.jsx";
import Playlist from "./Playlist/Playlist.jsx"
import ChartsOfNavBar from './Charts/ChartsOfNavBar.jsx'
import ModalSettings from "./Ui/Mymodal/ModalSettings.jsx";
import MainLink from "./Main/MainLink.jsx";
import MainCollection from "./Header/Collection/mainCollection.jsx";
import Compilations from "./Compilations/Compilations.jsx";
// import ChartsTrack from "./Charts/ChartsTrack.jsx";

const Allmain = () => {
  return (
    <div className="all-info">
     
      <Header />
      <ModalSettings />
      <MainLink />
      <Routes>
        <Route index element={<App />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    
      <Routes>
        <Route element={<MainCollection />} />
        {/* <Route
          path="/collection/trecks"
          element={<ChartsTrack/>}
        /> */}
        <Route path="/collection/playlist" element={<Playlist />} />
      </Routes>

      <Routes>
        <Route path="/allMain" element={<App />} />
        <Route path="/charts" element={<ChartsOfNavBar />} />
        <Route path="/compilations" element={<Compilations />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Allmain;
