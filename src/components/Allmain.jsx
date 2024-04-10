import Header from "./Header/Header.jsx"
import { Routes, Route} from 'react-router-dom';
import Collection from './Header/Collection/Collection.jsx'
import App from "./App/App.jsx";
import Footer from "./Footer/Footer.jsx";
import Playlist from "./Playlist/Playlist.jsx"
import Tracks from "./Tracks/Tracks.jsx";

const Allmain = () => {
  return (
    <div className="all-info">  
        <Header />
        <Routes>
          <Route exact path="/app" element={<App />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/trecks" element={<Tracks />}/>
          <Route path="/collection/playlist" element={<Playlist />}/>
        </Routes>
        <Footer />
    </div>
  );
};

export default Allmain;
