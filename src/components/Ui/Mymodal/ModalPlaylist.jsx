import PropTypes from 'prop-types';
import cl from './ModalPlaylist.module.scss'

const MymodalPlaylist = ({children, visible, setVisible}) =>{

    const rootClasses = [cl.myModal]

    if (visible){
        rootClasses.push(cl.active)
        setVisible
    }
    return (
        <div className={rootClasses.join(" ")}> 
            <div className={cl.myModalContent}>{children}</div>
        </div>
    ); 
}
MymodalPlaylist.propTypes = {
    children: PropTypes.node,
    visible: PropTypes.node,
    setVisible: PropTypes.node,
  };
export default MymodalPlaylist