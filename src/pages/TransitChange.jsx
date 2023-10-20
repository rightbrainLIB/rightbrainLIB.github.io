import { useState, useRef, useCallback } from "react";
import iconpolygon from "@imgs/ico_polygon.svg";
import text01 from "@imgs/계좌번호오류메시지_214_24.svg";
import iconArrow from "@imgs/ico_arrow.svg";
import textAdd from "@imgs/btn_추가정보입력.svg";
import TransitCompleteModal from "./TransitCompleteModal.jsx";
import $style from "@styles/TransitChange.module.scss";
import { useSelector } from "react-redux";
import "@styles/keyboard-custom.scss";
import KBSecondHeader from "../components/KBSecondHeader.jsx";

const TransitChange = () => {
  const [mopen, setMopen] = useState(false);
  const keyboardRef = useRef(null);
  const accountNumRef = useRef(null);

  const accountNum = useSelector((state) => state.transit.accountNum);

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
    // console.log("Input changed", input);
  };

  const showDrawer = () => {
    setMopen(true);
  };
  const onClose = () => {
    setMopen(false);
  };

  const displayPriceVal = useSelector((state) => state.transit.displayPriceVal);
  const shortedPriceVal = useSelector((state) => state.transit.shortedPriceVal);

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

  return (
    <>
      <div className={$style.transPageWrap}>
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
              <p className={$style.account}>신한 110-120-0708094님께</p>
              <p className={$style.text}>
                <img src={text01} alt="" />
              </p>
            </div>
            <div className={$style.btn}>변경</div>
          </div>
          <div className={$style.accountNum}>
            <div className={$style.number}>
              {displayPriceVal}
              <span></span>
            </div>
            <div className={$style.info}>{shortedPriceVal}</div>
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
      <TransitCompleteModal drawerProps={drawerProps} />
    </>
  );
};

export default TransitChange;
