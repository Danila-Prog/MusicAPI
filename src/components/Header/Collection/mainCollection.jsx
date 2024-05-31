import style from './Collection.module.scss'
const MainCollection = () => {
    return (
      <div className={style.mainCollection}>
        <img src="/images/profile_stock.jpg" alt="" />
        <div className={style.collectionText}>
          <h3>Коллекция</h3>
          <h2>Данила</h2>
        </div>
      </div>
    ); 
  };
export default MainCollection