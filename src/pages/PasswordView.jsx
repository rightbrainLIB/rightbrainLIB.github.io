import $style from '@styles/passwordView.module.scss';
import {Input} from "antd";
import {useCallback, useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

const PASSWORD = "0760";

const PasswordView = () => {
  const navigate = useNavigate();

  const [passwordValue, setPasswordValue] = useState('');

  const onChangePassword = useCallback((e) => {
    e.preventDefault();
    setPasswordValue(e.target.value)
  }, [passwordValue]);

  useEffect(() => {
    if (passwordValue && passwordValue === PASSWORD) {
      navigate('/home')
    }
  }, [passwordValue])

  return (
    <div className={$style.passwordView}>
      <div className={$style.passwordContainer}>
        <h1>password</h1>
        <Input.Password
          value={passwordValue}
          onChange={onChangePassword}
          iconRender={(visible) => (visible ? "" : "")}
          maxLength={10}
        />
      </div>
    </div>
  )
}

export default PasswordView;