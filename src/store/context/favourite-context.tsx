import React, { createContext, useState } from "react";

interface FavouriteProps {
  children: React.ReactNode;
}

interface FavouriteContextProps {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

export const FavouriteContext = createContext<FavouriteContextProps>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavourite: (id: string) => {},
});

const FavouriteContextProvider = ({ children }: FavouriteProps) => {
  const [favouriteMealsIds, setFavouriteMealsIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavouriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteMealsIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  };

  const value: FavouriteContextProps = {
    addFavorite,
    removeFavourite,
    ids: favouriteMealsIds,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
