import {Button, Drawer} from "antd";
import $style from '@styles/components/bottomSheet/BankBottomSheet.module.scss'
import {useCallback, useEffect, useState} from "react";
import CI_KB from "@imgs/ci/CI_국민_24.svg";
import CI_IBK from "@imgs/ci/CI_IBK기업_24.svg";
import CI_NH from "@imgs/ci/CI_농협_24.svg";
import CI_KDB from "@imgs/ci/CI_KDB산업_24.svg";
import CI_SOOHYUB from "@imgs/ci/CI_수협_24.svg";
import CI_SH from "@imgs/ci/CI_신한_24.svg";
import CI_WOORI from "@imgs/ci/CI_우리_24.svg";
import CI_JPMorgan from "@imgs/ci/CI_제이피모간체이스_24.svg";
import CI_HANA from "@imgs/ci/CI_하나_24.svg";
import CI_CITY from "@imgs/ci/CI_한국씨티_24.svg";
import CI_SC from "@imgs/ci/CI_SC제일_24.svg";
import CI_KAKAO from "@imgs/ci/CI_카카오뱅크_24.svg";
import CI_AMERICA from "@imgs/ci/CI_뱅크오브아메리카_24.svg";
import CI_TOSS from "@imgs/ci/CI_토스뱅크_24.svg";
import CI_KYUNGNAM from "@imgs/ci/CI_경남_24.svg";
import CI_DAEGOO from "@imgs/ci/CI_대구_24.svg";
import BottomSheetCloseIcon from "@components/icons/BottomSheetCloseIcon.jsx";


const BankBottomSheet = ({ open, handleOpen, setBankValue }) => {
  const onCloseBankBottomSheet = useCallback(() => {
    handleOpen(false);
  }, [handleOpen]);

  const onClickBank = useCallback((e) => {
    // setBankValue(e.currentTarget.childNodes[1].innerText);
    setBankValue('신한');
    handleOpen(false);
  }, []);

  return (
    <Drawer
      className={$style.bankBottomSheet}
      open={open}
      title={"은행/증권사"}
      placement={"bottom"}
      key={"bankBottomSheet"}
      closeIcon={<BottomSheetCloseIcon />}
      height={'65%'}
      onClose={onCloseBankBottomSheet}
    >
      <div className={$style.BSContainer}>
        <div className={$style.tabMenu}>
          <ul>
            <li>
              <Button className={$style.on} type="text">은행</Button>
            </li>
            <li>
              <Button type="text">증권사</Button>
            </li>
          </ul>
        </div>
        <div className={$style.itemList}>
          <ul>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_KB} alt="" />
              </div>
              <p>KB국민</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_IBK} alt="" />
              </div>
              <p>기업</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_NH} alt="" />
              </div>
              <p>농협</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_KDB} alt="" />
              </div>
              <p>산업</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_SOOHYUB} alt="" />
              </div>
              <p>수협</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_SH} alt="" />
              </div>
              <p>신한</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_WOORI} alt="" />
              </div>
              <p>우리</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_JPMorgan} alt="" />
              </div>
              <p>제이피모간체이스</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_HANA} alt="" />
              </div>
              <p>하나</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_CITY} alt="" />
              </div>
              <p>한국씨티</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_SC} alt="" />
              </div>
              <p>SC제일</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_KAKAO} alt="" />
              </div>
              <p>카카오뱅크</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_AMERICA} alt="" />
              </div>
              <p>뱅크오브아메리카</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_TOSS} alt="" />
              </div>
              <p>토스뱅크</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_KYUNGNAM} alt="" />
              </div>
              <p>경남</p>
            </li>
            <li onClick={onClickBank}>
              <div className={$style.imgBox}>
                <img src={CI_DAEGOO} alt="" />
              </div>
              <p>대구</p>
            </li>
          </ul>
        </div>
      </div>
    </Drawer>
  )
}

export default BankBottomSheet;