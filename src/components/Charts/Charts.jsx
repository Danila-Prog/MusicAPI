import './Charts.scss'
import ChartsTrack from './ChartsTrack';
import { Link } from 'react-router-dom';

const Charts = () =>{
  // const [open, setOpen] = useState(false);
    return (
      <section className="Charts">
        <div className="title-before-charts">
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
