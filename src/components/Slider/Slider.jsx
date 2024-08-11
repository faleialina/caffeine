import { useState } from 'react';
import leftArrow from './assets/leftArrow.png';
import rightArrow from './assets/rightArrow.png';
import style from './slider.module.scss';

const slides = [
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'Project Manager',
    name: 'Jonny Thomas',
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'Designer',
    name: 'Tom Doe',
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'Developer',
    name: 'John Smith',
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'Marketing Manager',
    name: 'Sara Lee',
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....',
    position: 'CEO',
    name: 'Michael Johnson',
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.leftArrow} onClick={handlePrevSlide}>
        <img src={leftArrow} alt="leftArrow" />
      </div>

      <div className={style.content}>
        <p>{slides[currentIndex].text}</p>
        <div>
          <h3>{slides[currentIndex].position}</h3>
          <p>{slides[currentIndex].name}</p>
        </div>
      </div>

      <div className={style.rightArrow} onClick={handleNextSlide}>
        <img src={rightArrow} alt="rightArrow" />
      </div>
    </div>
  );
}

export default Slider;
