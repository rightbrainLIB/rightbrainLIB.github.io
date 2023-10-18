import KBSecondHeader from "@components/KBSecondHeader.jsx";
import KBContainer from "@components/KBContainer.jsx";
import $style from "@styles/TransferInput.module.scss";
import {Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setDisplayPrice, setUserPrice, setShortedPrice} from "../slices/transit.js";
import {useCallback, useEffect, useState} from "react";

const TransferInput = () => {
  const dispatch = useDispatch();

  const userPriceVal = useSelector(state => state.transit.userPriceVal);
  const displayPriceVal = useSelector(state => state.transit.displayPriceVal);
  const shortedPriceVal = useSelector(state => state.transit.shortedPriceVal);

  const onKeyDownBackspace = useCallback((e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      // Get the current input value
      let inputValue = e.target.value.replace(/,/g, '').replace(/원/g, '');

      // Remove the last character from the input value
      let newValue = inputValue.slice(0, -1);

      // Calculate display value with ' 원' appended
      let displayValue = parseInt(newValue).toLocaleString() + ' 원';

      // Dispatch the display value
      dispatch(setDisplayPrice(displayValue));

      // Dispatch the raw value without ' 원'
      // dispatch(setUserPrice(parseInt(newValue)));

      // Update the input field value with the formatted display value
      e.target.value = displayValue;
    }
  }, [dispatch])

  const onChangeUserPrice = useCallback((e) => {
    let rawValue = e.target.value.replace(/,/g, '').replace(/원/g, '');

    if (isNaN(rawValue)) {
      dispatch(setUserPrice(''));
      return;
    }
    if (!rawValue) {
      dispatch(setUserPrice(''));
    } else {
      let newValue = parseInt(rawValue).toLocaleString();
      newValue += '원';
      dispatch(setDisplayPrice(newValue));
      dispatch(setUserPrice(rawValue));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userPriceVal) {
      const PRICE = parseInt(userPriceVal.replace(/,/g,''));
      if (isNaN(PRICE)) {
        dispatch(setShortedPrice(''));
        return;
      }
      if (PRICE < 10000) {
        dispatch(setShortedPrice(`${userPriceVal}원`));
      } else {
        const frontVal = Math.floor(PRICE / 10000);
        const dottedFrontVal = parseInt(frontVal, 10).toLocaleString();
        const restVal = PRICE % 10000;
        const dottedRestVal = parseInt(restVal, 10).toLocaleString();
        dispatch(setShortedPrice(`${dottedFrontVal}만${dottedRestVal}원`));
      }
    } else {
      dispatch(setShortedPrice(''));
    }
  }, [userPriceVal])

  return (
    <>
      <KBContainer>
        <KBSecondHeader />

        <div className={$style.topAccountInfo}>
          <div>
            <p className={$style.name}>김받음님께</p>
            <p className={$style.account}>신한 110-120-0708094</p>
          </div>
        </div>

        <Input
          className={$style.userPriceInput}
          value={displayPriceVal}
          placeholder={"얼마를 보낼까요?"}
          onChange={onChangeUserPrice}
          maxLength={15}
          inputMode="none"
          onKeyDown={onKeyDownBackspace}
        />
        <div>{shortedPriceVal}</div>
      </KBContainer>
    </>
  )
}

export default TransferInput;