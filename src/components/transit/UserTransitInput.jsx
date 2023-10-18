import $style from '/src/styles/components/transit/UserTransitInput.module.scss'
import {Input} from "antd";
import CameraTransit from "/src/components/Buttons/CameraTransit.jsx";
import PNTransit from "/src/components/Buttons/PNTransit.jsx";
import {useEffect, useRef} from "react";

const UserTransitInput = () => {
  const accountNumRef = useRef(null);

  useEffect(() => {
    if (accountNumRef.current) {
      const accountNumInput =accountNumRef.current;
      console.log(accountNumInput);
    }
  }, [accountNumRef.current]);

  return (
    <div className={$style.userTransit}>
      <h2>누구에게 보낼까요?</h2>
      <Input ref={accountNumRef} placeholder={"계좌번호 입력"} inputMode="none" className={$style.accountInput} allowClear={true} />
      <ul className={$style.userAccountNumUtil}>
        <li>
          <CameraTransit />
          <p>촬영이체</p>
        </li>
        <li>
          <PNTransit />
          <p>연락처이체</p>
        </li>
      </ul>
    </div>
  )
}

export default UserTransitInput;