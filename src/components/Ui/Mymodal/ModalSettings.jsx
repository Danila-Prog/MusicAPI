import Mymodal from "./Mymodal"
import cl from './ModalSettings.module.scss'
import { useState } from "react"
import { Link } from "react-router-dom"

const ModalSettings = () => {

    const [modal, setModal] = useState(false)

    return (
      <>
        <button
          className={cl.buttonImg}
          onClick={() => setModal(!modal)}
        >
          <img src="/images/profile_stock.jpg" alt="" />
        </button>
        
        <Mymodal visible={modal} setVisible={setModal}>
          <div className={cl.ModalSettings}>
            <h1>Даня Кор</h1>
            <div className={cl.ButtonC}>
              <Link to="/">Главная</Link>
              <Link to="/collection/tracks">Коллекция</Link>
              <Link to="">Настройка</Link>
              <Link to="">Выйти</Link>
            </div>
          </div>
        </Mymodal>
      </>
    );
}
export default ModalSettings