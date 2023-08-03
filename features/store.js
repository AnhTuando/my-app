import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "cart",
  storage,
  blacklist: ["footerValueRouter"],
};

const persistedReducer = persistReducer(persistConfig, cartSlice);
const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);
export { store, persistor };
