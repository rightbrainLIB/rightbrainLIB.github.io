import { useState, useCallback, useRef, useEffect } from "react";
import { Drawer, Button, Input } from "antd";
import { setAccountNum } from "@slices/transit.js";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import iconpolygon from "@imgs/ico_polygon.svg";
import text01 from "@imgs/계좌번호오류메시지_214_24.svg";
import iconAright from "@imgs/icon_arrow_right_20.svg";
import iconArrow from "@imgs/ico_arrow.svg";
import textAdd from "@imgs/btn_추가정보입력.svg";
import iconDelete from "@imgs/ico_delete.svg";
import InputClear from "@components/icons/InputClear.jsx";
import TransitCompleteModal from "./TransitCompleteModal.jsx";
import BankBottomSheet from "@components/bottomSheet/BankBottomSheet.jsx";
import $style from "@styles/TransitChange.module.scss";
import "@styles/keyboard-custom.scss";

const TransitChange = () => {
  const dispatch = useDispatch();

  const [chnageAccountChk, setChnageAccountChk] = useState(false);
  const [bankBSOpen, setBankBSOpen] = useState(false);
  const [numDrawerOpen, setNumDrawerOpen] = useState(false);
  const [accountValue, setAccountValue] = useState("");
  const [bankValue, setBankValue] = useState("");
  const [mopen, setMopen] = useState(false);
  const keyboardRef = useRef(null);
  const accountNumRef = useRef(null);

  let accountNum = useSelector((state) => state.transit.accountNum);

  accountNum = "123123";
  const handleOpen = useCallback((value) => {
    setBankBSOpen(value);
    setNumDrawerOpen(false);
  }, []);

  const accountDrawerOpen = useCallback(() => {
    setNumDrawerOpen(true);
  }, []);

  const numDrawerClose = useCallback(() => {
    setNumDrawerOpen(false);
  }, []);

  const accountClear = () => {
    keyboardRef.current.clearInput();
    setAccountValue("");
  };

  const onChange = (input) => {
    setAccountValue(input);
    console.log("Input changed", input);
  };

  const showDrawer = () => {
    setMopen(true);
  };
  const onClose = () => {
    setMopen(false);
  };

  const drawerProps = {
    open: mopen,
    onClose: onClose,
    classNames: {
      wrapper: "CmodalWrapper",
      mask: "CmodalMask",
      body: "CmodalBody",
    },
    height: "429px",
  };

  const saveAccountNum = () => {
    dispatch(setAccountNum(accountValue));
  };

  useEffect(() => {
    if (accountNumRef.current) {
      console.log("accountNumRef = ", accountNumRef.current);
    }
  }, [accountNumRef.current]);

  return (
    <>
      <div
        className={cx($style.transPageWrap, {
          [$style.on]: bankBSOpen || numDrawerOpen,
        })}
      >
        <div className={$style.header}>
          <span className={$style.left}>이체</span>
          <span className={$style.right}>취소</span>
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
              {chnageAccountChk
                ? [
                    <p className={$style.chaccount}>
                      신한 110-120-0708094님께
                    </p>,
                    <p className={$style.chtext}>
                      <img src={text01} alt="" />
                    </p>,
                  ]
                : [
                    <p className={$style.name}>김받음님</p>,
                    <p className={$style.account}>신한 {accountValue}</p>,
                    <p className={$style.text}>
                      사기의심계좌 여부 조회
                      <img src={iconAright} alt="" />
                    </p>,
                  ]}
            </div>
            <div className={$style.btn} onClick={accountDrawerOpen}>
              변경
            </div>
          </div>
          <div className={$style.accountNum}>
            <div className={$style.number}>
              50,000<span>원</span>
            </div>
            <div className={$style.info}>5만원</div>
          </div>
        </div>
        <div className={$style.accountTransInfo}>
          <p>받는 분 통장 표시</p>
          <div className={$style.name}>
            김국민 <img src={iconArrow} alt="" />
          </div>
          <p>내 통장 표시</p>
          <div className={$style.name}>
            김받음 <img src={iconArrow} alt="" />
          </div>
          <div className={$style.desc}>
            <img src={textAdd} alt="" />
          </div>
        </div>
        <div className={$style.bottomBtn} onClick={showDrawer}>
          이체
        </div>
      </div>
      <Drawer
        rootClassName={cx($style.keyboardDrawer, $style.keyboardBottomDrawer)}
        title="계좌번호"
        placement={"bottom"}
        footer={
          <Button block onClick={handleOpen} className={$style.modalbtn}>
            확인
          </Button>
        }
        onClose={numDrawerClose}
        open={numDrawerOpen}
        height={466}
      >
        <div className={$style.drawerContainer}>
          <div className={$style.inputBox}>
            <Input
              ref={accountNumRef}
              value={accountValue}
              placeholder={"계좌번호 입력"}
              inputMode="none"
              maxLength={15}
              className={cx($style.accountInput, { on: bankValue.length > 0 })}
              allowClear={
                numDrawerOpen
                  ? {
                      clearIcon: (
                        <span onClick={accountClear}>
                          <InputClear />
                        </span>
                      ),
                    }
                  : numDrawerOpen
              }
            />
          </div>
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            layout={{ default: ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"] }}
            theme={"hg-theme-default hg-layout-numeric numeric-theme"}
            display={{ "{bksp}": `<img src="${iconDelete}" alt="" />` }}
            onChange={(e) => onChange(e)}
            baseClass={`${$style.customKeypad}`}
            useTouchEvents={true}
          />
        </div>
      </Drawer>
      <BankBottomSheet
        setBankValue={(val) => setBankValue(val)}
        open={bankBSOpen}
        handleOpen={handleOpen}
      />
      <TransitCompleteModal drawerProps={drawerProps} />
    </>
  );
};

export default TransitChange;
