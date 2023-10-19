import { Button } from "antd";
import HeaderHome from "@components/icons/HeaderHome.jsx";
import HeaderMenu from "@components/icons/HeaderMenu.jsx";
import comimg from "@imgs/text_이체완료_size2.svg";
import iconstar from "@imgs/icon_star_off_20.svg";
import text01 from "@imgs/btn_메시지카드.svg";
import iconArrow from "@imgs/ico_arrow.svg";
import $style from "@styles/TransitCompletePage.module.scss";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

const TransitCompletePage = () => {
  const navigate = useNavigate();

  const onClickCompleteConfirm = useCallback(() => {
    navigate('/')
  }, [navigate]);

  return (
    <>
      <div className={$style.completeWrap}>
        <div className={$style.header}>
          <div className={$style.left}>이체</div>
          <div>
            <Button type="text">
              <HeaderHome />
            </Button>
            <Button type="text">
              <HeaderMenu />
            </Button>
          </div>
        </div>
        <div className={$style.content}>
          <div className={$style.img}>
            <img src={comimg} alt="" />
          </div>
          <div className={$style.accoutUserInfo}>
            <p className={$style.name}>김받음님께</p>
            <p className={$style.num}>
              50,000<span>원</span>
            </p>
            <p>이체가 완료되었습니다.</p>
          </div>
          <div className={$style.accoutInfo}>
            <span>신한은행 110-120-0708094</span>
            <img src={iconstar} alt="" />
          </div>
          <div className={$style.descImg}>
            <img src={text01} alt="" />
          </div>
        </div>
        <div className={$style.bottomDesc}>
          <p>
            이체 상세정보
            <img src={iconArrow} alt="" />
          </p>
        </div>
        <div className={$style.btnBox}>
          <ul>
            <li>추가이체</li>
            <li>거래내역조회</li>
          </ul>
          <p>
            다른 은행 계좌로 이체 시 입금 은행의 사정에 따라 해당 계좌의 입금이
            다소 지연될 수 있습니다.
          </p>
        </div>
        <div className={$style.bottomBtn} onClick={onClickCompleteConfirm}>확인</div>
      </div>
    </>
  );
};

export default TransitCompletePage;
