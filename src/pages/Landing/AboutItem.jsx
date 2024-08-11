import style from './landing.module.scss';

function AboutItem({ coffee }) {
  return (
    <div className={style.item}>
      <img src={coffee.img} alt="coffee" />
      <div className={style.itemInfo}>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </div>
    </div>
  );
}

export default AboutItem;
