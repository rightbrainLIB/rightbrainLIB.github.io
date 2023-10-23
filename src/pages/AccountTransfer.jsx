
// import {useEffect, useRef, useState} from "react";
// import $style from "@styles/AccountTransfer.module.scss"
import KBHeader from "@components/KBHeader.jsx";
import KBContainer from "@components/KBContainer.jsx";
import TransitInput from "@components/transit/TransitInput.jsx";
// import iconAccount from "@imgs/icon_account_20.svg";
import "@styles/keyboard-custom.scss";

const AccountTransfer = () => {
  return (
    <KBContainer>
      <KBHeader />
      <TransitInput />
      {/*<div className={$style.inputUtil}>*/}
        {/*<div className={$style.utilList}>*/}
          {/*<div className={$style.imgBox}>*/}
          {/*  <img src={iconAccount} alt="" />*/}
          {/*</div>*/}
          {/*<p>계좌 선택</p>*/}
        {/*</div>*/}
      {/*</div>*/}
    </KBContainer>
  )
}

export default AccountTransfer;