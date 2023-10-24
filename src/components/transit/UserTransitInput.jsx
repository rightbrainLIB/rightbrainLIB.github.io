import $style from '/src/styles/components/transit/UserTransitInput.module.scss'
import {Input} from "antd";
import CameraTransit from "/src/components/buttons/CameraTransit.jsx";
import PNTransit from "/src/components/buttons/PNTransit.jsx";
import {useCallback, useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom';

const UserTransitInput = () => {
  const navigate = useNavigate();

  const onClickAccountNum = useCallback(() => {
    navigate('/accountTransfer');
  }, [navigate]);

  return (
    <div className={$style.userTransit}>
      <h2>누구에게 보낼까요?</h2>
      <Input
        tabIndex={-1}
        placeholder={"계좌번호 입력"}
        // inputMode="none"
        className={$style.accountInput}
        allowClear={true}
        onClick={onClickAccountNum}
        readOnly
      />
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