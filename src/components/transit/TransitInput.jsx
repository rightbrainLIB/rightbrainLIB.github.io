import $style from '/src/styles/components/transit/UserTransitInput.module.scss'
import {Input} from "antd";
import {useEffect, useRef} from "react";
import InputClear from "../../components/icons/InputClear.jsx";

const TransitInput = ({accountValue, accountClick, accountClear, focusOut, bankValue}) => {
  const accountNumRef = useRef(null);

  useEffect(() => {
    if (accountNumRef.current) {
      console.log('accountNumRef = ' ,accountNumRef.current)
    }
  }, [accountNumRef.current]);

  return (
    <div className={$style.userTransit}>
      <h2>누구에게 보낼까요?</h2>
      <Input 
        ref={accountNumRef} 
        value={accountValue} 
        onClick={accountClick} 
        placeholder={"계좌번호 입력"} 
        inputMode="none" 
        className={$style.accountInput} 
        allowClear={focusOut ? { clearIcon: <span onClick={ accountClear }><InputClear /></span> } : focusOut}
      />
      <Input 
        value={bankValue} 
        placeholder={"은행/증권사"} 
        inputMode="none" 
        className={$style.accountInput} 
      />
    </div>
  )
}

export default TransitInput;