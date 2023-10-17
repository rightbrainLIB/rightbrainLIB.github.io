import KBHeader from "../components/KBHeader.jsx";
import KBContainer from "../components/KBContainer.jsx";
import {Row, Col, Input} from "antd";
import CameraTransit from "../components/Buttons/CameraTransit.jsx";
import PNTransit from "../components/Buttons/PNTransit.jsx";
import UserTransitInput from "../components/transit/UserTransitInput.jsx";

const TransitView = () => {
  return (
    <>
      <KBContainer>
        <KBHeader />
        <UserTransitInput>

        </UserTransitInput>
      </KBContainer>
    </>
  )
}

export default TransitView;