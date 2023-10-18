import { useNavigate } from "react-router-dom";
import iconTransit from "@imgs/icon_transprocess_110_38.svg";
import textInfo from "@imgs/안내_최근이체기록없음_269_38.svg";
import iconArrow from "@imgs/ico_arrow.svg";
import KBBottomSheet from "@components/BottomSheet/KBBottomSheet";
import $style from "@styles/TransitCompleteModal.module.scss";

const TransitCompleteModal = (drawerProps) => {
  const navigate = useNavigate();

  const move = () => {
    navigate("/TransitCompletePage");
  };

  return (
    <>
      <KBBottomSheet {...drawerProps.drawerProps}>
        <>
          <div className={$style.transCompleteWrap}>
            <div className={$style.topImg}>
              <img src={iconTransit} alt="" />
            </div>
            <div className={$style.info}>
              <p>
                <span>김받음</span> 님께
              </p>
              <p>
                <span>50,000원</span> 이체합니다.
              </p>
            </div>
            <div className={$style.account}>
              신한은행 <span>110-120-070894</span>
            </div>
            <div className={$style.bottomText}>
              <img src={textInfo} alt="" />
            </div>
            <div className={$style.bottom}>
              <p>
                이체 상세정보
                <img src={iconArrow} alt="" />
              </p>
            </div>
          </div>
          <div className={$style.bottomBtn} onClick={move}>
            이체
          </div>
        </>
      </KBBottomSheet>
    </>
  );
};

export default TransitCompleteModal;
