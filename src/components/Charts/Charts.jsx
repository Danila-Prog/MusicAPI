import style from './Charts.module.scss'
import ChartsTrack from './Charts-Track/ChartsTrack';
import { Link } from 'react-router-dom';

const Charts = () =>{
    return (
      <section className={style.Charts}>
        <div className={style.titleBeforeCharts}>
          <div>
            <h2>Чарт</h2>
            <p>Треки, которые разрывают все чарты</p>
          </div>
          <Link to="/charts">Смотреть всё</Link>
        </div>

        <ChartsTrack />
      </section>
    );
}
export default Charts
