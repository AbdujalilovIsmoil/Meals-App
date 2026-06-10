import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  ids: string[];
}

const initialState: FavoriteState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },

    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const actions = favoriteSlice.actions;
export default favoriteSlice.reducer;