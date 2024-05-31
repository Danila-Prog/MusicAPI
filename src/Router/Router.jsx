import { createBrowserRouter} from "react-router-dom";
import HomePages from "../pages/Home/HomePages.jsx";
import CompilationsPages from "../pages/Home/Compilations-Pages/CompilationsPages.jsx";
import ChartsPages from "../pages/Home/Charts-Pages/ChartsPages.jsx";
import PlaylistPages from "../pages/CollectionPages/Playlist-Pages/PlaylistPages.jsx";
import Footer from "../components/Footer/Footer.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <HomePages/>
          <Footer />
        </>
      ),
    },
    {
      path: "/collection/tracks",
      element: (
        <>
          <ChartsPages/>
          <Footer />
        </>
      ),
    },
    {
      path: "/collection/playlist",
      element: (
        <>
          <PlaylistPages/>
          <Footer />
        </>
      ),
    },
    {
      path: "/charts",
      element: (
        <>
          <ChartsPages/>
          <Footer />
        </>
      ),
    },
    {
      path: "/compilations",
      element: (
        <>
          <CompilationsPages/>
          <Footer />
        </>
      ),
    },
  ]);