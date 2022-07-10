import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import appSlice from "./Slices/appSlice";
import cartSlice from "./Slices/cartSlice";
import userSlice from "./Slices/userSlice";
import nftSlice from "./Slices/nftSlice";

const reducers = combineReducers({
  app: appSlice,
  user: userSlice,
  cart: cartSlice,
  nft: nftSlice,
  product: nftSlice,
});

const rootPersistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
