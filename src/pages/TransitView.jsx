import KBHeader from "../components/KBHeader.jsx";
import KBContainer from "../components/KBContainer.jsx";
import {Row, Col, Input} from "antd";
import CameraTransit from "../components/Buttons/CameraTransit.jsx";
import PNTransit from "../components/Buttons/PNTransit.jsx";
import UserTransitInput from "../components/transit/UserTransitInput.jsx";
import {useEffect, useRef} from "react";

const TransitView = () => {
  const accountNumRef = useRef(null);

  useEffect(() => {
    if (accountNumRef.current) {
      console.log('accountNumRef = ' ,accountNumRef.current)
    }
  }, [accountNumRef.current]);

  return (
    <>
      <KBContainer>
        <KBHeader />
        <UserTransitInput>
          <h2>누구에게 보낼까요?</h2>
          <Input ref={accountNumRef} placeholder={"계좌번호 입력"} inputMode="none" />
          <div>
            <CameraTransit />
            <p>촬영이체</p>
          </div>
          <div>
            <PNTransit />
            <p>연락처이체</p>
          </div>
        </UserTransitInput>
      </KBContainer>
    </>
  )
}

export default TransitView;