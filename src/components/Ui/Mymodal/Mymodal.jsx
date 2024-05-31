import cl from './Mymodal.module.scss'
const Mymodal = ({children, visible, setVisible}) =>{

    const rootClasses = [cl.myModal]

    if (visible){
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(" ")}> 
            <div className={cl.myModalContent} onClick={() => setVisible(false)}>{children}</div>
        </div>
    ); 
}
export default Mymodal