import { Link } from 'react-router-dom';
import Options from './Options';
import style from './header.module.scss';

const options = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Menu' , path: '/'},
  { id: 3, label: 'About Us' , path: '/'},
  { id: 4, label: 'Contact Us', path: '/contactUs' },
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
