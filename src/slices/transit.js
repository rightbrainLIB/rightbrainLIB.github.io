import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPriceVal: '', // 실제값
  displayPriceVal: '', // 실제값 + '원'
  shortedPriceVal: '', // 1000단위 이상 'X만XX원'
}

const transit = createSlice({
  name: "transit",
  initialState,
  reducers: {
    setUserPrice: (state, {payload}) => {
      state.userPriceVal = payload;
    },
    setDisplayPrice: (state, {payload}) => {
      state.displayPriceVal = payload;
    },
    setShortedPrice: (state, {payload}) => {
      state.shortedPriceVal = payload;
    }
  }
});

export const {
  setUserPrice,
  setDisplayPrice,
  setShortedPrice}  = transit.actions;

export default transit.reducer;