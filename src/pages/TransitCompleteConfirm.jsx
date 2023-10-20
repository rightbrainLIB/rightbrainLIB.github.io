import { useCallback, useEffect, useRef, useState } from "react";
import text01 from "@imgs/계좌번호오류메시지_214_24.svg";
import iconpolygon from "@imgs/ico_polygon.svg";
import iconDelete from "@imgs/ico_delete.svg";
import iconAright from "@imgs/icon_arrow_right_20.svg";
import iconArrow from "@imgs/ico_arrow.svg";
import textAdd from "@imgs/btn_추가정보입력.svg";
import InputClear from "@components/icons/InputClear.jsx";
import TransitCompleteModal from "./TransitCompleteModal.jsx";
import $style from "@styles/TransitCompleteConfirm.module.scss";
import cx from "classnames";
import KBSecondHeader from "@components/KBSecondHeader.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setAccountNum } from "../slices/transit.js";
import { Button, Drawer, Input } from "antd";
import Keyboard from "react-simple-keyboard";
import "@styles/keyboard-custom.scss";

const TransitCompleteConfirm = () => {
  const dispatch = useDispatch();

  const [mopen, setMopen] = useState(false);
  const [accountValue, setAccountValue] = useState("");
  const [numDrawerOpen, setNumDrawerOpen] = useState(false); // 계좌번호 입력 키패드 바텀시트
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [chkAccountValid, setChkAccountValid] = useState(true); // 계좌번호 유효 체크
  const [adjustTaskHeight, setAdjustTaskHeight] = useState("");

  const keyboardRef = useRef(null);

  const showDrawer = useCallback(() => {
    setMopen(true);
  }, []);
  const onClose = useCallback(() => {
    if (!chkAccountValid) return;
    setMopen(false);
  }, [chkAccountValid]);

  const drawerProps = {
    open: mopen,
    onClose: onClose,
    classNames: {
      wrapper: "CmodalWrapper",
      mask: "CmodalMask",
      body: "CmodalBody",
    },
    height: adjustTaskHeight, // "429px", "372px"
  };

  const testType = useSelector((state) => state.transit.testType);
  const accountNum = useSelector((state) => state.transit.accountNum);

  const displayPriceVal = useSelector((state) => state.transit.displayPriceVal);
  const shortedPriceVal = useSelector((state) => state.transit.shortedPriceVal);

  // 키패드 누를시 실행
  const onChangeAccountNum = useCallback(
    (input) => {
      if (accountValue.length < 13) {
        setAccountValue(input);
      }
    },
    [accountValue, accountNum]
  );

  // 계좌번호 입력창 x 버튼
  const accountClear = useCallback(() => {
    keyboardRef.current.clearInput();
    setAccountValue("");
  }, [accountValue]);

  // 키패드 합칠 경우 필요하면 활용
  const onClickAccountChangeBtn = useCallback(() => {
    // dispatch(setKeypadType('acount'));
    setNumDrawerOpen(true);
  }, [numDrawerOpen]);

  const numDrawerClose = useCallback(() => {
    setNumDrawerOpen(false);
  }, []);

  // 계좌번호 입력 키패드 '확인' 선택
  const onClickDrawerConfirm = useCallback(
    () => {
      if (accountValue.length === 0) return;
      if (accountValue.length <= 13) {
        dispatch(setAccountNum(accountValue));
        setChkAccountValid(true);
        setNumDrawerOpen(false);
      }
    },
    [accountValue, accountNum, chkAccountValid]
  );

  // 계좌번호 입력 키패드 활성화시 Input에 현재 계좌번호 불러오기
  const afterOpenAccountKeypad = useCallback((val) => {
    if (val) {
      if (accountNum) {
        setAccountValue(accountNum);
        keyboardRef.current.setInput(accountNum, 'accountInput');
      } else {
        setAccountValue('1101200708094');
        keyboardRef.current.setInput('1101200708094', 'accountInput');
      }
    }
  }, [numDrawerOpen, accountNum]);

  useEffect(() => {
    if (displayPriceVal) {
      setAmount(displayPriceVal.split(" ")[0]);
      setCurrency(displayPriceVal.split(" ")[1]);
    }
  }, [displayPriceVal]);

  useEffect(() => {
    if (accountNum.length < 13) {
      setChkAccountValid(false);
    } else {
      setChkAccountValid(true);
    }
  }, [accountNum]);

  useEffect(() => {
    if (testType === "task3") {
      setChkAccountValid(false);
    }
    if (testType === "task1") {
      setAdjustTaskHeight("423px")
    } else {
      setAdjustTaskHeight("372px")
    }
  }, [testType]);

  return (
    <>
      <div className={cx($style.transPageWrap, { [$style.on]: mopen })}>
        <div className={$style.transPageContainer}>
          <KBSecondHeader />
        </div>
        <div className={$style.body}>
          <div className={$style.topAccountBox}>
            <div className={$style.inner}>
              <span>출금</span>
              <p>KB국민 371102-04-140099</p>
            </div>
            <img src={iconpolygon} alt="" />
          </div>
          <div className={$style.topAccountInfo}>
            <div className={$style.inner}>
              {chkAccountValid ? (
                <>
                  <p className={$style.name}>이나연님</p>
                  <p className={$style.account}>
                    신한{" "}
                    {accountNum
                      ? accountNum.replace(/(\d{3})(\d{3})(\d{7})/, "$1-$2-$3")
                      : "110-120-0708094"}
                  </p>
                  <p className={$style.text}>
                    사기의심계좌 여부 조회
                    <img src={iconAright} alt="" />
                  </p>
                </>
              ) : (
                <>
                  <p className={$style.errAccount}>
                    신한{" "}
                    {accountNum
                      ? accountNum.replace(/(\d{3})(\d{3})(\d{7})/, "$1-$2-$3")
                      : "110-120-0708094"}
                    님께
                  </p>
                  <p className={$style.errText}>
                    <img src={text01} alt="" />
                  </p>
                </>
              )}
            </div>
            <div className={$style.btn} onClick={onClickAccountChangeBtn}>
              변경
            </div>
          </div>
          <div className={$style.accountNum}>
            <div className={$style.number}>
              {displayPriceVal ? (
                <>
                  <span className={$style.amount}>{amount}</span>
                  <span className={$style.currency}>{currency}</span>
                </>
              ) : (
                <>
                  <span className={$style.amount}>50,000</span>
                  <span className={$style.currency}>원</span>
                </>
              )}
            </div>
            <div className={$style.info}>
              {shortedPriceVal ? shortedPriceVal : "5만원"}
            </div>
          </div>
        </div>
        <div className={$style.accountTransInfo}>
          <p>받는 분 통장 표시</p>
          <div className={$style.name}>
            김경민님 <img src={iconArrow} alt="" />
          </div>
          <p>내 통장 표시</p>
          <div className={$style.name}>
            {
              chkAccountValid &&
              <>
                이나연
              </>
            }
            <img src={iconArrow} alt="" />
          </div>
          <div className={$style.desc}>
            <img src={textAdd} alt="" />
          </div>
        </div>
        <div className={$style.bottomBtn}>
          {/*chkAccountValid*/}
          <Button onClick={showDrawer} disabled={!chkAccountValid}>이체</Button>
        </div>
      </div>
      <TransitCompleteModal drawerProps={drawerProps} />
      <Drawer
        title={"계좌번호"}
        rootClassName={$style.keyboardDrawer}
        placement={"bottom"}
        footer={
          <Button block onClick={onClickDrawerConfirm}>
            확인
          </Button>
        }
        onClose={numDrawerClose}
        open={numDrawerOpen}
        closeIcon={true}
        height={466}
        afterOpenChange={afterOpenAccountKeypad}
      >
        <div className={$style.drawerContainer}>
          <Input
            value={accountValue}
            onClick={() => setNumDrawerOpen(true)}
            placeholder={""}
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
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            layout={{ default: ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"] }}
            theme={"hg-theme-default hg-layout-numeric numeric-theme"}
            display={{ "{bksp}": `<img src="${iconDelete}" alt="" />` }}
            onChange={(e) => {
              setAccountValue(e);
              onChangeAccountNum(e);
            }}
            baseClass={`${$style.customKeypad}`}
            useTouchEvents={true}
            disableButtonHold={true}
            syncInstanceInputs={true}
            inputName="accountInput"
          />
        </div>
      </Drawer>
    </>
  );
};

export default TransitCompleteConfirm;
