import Main from "../../components/Main/Main";
import Charts from "../../components/Charts/Charts";
import "./Home.scss";
import Listened from "../../components/Listened/Listened";
import Header from "../../components/Header/Header";
import ModalSettings from "../../components/Ui/Mymodal/ModalSettings";
import MainLink from "../../components/Main/MainLink";

const HomePages = () => {
  return (
    <div className="main-section">
      <div className="main-info">
        <Header />
        
        <ModalSettings />

        <MainLink />

        <Main />
        
        <Listened />

        <Charts />
      </div>
    </div>
  );
};
export default HomePages;