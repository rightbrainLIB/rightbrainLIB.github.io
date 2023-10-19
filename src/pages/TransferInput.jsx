import KBSecondHeader from "@components/KBSecondHeader.jsx";
import KBContainer from "@components/KBContainer.jsx";
import $style from "@styles/TransferInput.module.scss";
import { Button, Drawer, Input } from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setDisplayPrice, setUserPrice, setShortedPrice} from "@slices/transit.js";
import { useCallback, useEffect, useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "@styles/keyboard-custom.scss";
import iconDelete from "@imgs/ico_delete.svg";
import { plusUserPrice } from "@slices/transit.js";

const TransferInput = () => {
  const dispatch = useDispatch();

  const [numDrawerOpen, setNumDrawerOpen] = useState(true);
  const keyboardRef = useRef(null);

  const userPriceInputRef = useRef(null);

  const userPriceVal = useSelector(state => state.transit.userPriceVal);
  const displayPriceVal = useSelector(state => state.transit.displayPriceVal);
  const shortedPriceVal = useSelector(state => state.transit.shortedPriceVal);
  
  const onKeyDownBackspace = useCallback((e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      let inputValue = userPriceVal;
      let newValue = inputValue.slice(0, -1);

      if (!newValue) {
        dispatch(setDisplayPrice(''));
        dispatch(setUserPrice(''));
      } else {
        let displayValue = parseInt(newValue).toLocaleString() + (newValue ? ' 원' : '');
        dispatch(setDisplayPrice(displayValue));
        dispatch(setUserPrice(String(newValue)));
      }
    }
  }, [dispatch, userPriceVal])

  const onChangeUserPrice = useCallback((e) => {
    // let realValue = e.target.value.replace(/,/g, '').replace(/원/g, '');
    let realValue = e.replace(/,/g, '').replace(/원/g, '');
    if (isNaN(realValue)) {
      dispatch(setUserPrice(''));
      return;
    }
    if (parseInt(realValue) === 0) {
      dispatch(setDisplayPrice(''));
      dispatch(setUserPrice(''));
      return;
    }
    if (!realValue) {
      dispatch(setDisplayPrice(''));
      dispatch(setUserPrice(''));
    } else {
      let newValue = parseInt(realValue).toLocaleString();
      newValue += '원';
      dispatch(setDisplayPrice(newValue));
      dispatch(setUserPrice(String(realValue)));
    }
  }, [dispatch, userPriceVal, shortedPriceVal, displayPriceVal, numDrawerOpen]);

  useEffect(() => {
    if (userPriceVal) {
      const PRICE = parseInt(userPriceVal.replace(/,/g,''));
      if (isNaN(PRICE)) {
        dispatch(setShortedPrice(''));
        return;
      }
      if (PRICE < 10000) {
        dispatch(setShortedPrice(`${String(parseInt(userPriceVal))}원`));
      } else {
        const frontVal = Math.floor(PRICE / 10000);
        const dottedFrontVal = parseInt(frontVal, 10).toLocaleString();
        const restVal = PRICE % 10000;
        let dottedRestVal = '';
        if (restVal > 0) {
          dottedRestVal = parseInt(restVal, 10).toLocaleString();
        }
        dispatch(setShortedPrice(`${dottedFrontVal}만 ${dottedRestVal}원`));
      }
    } else {
      dispatch(setShortedPrice(''));
    }
  }, [userPriceVal]);

  useEffect(() => {
    if (numDrawerOpen && keyboardRef && keyboardRef.current) {
      keyboardRef.current.setInput(userPriceVal);
      keyboardRef.current.setCaretPosition(userPriceVal.length);
    }
  }, [numDrawerOpen, userPriceVal]);

  const onChange = useCallback(input => {
    dispatch(setUserPrice(input));
  }, []);

  const numDrawerClose = useCallback(() => {
    setNumDrawerOpen(false);
  }, []);

  const onFocusUserPriceInput = useCallback(() => {
    setNumDrawerOpen(true);
  }, []);

  const onClickPlusPrice = useCallback((value) => {
    dispatch(plusUserPrice(value));
    let addedValue = Number(userPriceVal) + value;
    const utilValue = String(addedValue).replace(/,/g, '').replace(/원/g, '');
    let newValue = parseInt(utilValue).toLocaleString();
    newValue += '원';
    dispatch(setDisplayPrice(newValue));
  }, [userPriceVal, displayPriceVal]);

  const onClickPlusTotal = useCallback(() => {
    console.log('total');
  }, [userPriceVal, displayPriceVal]);

  return (
    <>
      <KBContainer>
        <KBSecondHeader />

        <div className={$style.topAccountInfo}>
          <div>
            <p className={$style.name}>신한 110-120-0708094님께</p>
          </div>
        </div>

        <Input
          ref={userPriceInputRef}
          className={$style.userPriceInput}
          value={displayPriceVal}
          placeholder={"얼마를 보낼까요?"}
          // onChange={onChangeUserPrice}
          maxLength={15}
          inputMode="none"
          onKeyDown={onKeyDownBackspace}
          onClick={onFocusUserPriceInput}
        />
        <div className={$style.shortedPrice}>{shortedPriceVal ? shortedPriceVal : "출금가능 금액 200,000원"}</div>
      </KBContainer>

      <Drawer
        rootClassName={$style.keyboardDrawer}
        placement={"bottom"}
        footer={<Button block onClick={numDrawerClose}>확인</Button>}
        onClose={numDrawerClose}
        open={numDrawerOpen}
        closeIcon={false}
        mask={false}
        height={390}
      >
        <div className={$style.drawerContainer}>
          <ul className={$style.utilBtns}>
            <li>
              <Button type="default" onClick={() => onClickPlusPrice(1000000)}>100만</Button>
            </li>
            <li>
              <Button type="default" onClick={() => onClickPlusPrice(100000)}>10만</Button>
            </li>
            <li>
              <Button type="default" onClick={() => onClickPlusPrice(50000)}>5만</Button>
            </li>
            <li>
              <Button type="default" onClick={() => onClickPlusPrice(10000)}>1만</Button>
            </li>
            <li>
              <Button type="default" onClick={onClickPlusTotal}>전액</Button>
            </li>
          </ul>
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            layout={{default: ["1 2 3", "4 5 6", "7 8 9", "00 0 {bksp}"],}}
            theme={"hg-theme-default hg-layout-numeric numeric-theme"}
            // display= {{"{bksp}": `<img src="/src/assets/images/ico_delete.svg" alt="" />`}}
            display= {{"{bksp}": `<img src="${iconDelete}" alt="" />`}}
            onChange={(e)=> onChangeUserPrice(e)}
            baseClass={`${$style.customKeypad}`}
            useTouchEvents={true}
          />
        </div>
      </Drawer>
    </>
  )
}

export default TransferInput;