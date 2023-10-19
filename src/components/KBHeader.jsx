import $style from '../styles/components/KBHeader.module.scss'
import HeaderBack from "./icons/HeaderBack.jsx";
import {Button, Col, Row} from "antd";
import HeaderHome from "./icons/HeaderHome.jsx";
import HeaderMenu from "./icons/HeaderMenu.jsx";
import {useCallback} from "react";
import {useNavigate } from 'react-router-dom';

const KBHeader = () => {
  const navigate = useNavigate ();

  const onClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onClickHome = useCallback(() => {
    navigate('/')
  }, [navigate]);

  return (
    <>
      <div className={$style.kbHeader}>
        <div className={$style.col}>
          <Button type="text" onClick={onClickBack}>
            <HeaderBack />
          </Button>
          <p>이체</p>
        </div>
        <div className={$style.col}>
          <Button type="text" onClick={onClickHome}>
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