import KBHeader from "../components/KBHeader.jsx";
import KBContainer from "../components/KBContainer.jsx";
import {Row, Col, Input} from "antd";
import CameraTransit from "../components/Buttons/CameraTransit.jsx";
import PNTransit from "../components/Buttons/PNTransit.jsx";

const TransitView = () => {
  return (
    <>
      <KBContainer>
        <KBHeader />
        <h2>누구에게 보낼까요?</h2>
        <Input placeholder={"계좌번호 입력"} inputMode="none" />
        <div>
          <div>
            <CameraTransit />
            <p>촬영이체</p>
          </div>
          <div>
            <PNTransit />
            <p>연락처이체</p>
          </div>
        </div>
      </KBContainer>
    </>
  )
}

export default TransitView;