
import {useEffect, useRef, useState} from "react";
import $style from "@styles/AccountTransfer.module.scss"
import KBHeader from "@components/KBHeader.jsx";
import KBContainer from "@components/KBContainer.jsx";
import iconAccount from "@imgs/icon_account_20.svg";
import "@styles/keyboard-custom.scss";
import TransitInput2 from "../components/transit/TransitInput2"

const AccountTransfer2 = () => {
  return (
    <KBContainer>
      <KBHeader />
      <TransitInput2 />
      <div className={$style.inputUtil}>
        <div className={$style.utilList}>
          <div className={$style.imgBox}>
            <img src={iconAccount} alt="" />
          </div>
          <p>계좌 선택</p>
        </div>
      </div>
    </KBContainer>
  )
}

export default AccountTransfer2;