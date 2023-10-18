import {configureStore} from "@reduxjs/toolkit";
import transit from "@slices/transit";

const store = configureStore({
  reducer: {
    transit,
  }
})

export default store;