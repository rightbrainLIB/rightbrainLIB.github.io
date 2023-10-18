import { useState } from "react";
import iconpolygon from "@imgs/ico_polygon.svg";
import iconAright from "@imgs/icon_arrow_right_20.svg";
import iconArrow from "@imgs/ico_arrow.svg";
import textAdd from "@imgs/btn_추가정보입력.svg";
import TransitCompleteModal from "./TransitCompleteModal.jsx";
import $style from "@styles/TransitCompleteConfirm.module.scss";

const TransitCompleteConfirm = () => {
  const [mopen, setMopen] = useState(false);
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

  return (
    <>
      <div className={$style.transPageWrap}>
        <div className={$style.body}>
          <div className={$style.header}>
            <span className={$style.left}>이체</span>
            <span className={$style.right}>취소</span>
          </div>
          <div className={$style.topAccountBox}>
            <div className={$style.inner}>
              <span>출금</span>
              <p>KB국민 371102-04-140099</p>
            </div>
            <img src={iconpolygon} alt="" />
          </div>
          <div className={$style.topAccountInfo}>
            <div className={$style.inner}>
              <p className={$style.name}>김받음님</p>
              <p className={$style.account}>신한 110-120-0708094</p>
              <p className={$style.text}>
                사기의심계좌 여부 조회
                <img src={iconAright} alt="" />
              </p>
            </div>
            <div className={$style.btn}>변경</div>
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
      <TransitCompleteModal drawerProps={drawerProps} />
    </>
  );
};

export default TransitCompleteConfirm;
