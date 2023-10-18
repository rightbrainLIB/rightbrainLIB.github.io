import { Button } from "antd";
import HeaderHome from "@components/icons/HeaderHome.jsx";
import HeaderMenu from "@components/icons/HeaderMenu.jsx";
import $style from "@styles/TransitCompletePage.module.scss";

const TransitCompletePage = () => {
  return (
    <>
      <div className={$style.completeWrap}>
        <div className={$style.header}>
          <div className={$style.left}>이체</div>
          <div>
            <Button type="text">
              <HeaderHome />
            </Button>
            <Button type="text">
              <HeaderMenu />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransitCompletePage;
