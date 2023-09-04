import { useContext } from "react";
import { MeetupList } from "../components/meetups";
import { FavoritesContext } from "../store";
import { Link } from "react-router-dom";

export function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext)

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some <Link to={'/'}>here</Link>?</p>
  } else {
    content = <MeetupList list={favoritesCtx.favorites}/>
  }
  return (
    <>
      <section>
        <h1>My Favorites</h1>
        {content}
      </section>
    </>
  );
}

export default FavoritesPage;
