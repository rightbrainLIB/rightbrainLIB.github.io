import { Drawer } from "antd";
import $style from "../../styles/components/KBBottomSheet.module.scss";

const BottomSheet = ({ ...drawerProps }) => {
  const onClose = () => {
    drawerProps.onClose();
  };

  return (
    <>
      <Drawer
        className={
          drawerProps.title
            ? $style.bottomSheetWrap
            : [$style.bottomSheetWrap, $style.bottomSheetNoneWrap]
        }
        {...drawerProps}
        placement={"bottom"}
        onClose={onClose}
      ></Drawer>
    </>
  );
};
export default BottomSheet;
