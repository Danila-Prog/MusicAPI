import './Charts.scss'
import ChartsTrack from './ChartsTrack';

const ChartsOfNavBar = () => {
  return (
    <section className="Charts">
      <div className="title-before-charts">
        <div>
          <h2>Чарт</h2>
          <p>Треки, которые разрывают все чарты</p>
        </div>
      </div>
      <ChartsTrack/>

    </section>
  );
};

export default ChartsOfNavBar