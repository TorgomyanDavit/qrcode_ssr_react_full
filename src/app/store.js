import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../features/shares/components/header/headerSlice';
import homeReducer from "../features/pages/home/homeSlice";
import productReducer from "../features/pages/ProductPage/productSlice";
import globalReducer from "../features/shares/globalSlice/globalSlice";

export const store = configureStore({
  reducer: {
    home:homeReducer,
    header: headerReducer,
    product:productReducer,
    globalSlice:globalReducer
  },
});