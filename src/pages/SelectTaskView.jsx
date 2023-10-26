import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import $style from "@styles/SelectTaskView.module.scss";
import { useDispatch } from "react-redux";
import { setTestType } from "../slices/transit.js";
import { setAccountNum } from "@slices/transit.js";

const SelectTaskView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickTask = useCallback(
    (val) => {
      dispatch(setTestType(val));
      dispatch(setAccountNum(""));

      navigate("/transit");
    },
    [dispatch]
  );

  return (
    <>
      <div className={$style.taskContainer}>
        <ul className={$style.taskListWrap}>
          <li>
            <Button onClick={() => onClickTask("task1")}>Task1</Button>
          </li>
          <li>
            <Button onClick={() => onClickTask("task2")}>Task2</Button>
          </li>
          <li>
            <Button onClick={() => onClickTask("task3")}>Task3</Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SelectTaskView;
