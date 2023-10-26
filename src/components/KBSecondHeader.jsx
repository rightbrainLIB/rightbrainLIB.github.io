import $style from '../styles/components/KBHeader.module.scss'
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {Button} from "antd";
import HeaderBack from "./icons/HeaderBack.jsx";
import HeaderHome from "./icons/HeaderHome.jsx";
import HeaderMenu from "./icons/HeaderMenu.jsx";
import {useDispatch} from "react-redux";
import { setAccountNum } from "@slices/transit.js";

const KBSecondHeader = () => {
  const navigate = useNavigate ();
  const dispatch = useDispatch();

  const onClickBack = useCallback(() => {
    navigate(-1);
    dispatch(setAccountNum(''));
  }, []);

  return (
    <>
      <div className={$style.kbHeader}>
        <div className={$style.col}>
          <p>이체</p>
        </div>
        <div className={$style.col}>
          <Button type="text" className={$style.cancelBtn} onClick={onClickBack}>
            <span>취소</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default KBSecondHeader;