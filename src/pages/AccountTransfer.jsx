import Keyboard, { KeyboardReactInterface }  from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Drawer, } from 'antd';
import {useEffect, useRef, useState} from "react";
import "../assets/keyboard-custom.scss";
import { Input, Button } from 'antd';
import styles from "../assets/AccountTransfer.module.scss"
import KBHeader from "../components/KBHeader.jsx";
import KBContainer from "../components/KBContainer.jsx";
import TransitInput from "../components/transit/TransitInput.jsx";

const AccountTransfer = () => {
  const [numDrawerOpen, setNumDrawerOpen] = useState(false);
  const [accountValue, setAccountValue] = useState("")
  const [bankValue, setBankValue] = useState("")
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
    <KBContainer>
      <KBHeader />
      <TransitInput
        accountValue={accountValue}
        accountClick={()=>setNumDrawerOpen(true)}
        accountClear={accountClear}
        focusOut={numDrawerOpen}
        bankValue={bankValue}
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
      
    </KBContainer>
  )
}

export default AccountTransfer;