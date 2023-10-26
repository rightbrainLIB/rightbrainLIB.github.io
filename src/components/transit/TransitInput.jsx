import $style from "/src/styles/components/transit/UserTransitInput.module.scss";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { Input, Button, Drawer } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import InputClear from "@components/icons/InputClear.jsx";
import BankBottomSheet from "@components/bottomSheet/BankBottomSheet.jsx";
import cx from "classnames";
import BgGrayButton from "../buttons/BgGrayButton";
import iconDelete from "@imgs/ico_delete.svg";
import iconAright from "@imgs/icon_arrow_right_bl_20.svg";
import { setAccountNum } from "@slices/transit.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CI_SH from "@components/icons/CI_SH.jsx";
import CI_KB from "@components/icons/CI_KB.jsx";
import CI_WOORI from "@components/icons/CI_WOORI.jsx";
import BgGrayNormalButton from "../buttons/BgGrayNormalButton.jsx";

const TransitInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const inputPattern = /([0-9,\-]{3,6}\-[0-9,\-]{2,6}\-[0-9,\-])/
  const [accountValue, setAccountValue] = useState("");
  const [bankBSOpen, setBankBSOpen] = useState(false); // 은행/증권사 바텀시트
  const [bankValue, setBankValue] = useState("");
  const [numDrawerOpen, setNumDrawerOpen] = useState(false); // 키패드 drawer
  const keyboardRef = useRef(null);
  const accountNumRef = useRef(null);

  const accountNum = useSelector((state) => state.transit.accountNum);
  const testType = useSelector((state) => state.transit.testType);

  // 계좌번호 입력창 x 버튼
  const accountClear = useCallback(() => {
    keyboardRef.current.clearInput();
    setAccountValue("");
  }, [accountValue]);

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
  const onChangeKeypad = useCallback(
    (input) => {
      if (input.length <= 13) {
        setAccountValue(input);
      }
    },
    [accountValue]
  );

  // 숫자 키패드 '확인' 버튼
  const handleOpen = useCallback(() => {
    // setAccountValue(accountValue);
    dispatch(setAccountNum(accountValue));
    setNumDrawerOpen(false);
    if (bankValue === "") setBankBSOpen(true);
    if (bankValue !== "") {
      navigate("/transferInput");
    }
    if (accountNumRef.current) {
      accountNumRef.current.blur();
    }
  }, [accountValue, numDrawerOpen, bankBSOpen, accountNumRef.current]);

  // 은행/증권사 바텀시트 열기/닫기
  const handleBankBSOpen = useCallback(
    (value) => {
      if (accountNumRef.current) {
        accountNumRef.current.blur();
      }
      setNumDrawerOpen(false);
      setBankBSOpen(value);
    },
    [bankBSOpen, accountNumRef.current]
  );

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
    navigate("/transferInput");
  }, [navigate]);

  // 최종 '다음' 버튼
  const saveAccountNum = useCallback(() => {
    if (accountValue !== "") {
      dispatch(setAccountNum(accountValue));
      navigate("/transferInput");
    }
  }, [navigate, accountValue]);
  const afterOpenChangeKeyboard = useCallback((val) => {
    if (val) {
      accountNumRef.current.input.placeholder = "";
      accountNumRef.current.focus();
    } else {
      accountNumRef.current.blur();
      accountNumRef.current.input.placeholder = "계좌번호 입력";
    }
  }, []);

  const clickBankValue = useCallback(
    (val) => {
      setBankValue(val);
    },
    [accountValue, bankBSOpen]
  );

  // 첫 진입시 keypad 활성화
  useEffect(() => {
    setNumDrawerOpen(true);
  }, []);

  return (
    <div className={$style.userTransit}>
      <div className={$style.transitTitle}>
        <h2>누구에게 보낼까요?</h2>
        <p>계좌 선택</p>
      </div>
      {/* 계좌번호 입력 */}
      <Input
        ref={accountNumRef}
        value={accountValue}
        onClick={() => setNumDrawerOpen(true)}
        placeholder={"계좌번호 입력"}
        inputMode="none"
        className={cx($style.accountInput, {
          [$style.on]: accountNum.length > 0,
        })}
        allowClear={
          numDrawerOpen
            ? {
                clearIcon: (
                  <span className={$style.clearBtn} onClick={accountClear}>
                    <InputClear />
                  </span>
                ),
              }
            : {
                clearIcon: <span></span>,
              }
        }
      />
      <Input
      // ref={bankInputRef}
        value={bankValue}
        placeholder={"은행/증권사"}
        inputMode="none"
        className={cx($style.accountInput, { on: bankValue.length > 0 })}
        onClick={() => handleBankBSOpen(true)}
        allowClear={{ clearIcon: <span></span> }}
      />
      {bankValue === "" && (testType === "task1" || testType === "task3") ? (
        <div className={$style.descContainer}>
          <div className={$style.descWrap}>
            {accountValue.length <= 0 ? (
              <p>계좌번호를 입력하면 찾아드릴게요.</p>
            ) : accountValue.length >= 1 && accountValue.length <= 5 ? (
              <p>금융기관을 찾고있어요.</p>
            ) : accountValue.length >= 6 ? (
              <>
                <BgGrayButton click={autoComplete}>
                  <span className="img-box">
                    <CI_SH />
                  </span>
                  <span>신한</span>
                </BgGrayButton>
                <BgGrayButton>
                  <span className="img-box">
                    <CI_KB />
                  </span>
                  <span>KB국민</span>
                </BgGrayButton>
                <BgGrayButton>
                  <span className="img-box">
                    <CI_WOORI />
                  </span>
                  <span>우리</span>
                </BgGrayButton>
              </>
            ) : null}
          </div>
        </div>
      ) : bankValue === "" && testType === "task2" ? (
        <div className={$style.descWrap}>
          {accountValue.length === 0 ? (
            <p>계좌번호를 입력하면 찾아드릴게요.</p>
          ) : accountValue.length === 1 ? (
            <p>금융기관을 찾고있어요.</p>
          ) : accountValue.length >= 2 && accountValue.length <= 5 ? (
            <BgGrayNormalButton size={"small"} click={autoCompleteWithAccount}>
              <span className={$style.blue}>신한 1101200708094</span>로 이체
              <img src={iconAright} alt="" />
            </BgGrayNormalButton>
          ) : accountValue.length >= 6 ? (
            <>
              <BgGrayButton click={autoComplete}>
                <span className="img-box">
                  <CI_SH />
                </span>
                <span>신한</span>
              </BgGrayButton>
              <BgGrayButton>
                <span className="img-box">
                  <CI_KB />
                </span>
                <span>KB국민</span>
              </BgGrayButton>
              <BgGrayButton>
                <span className="img-box">
                  <CI_WOORI />
                </span>
                <span>우리</span>
              </BgGrayButton>
            </>
          ) : null}
        </div>
      ) : null}
      <Drawer
        rootClassName={$style.keyboardDrawer}
        placement={"bottom"}
        footer={
          <Button
            className={cx(
              $style.change,
              accountValue.length >= 6 ? $style.active : ""
            )}
            disabled={accountValue.length < 6}
            block
            onClick={handleOpen}
          >
            확인
          </Button>
        }
        open={numDrawerOpen}
        afterOpenChange={afterOpenChangeKeyboard}
        closeIcon={false}
        mask={false}
        height={348}
      >
        <div className={$style.drawerContainer}>
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            layout={{ default: ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"] }}
            theme={"hg-theme-default hg-layout-numeric numeric-theme"}
            display={{ "{bksp}": `<img src="${iconDelete}" alt="" />` }}
            onChange={(e) => onChangeKeypad(e)}
            baseClass={`${$style.customKeypad}`}
          />
        </div>
      </Drawer>
      <BankBottomSheet
        bankValue={bankValue}
        setBankValue={(val) => clickBankValue(val)}
        keypadOpen={() => setNumDrawerOpen(true)}
        open={bankBSOpen}
        accountValue={accountValue}
        handleOpen={handleBankBSOpen}
        onClickBankSH={() => ""}
        testType={testType}
      />
      {bankValue !== "" && accountValue.length > 0 ? (
        <Button className={$style.bottomNextBtn} block onClick={saveAccountNum}>
          다음
        </Button>
      ) : null}
    </div>
  );
};

export default TransitInput;
