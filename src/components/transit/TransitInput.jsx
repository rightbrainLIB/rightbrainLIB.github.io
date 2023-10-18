import $style from '/src/styles/components/transit/UserTransitInput.module.scss'
import {Input} from "antd";
import {useCallback, useEffect, useRef, useState} from "react";
import InputClear from "@components/icons/InputClear.jsx";
import BankBottomSheet from "@components/bottomSheet/BankBottomSheet.jsx";
import cx from 'classnames';

const TransitInput = ({accountValue, accountClick, accountClear, focusOut}) => {
  const [bankBSOpen, setBankBSOpen] = useState(false);
  const [bankValue, setBankValue] = useState('');
  const accountNumRef = useRef(null);
  const bankInputRef = useRef(null);

  useEffect(() => {
    if (accountNumRef.current) {
      console.log('accountNumRef = ' ,accountNumRef.current)
    }
  }, [accountNumRef.current]);

  const onFocusBankInput = useCallback(() => {
    setBankBSOpen(true);
    bankInputRef.current.blur();
  }, []);

  const handleOpen = useCallback((value) => {
    setBankBSOpen(value);
  }, []);

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
        ref={bankInputRef}
        value={bankValue}
        placeholder={"은행/증권사"}
        inputMode="none"
        className={cx($style.accountInput, {on: bankValue.length > 0})}
        onFocus={onFocusBankInput}
        allowClear={{clearIcon: <span></span>}}
      />

      <BankBottomSheet setBankValue={(val) => setBankValue(val)} open={bankBSOpen} handleOpen={handleOpen} />
    </div>
  )
}

export default TransitInput;