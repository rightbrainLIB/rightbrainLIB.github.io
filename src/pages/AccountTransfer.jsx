import Wrapper from "../components/Wrapper.jsx";
import Keyboard, { KeyboardReactInterface }  from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Drawer, } from 'antd';
import {useEffect, useRef, useState} from "react";
import "../assets/keyboard-custom.scss";
import { Input, Button } from 'antd';
import styles from "../assets/AccountTransfer.module.scss"

const AccountTransfer = () => {
  const [numDrawerOpen, setNumDrawerOpen] = useState(false);
  const [accountValue, setAccountValue] = useState("")
  const [bankValue, setBankValue] = useState("")
  const accountInput = useRef()
  const keyboardRef = useRef(null)

  const onChange = input => {
    setAccountValue(input);
    console.log("Input changed", input);
  };
  
  const numDrawerClose = () => {
    setNumDrawerOpen(false)
  }

  const accountClear = () => {
    keyboardRef.current.clearInput();
    setAccountValue('');
  };

  
  useEffect(()=> {
    setNumDrawerOpen(true)
  }, [])
  
  return (
    <Wrapper>
      <div>누구에게 보낼까요?</div>
      <Input 
        ref={accountInput}
        inputMode="none" 
        placeholder="계좌번호 입력" 
        value={accountValue} 
        focus={false}
        onClick={()=>setNumDrawerOpen(true)} 
        allowClear={{ clearIcon: <span onClick={ accountClear } className={styles.clearButtom}></span> } }
      />
      <Input
        inputMode="none"
        value={bankValue}
        placeholder={"은행/증권사"}
        onChange={()=> {}}
      />
      <Drawer
        placement={"bottom"}
        onClose={numDrawerClose}
        open={numDrawerOpen}
        closeIcon={false}
        mask={false}
      >
        <Keyboard
        // mergeDisplay={true}
        keyboardRef={(r) => (keyboardRef.current = r)}
        layout={{default: ["1 2 3", "4 5 6", "7 8 9", " 0 {bksp}"],}}
        theme={"hg-theme-default hg-layout-numeric numeric-theme"}
        display= {{"{bksp}": "←"}}
        onChange={(e)=> onChange(e)}
        baseClass={"customKeypad"}
      />
       <Button block onClick={numDrawerClose}>확인</Button>
      </Drawer>
      
    </Wrapper>
  )
}

export default AccountTransfer;