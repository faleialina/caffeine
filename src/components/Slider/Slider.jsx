import style from './slider.module.scss';
import leftArrow from './assets/leftArrow.png';
import rightArrow from './assets/rightArrow.png';

function Slider() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftArrow}>
        <img src={leftArrow} alt="leftArrow" />
      </div>

      <div className={style.content}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset.....
        </p>
        <div>
          <h3>Project Manager</h3>
          <p>Jonny Thomas</p>
        </div>
      </div>

      <div className={style.rightArrow}>
        <img src={rightArrow} alt="rightArrow" />
      </div>
    </div>
  );
}

export default Slider;
