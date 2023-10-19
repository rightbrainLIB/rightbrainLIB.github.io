import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPriceVal: '', // 실제값
  accountNum: '', // 실제값
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
    },
    setAccountNum: (state, {payload}) => {
      state.accountNum = payload;
    },
    plusUserPrice: (state, {payload}) => {
      const currentPrice = Number(state.userPriceVal);
      state.userPriceVal = String(currentPrice + payload);
    }
  },
});

export const {
  setUserPrice,
  setDisplayPrice,
  setShortedPrice,
  setAccountNum,
  plusUserPrice}  = transit.actions;

export default transit.reducer;