import $style from "../../styles/components/button/BgGrayButton.module.scss"
import cx from "classnames"

const BgGrayButton = ({children, click, size}) => {
  return (
    <button type="button" className={cx($style.grayButton, $style[size])} onClick={click} >{children}</button>
  )
}

export default BgGrayButton;