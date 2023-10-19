import {Button} from "antd";
import { useNavigate } from 'react-router-dom';
import {useCallback} from "react";
import $style from '@styles/SelectTaskView.module.scss';

const SelectTaskView = () => {
  const navigate = useNavigate();

  const onClickTask1 = useCallback(() => {
    navigate('/transit');
  }, []);

  const onClickTask2 = useCallback(() => {
    navigate('/transit');
  }, []);

  const onClickTask3 = useCallback(() => {
    navigate('/transit');
  }, []);

  return (
    <>
      <div className={$style.taskContainer}>
        <ul className={$style.taskListWrap}>
          <li>
            <Button onClick={onClickTask1}>Task1</Button>
          </li>
          <li>
            <Button onClick={onClickTask2}>Task2</Button>
          </li>
          <li>
            <Button onClick={onClickTask3}>Task3</Button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SelectTaskView;