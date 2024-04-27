import './Tracks.scss'
import PropTypes from 'prop-types';
const Tracks = ({id, title, artist}) =>{
    return(
        <div className="Main-tile">
        <button className='buttonTracks'>
          <div className="tile">
              <span>{id}</span>
              <img src="" alt="" />
              <div className="text-tile">
                <h5>{title}</h5>
                <h6>{artist}</h6>
              </div> 
          </div>
          </button>
        </div>
    )
}
Tracks.propTypes = {
  id: PropTypes.node,
  title: PropTypes.node,
  artist: PropTypes.node,
};
export default Tracks