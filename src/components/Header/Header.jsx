import { Link } from 'react-router-dom';
import Options from './Options';
import style from './header.module.scss';
const point = window.innerWidth;
const options = [
  { id: 1, label: 'Home', path: point < 760 ? 550 : point < 1210 ? 650 : 800 },
  { id: 2, label: 'Menu', path: point < 760 ? 850 : point < 1210 ? 1050 : 1450 },
  { id: 3, label: 'About Us', path: point < 760 ? 2850 : point < 1210 ? 2300 : 2020 },
  { id: 4, label: 'Contact Us', path: point < 760 ? 3600 : point < 1210 ? 2800 : 5000 },
];

function Header() {
  return (
    <div className={style.wrapper}>
      <Link to="/">
        <h1>Caffeine</h1>
      </Link>

      <div className={style.options}>
        {options.map((el, index) => (
          <Options key={index} option={el} />
        ))}
      </div>
    </div>
  );
}

export default Header;
