import { createContext, useState } from "react";
import { MeetupModel } from "../components/meetups";

export const FavoritesContext = createContext({
  favorites: [] as MeetupModel[],
  totalFavorites: 0,
  addFavorite: (_favoriteMeetup: MeetupModel) => {},
  removeFavorite: (_meetupId: string) => {},
  itemIsFavorite: (_meetupId: string): Boolean => {
    return new Boolean();
  },
});

export function FavoritesContextProvider(props: { children: React.ReactNode }) {
  const [userFavorites, setUserFavorites] = useState([] as MeetupModel[]);

  function addFavoriteHandler(favoriteMeetup: MeetupModel) {
    setUserFavorites(prevUserFavorites => {
        return [...prevUserFavorites, favoriteMeetup]
    });
  }

  function removeFavoriteHandler(meetupId: string) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId: string): Boolean {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
