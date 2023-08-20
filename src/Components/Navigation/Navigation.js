import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={style.navBox}>
      <nav>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.activeLink : style.inActiveLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                isActive ? style.activeLink : style.inActiveLink
              }
            >
              Movie
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className={style.text}>
        created with:{' '}
        <span className={style.span}>https://www.themoviedb.org/</span>
      </p>
    </div>
  );
};

export default Navigation;
