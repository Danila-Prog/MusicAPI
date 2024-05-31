import style from './Footer.module.scss'
const Footer = () =>{
    return(
        <footer className={style.footer}>
            <ul>
              <li>
                <a href="">Правила рекомендаций (РФ)</a>
              </li>
              <li>
                <a href="">Справка</a>
              </li>
              <li>
                <a href="">Соц сети</a>
              </li>
            </ul>
          </footer>
    )
}

export default Footer 