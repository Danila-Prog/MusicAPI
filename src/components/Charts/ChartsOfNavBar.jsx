import style from './Charts.module.scss'
import ChartsTrack from './Charts-Track/ChartsTrack';

const ChartsOfNavBar = () => {
  return (
    <section className={style.Charts}>
      <div className={style.titleBeforeChart}>
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