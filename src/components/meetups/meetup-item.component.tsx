import Card from "../ui/Card";
import style from "./meetup-item.module.scss";
import { MeetupModel } from "./meetup.model";
import { FavoritesContext } from "../../store";
import { useContext } from "react";

interface MeetupItemProps {
  item: MeetupModel;
}

export function MeetupItem(props: MeetupItemProps) {
  const meetup = props.item;
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id!);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(meetup.id!);
      return
    }
    favoritesCtx.addFavorite(meetup);
  }

  return (
    <>
      <li className={style.item}>
        <Card>
          <div className={style.image}>
            <img src={meetup.image} alt={meetup.title} />
          </div>
          <div className={style.content}>
            <h3>{meetup.title}</h3>
            <address>{meetup.address}</address>
            <p>{meetup.description}</p>
          </div>
          <div className={style.actions}>
            <button onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? "Remove from Favorite" : "Add to Favorites"}
            </button>
          </div>
        </Card>
      </li>
    </>
  );
}
