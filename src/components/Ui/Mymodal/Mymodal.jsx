
import cl from './Mymodal.module.scss'
import PropTypes from 'prop-types';
const Mymodal = ({children, visible, setVisible}) =>{

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
Mymodal.propTypes = {
    children: PropTypes.node,
    visible: PropTypes.node,
    setVisible: PropTypes.node,
  };
export default Mymodal