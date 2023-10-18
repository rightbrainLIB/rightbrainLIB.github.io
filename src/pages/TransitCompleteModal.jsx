import { useState } from "react";
import { Button, Space } from "antd";
import KBBottomSheet from "../components/BottomSheet/KBBottomSheet";
import $style from "../styles/pages/TransitCompleteModal.module.scss";

const TransitCompleteModal = () => {
  const [mopen, setMopen] = useState(false);
  const showDrawer = () => {
    setMopen(true);
  };
  const onClose = () => {
    setMopen(false);
  };

  const drawerProps = {
    open: mopen,
    onClose: onClose,
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <KBBottomSheet {...drawerProps}>
        <>
          <div className={$style.transCompleteWrap}>
            <div>
              <img
                src="/src/assets/images/icon_transprocess_110_38.svg"
                alt=""
              />
            </div>
          </div>
        </>
      </KBBottomSheet>
    </>
  );
};

export default TransitCompleteModal;
