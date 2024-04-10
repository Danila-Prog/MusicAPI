import Tracks from '../Tracks/Tracks';
import './Charts.scss'
const Charts = () =>{
    return (
      <section className="Charts">
        <div className="title-before-charts">
          <div>
            <h2>Чарт</h2>
            <p>Треки, которые разрывают все чарты</p>
          </div>
          <button>Смотреть всё</button>
        </div>

        <Tracks/>
      </section>
    );
}
export default Charts
