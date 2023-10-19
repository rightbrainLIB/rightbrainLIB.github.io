import $style from '/src/styles/components/transit/UserTransitInput.module.scss'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Input, Button, Drawer } from 'antd';
import {useCallback, useEffect, useRef, useState} from "react";
import InputClear from "@components/icons/InputClear.jsx";
import BankBottomSheet from "@components/bottomSheet/BankBottomSheet.jsx";
import cx from 'classnames';
import BgGrayButton from '../buttons/BgGrayButton';
import iconDelete from "@imgs/ico_delete.svg";
import iconAright from "@imgs/icon_arrow_right_bl_20.svg";
import { setAccountNum } from "@slices/transit.js";
import { useDispatch, useSelector } from "react-redux";

const TransitInput2 = () => {
  // const inputPattern = /([0-9,\-]{3,6}\-[0-9,\-]{2,6}\-[0-9,\-])/
  const [bankBSOpen, setBankBSOpen] = useState(false);
  const [bankValue, setBankValue] = useState('');
  const [numDrawerOpen, setNumDrawerOpen] = useState(false);
  const [accountValue, setAccountValue] = useState("")
  const keyboardRef = useRef(null)
  const accountNumRef = useRef(null);
  const bankInputRef = useRef(null);
  const dispatch = useDispatch()

  const onChange = input => {
    setAccountValue(input);
    console.log("Input changed", input);
  };

  const accountClear = () => {
    keyboardRef.current.clearInput();
    setAccountValue('');
  };

  useEffect(()=> {
    if (accountNumRef.current) {
      accountNumRef.current.focus();
    }
  }, [])

  const onFocusBankInput = useCallback(() => {
    setBankBSOpen(true);
    if (bankInputRef.current) {
      bankInputRef.current.blur();
    }
  }, []);

  const onFocusAccountInput = useCallback(() => {
    setNumDrawerOpen(true)
    if (accountNumRef.current) {
      accountNumRef.current.blur();
    }
  }, []);

  const handleOpen = useCallback((value) => {
    setBankBSOpen(value);
    setNumDrawerOpen(false)
  }, []);

  const autoComplete = () => {
    setNumDrawerOpen(false); 
    setBankValue("신한"); 
    if (accountNumRef.current) {
      accountNumRef.current.blur();
    }
  };

  const saveAccountNum = () => {
    dispatch(setAccountNum(accountValue))
  }

  return (
    <div className={$style.userTransit}>
      <h2>누구에게 보낼까요?</h2>
      <Input
        ref={accountNumRef}
        value={accountValue}
        onFocus={onFocusAccountInput}
        placeholder={"계좌번호 입력"}
        inputMode="none"
        className={cx($style.accountInput, {on: accountValue.length > 0})}
        allowClear={numDrawerOpen ? { clearIcon: <span className={$style.clearBtn} onClick={ accountClear }><InputClear /></span> } : {clearIcon : <span></span>}}
      />
      <Input
        ref={bankInputRef}
        value={bankValue}
        placeholder={"은행/증권사"}
        inputMode="none"
        className={cx($style.accountInput, {on: bankValue.length > 0})}
        onFocus={onFocusBankInput}
        allowClear={{clearIcon: <span></span>}} 
      />
      {bankValue === "" ? <div className={$style.descWrap}>
        {
          
          accountValue.length === 0 ?
          <p>계좌번호를 입력하면 찾아드릴게요.</p> :
          accountValue.length === 1 ?
          <p>금융기관을 보고 있어요.</p> :
          accountValue.length >= 2 && accountValue.length <= 5 ?
          <BgGrayButton size={"small"} click={autoComplete}>
            <span className={$style.blue}>신한 1101200708094</span>로 이체할까요?
            <img src={iconAright} alt="" />
          </BgGrayButton> :
          accountValue.length >= 6 ?
            <>
              <BgGrayButton click={autoComplete}>신한</BgGrayButton>
              <BgGrayButton click={autoComplete}>KB국민</BgGrayButton>
              <BgGrayButton click={autoComplete}>우리</BgGrayButton>
            </> : null
        }
      </div> : null}
      <Drawer
        rootClassName={$style.keyboardDrawer}
        placement={"bottom"}
        footer={<Button className={cx($style.change, accountValue.length >= 6 ? $style.active : "")} block onClick={handleOpen}>확인</Button>}
        open={numDrawerOpen}
        closeIcon={false}
        mask={false}
        height={348}
      >
        <div className={$style.drawerContainer}>
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            layout={{default: ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"],}}
            theme={"hg-theme-default hg-layout-numeric numeric-theme"}
            display= {{"{bksp}": `<img src="${iconDelete}" alt="" />`}}
            onChange={(e)=> onChange(e)}
            baseClass={`${$style.customKeypad}`}
          />
        </div>
      </Drawer>
      <BankBottomSheet setBankValue={(val) => setBankValue(val)} open={bankBSOpen} handleOpen={handleOpen} />
      {
        bankValue !== "" &&
        accountValue.length > 0 ?
        <Button className={$style.bottomNextBtn} block onClick={saveAccountNum}>다음</Button> : null
      }
    </div>
  )
}

export default TransitInput2;