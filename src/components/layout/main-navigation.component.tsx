import { Link } from "react-router-dom";

import style from "./main-navigation.module.scss";
import { useContext } from "react";
import { FavoritesContext } from "../../store";

export function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={style.header}>
      <div className={style.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={style.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
