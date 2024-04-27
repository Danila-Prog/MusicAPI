import Main from "../Main/Main";
import Charts from "../Charts/Charts";
import "../App/App.scss";
import Listened from "../Listened/Listened";

const App = () => {
  return (
    <div className="main-section">
      <div className="main-info">
        
        <Main />
        
        <Listened />

        <Charts />
      </div>
    </div>
  );
};
export default App;
