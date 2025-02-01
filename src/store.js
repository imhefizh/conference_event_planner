// store.js
import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./venueSlice";
import adsReducer from "./avSlice";
import mealReducer from "./mealsSlice";

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: adsReducer,
    meals: mealReducer,
  },
});
