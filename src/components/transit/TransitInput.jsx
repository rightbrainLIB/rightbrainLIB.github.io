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
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

const TransitInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const inputPattern = /([0-9,\-]{3,6}\-[0-9,\-]{2,6}\-[0-9,\-])/
  const [accountValue, setAccountValue] = useState('');
  const [bankBSOpen, setBankBSOpen] = useState(false); // 은행/증권사 바텀시트
  const [bankValue, setBankValue] = useState('');
  const [numDrawerOpen, setNumDrawerOpen] = useState(false); // 키패드 drawer
  const keyboardRef = useRef(null);
  const accountNumRef = useRef(null);

  const accountNum = useSelector(state => state.transit.accountNum);
  const testType = useSelector(state => state.transit.testType);

  // 계좌번호 입력창 x 버튼
  const accountClear = useCallback(() => {
    keyboardRef.current.clearInput();
    setAccountValue('');
  }, [accountValue]);

  // useEffect(()=> {
  //   if (accountNumRef.current) {
  //     accountNumRef.current.focus();
  //   }
  // }, [])
  //
  // const onFocusBankInput = useCallback(() => {
  //   setBankBSOpen(true);
  //   if (bankInputRef.current) {
  //     bankInputRef.current.blur();
  //   }
  // }, []);
  //
  // const onFocusAccountInput = useCallback(() => {
  //   setNumDrawerOpen(true)
  //   if (accountNumRef.current) {
  //     accountNumRef.current.blur();
  //   }
  // }, [accountNumRef.current]);

  // 숫자 키패드 입력시 값 변환
  const onChangeKeypad = useCallback(input => {
    if (input.length <= 13) {
      setAccountValue(input);
    }
  }, [accountValue]);

  // 숫자 키패드 '확인' 버튼
  const handleOpen = useCallback(() => {
    setNumDrawerOpen(false);
    if (bankValue === '') setBankBSOpen(true);
    if (accountNumRef.current) {
      accountNumRef.current.blur();
    }
  }, [numDrawerOpen, bankBSOpen, accountNumRef.current]);

  // 은행/증권사 바텀시트 열기/닫기
  const handleBankBSOpen = useCallback((value) => {
    if (accountNumRef.current) {
      accountNumRef.current.blur();
    }
    setNumDrawerOpen(false);
    setBankBSOpen(value);
  }, [bankBSOpen, accountNumRef.current]);

  const autoComplete = useCallback(() => {
    setNumDrawerOpen(false);
    // setBankBSOpen(false);
    setBankValue("신한");
    if (accountNumRef.current) {
      accountNumRef.current.blur();
    }
  }, [accountNumRef.current, numDrawerOpen, bankValue]);

  const autoCompleteWithAccount = useCallback(() => {
    dispatch(setAccountNum(String(1101200708094)));
    navigate('/transferInput')
  }, [navigate])

  // 최종 '다음' 버튼
  const saveAccountNum = useCallback(() => {
    if (accountValue !== '') {
      dispatch(setAccountNum(accountValue));
      navigate('/TransferInput');
    }
  }, [navigate, accountValue]);

  // 첫 진입시 keypad 활성화
  useEffect(() => {
    setNumDrawerOpen(true);
  }, []);

  return (
    <div className={$style.userTransit}>
      <h2>누구에게 보낼까요?</h2>
      {/* 계좌번호 입력 */}
      <Input
        // ref={accountNumRef}
        value={accountValue}
        onClick={() => setNumDrawerOpen(true)}
        placeholder={"계좌번호 입력"}
        inputMode="none"
        className={cx($style.accountInput, {[$style.on]: accountNum.length > 0})}
        allowClear={numDrawerOpen ? {
          clearIcon: <span className={$style.clearBtn} onClick={ accountClear }><InputClear /></span>
        } : {
          clearIcon : <span></span>}
        }
      />
      <Input
        // ref={bankInputRef}
        value={bankValue}
        placeholder={"은행/증권사"}
        inputMode="none"
        className={cx($style.accountInput, {on: bankValue.length > 0})}
        onClick={() => handleBankBSOpen(true)}
        allowClear={{clearIcon: <span></span>}}
      />
      { bankValue === "" && testType === "task1" || testType === "task3" ?
        <div className={$style.descWrap}>
          {
            accountValue.length <= 1 ?
            <p>계좌번호를 입력하면 찾아드릴게요.</p> :
            accountValue.length > 1 && accountValue.length <= 5 ?
            <p>금융기관을 보고 있어요.</p> :
            accountValue.length >= 6 ?
              <>
                <BgGrayButton click={autoComplete}>신한</BgGrayButton>
                <BgGrayButton>KB국민</BgGrayButton>
                <BgGrayButton>우리</BgGrayButton>
              </> : null
          }
        </div>
        : bankValue === "" && testType === "task2" ?
          <div className={$style.descWrap}>
            {
              accountValue.length === 0 ?
                <p>계좌번호를 입력하면 찾아드릴게요.</p> :
              accountValue.length === 1 ?
                <p>금융기관을 보고 있어요.</p> :
              accountValue.length >= 2 && accountValue.length <= 5 ?
                <BgGrayButton size={"small"} click={autoCompleteWithAccount}>
                  <span className={$style.blue}>신한 1101200708094</span>로 이체
                  <img src={iconAright} alt="" />
                </BgGrayButton> :
              accountValue.length >= 6 ?
                <>
                  <BgGrayButton click={autoComplete}>신한</BgGrayButton>
                  <BgGrayButton>KB국민</BgGrayButton>
                  <BgGrayButton>우리</BgGrayButton>
                </> : null
            }
          </div> : null
      }
      <Drawer
        rootClassName={$style.keyboardDrawer}
        placement={"bottom"}
        footer={
          <Button
            className={cx($style.change, accountValue.length >= 6 ? $style.active : "")}
            disabled={accountValue.length < 6}
            block
            onClick={handleOpen}>
            확인
          </Button>
        }
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
            onChange={(e)=> onChangeKeypad(e)}
            baseClass={`${$style.customKeypad}`}
          />
        </div>
      </Drawer>
      <BankBottomSheet
        setBankValue={(val) => setBankValue(val)}
        open={bankBSOpen}
        handleOpen={handleBankBSOpen}
      />
      {
        bankValue !== "" &&
        accountValue.length > 0 ?
        <Button className={$style.bottomNextBtn} block onClick={saveAccountNum}>다음</Button> : null
      }
    </div>
  )
}

export default TransitInput;