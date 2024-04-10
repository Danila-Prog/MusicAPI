import Main from "../Main/Main";
import Listened from "../Listened/Listened";
import Charts from "../Charts/Charts";
import "../App/App.scss";


const App = () => {
  return (
    <div className="main-section">
      <div className="main-info">
        <Main />

        <Listened />

        <Charts />
      </div>

      <div>
        <h1>2112</h1>
      </div>
    </div>
  );
};
export default App;
