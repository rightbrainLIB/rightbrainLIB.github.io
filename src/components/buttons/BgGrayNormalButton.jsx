import $style from "../../styles/components/button/BgGrayNormalButton.module.scss"
import cx from "classnames"

const BgGrayButton = ({children, click, size}) => {
  return (
    <button type="button" className={cx($style.grayNormalButton, $style[size])} onClick={click} >{children}</button>
  )
}

export default BgGrayButton;