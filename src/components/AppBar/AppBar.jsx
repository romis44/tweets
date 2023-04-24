import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div className={css.header}>
      <div className={css.navigation}>
        <NavLink to="/" className={css.navigate}>
          Home
        </NavLink>
        <NavLink to="/tweets" className={css.navigate}>
          Tweets
        </NavLink>
      </div>
    </div>
  );
};
