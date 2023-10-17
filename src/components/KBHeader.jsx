import $style from '../styles/components/KBHeader.module.scss'
import HeaderBack from "./icons/HeaderBack.jsx";
import {Button, Col, Row} from "antd";
import HeaderHome from "./icons/HeaderHome.jsx";
import HeaderMenu from "./icons/HeaderMenu.jsx";

const KBHeader = () => {
  return (
    <>
      <div className={$style.kbHeader}>
        <div className={$style.col}>
          <Button type="text">
            <HeaderBack />
          </Button>
          <p>이체</p>
        </div>
        <div className={$style.col}>
          <Button type="text">
            <HeaderHome />
          </Button>
          <Button type="text">
            <HeaderMenu />
          </Button>
        </div>
      </div>
    </>
  )
}

export default KBHeader;