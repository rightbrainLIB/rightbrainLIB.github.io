import $style from '@styles/components/transit/accountListWrap.module.scss';
import SearchIcon from "@components/icons/SearchIcon.jsx";
import { Button } from "antd";
import CI_KB from "@components/icons/CI_KB.jsx";
import FavStarOn from "@components/icons/FavStarOn.jsx";
import CI_SH from "@components/icons/CI_SH.jsx";
import FavStarOff from "@components//icons/FavStarOff.jsx";
import CI_HANA from "@components/icons/CI_HANA.jsx";

const AccountListWrap = () => {
  return (
    <div className={$style.accountListWrap}>
      <div className={$style.tabBtn}>
        <ul>
          <li>
            <Button type={"text"}>최근</Button>
          </li>
          <li>
            <Button type={"text"}>자주쓰는</Button>
          </li>
          <li>
            <Button type={"text"}>빠른</Button>
          </li>
          <li>
            <Button type={"text"}>내계좌</Button>
          </li>
        </ul>
        <div className={$style.searchBtnBox}>
          <SearchIcon />
        </div>
      </div>

      <ul className={$style.accountList}>
        <li>
          <div className={$style.imgBox}>
            <CI_KB />
          </div>
          <div className={$style.accountInfo}>
            <p>김국민</p>
            <p>
              <span>KB국민</span>
              <strong>800000-21-900000</strong>
            </p>
          </div>
          <div className={$style.favBtn}>
            <Button type="text">
              <FavStarOn />
            </Button>
          </div>
        </li>

        <li>
          <div className={$style.imgBox}>
            <CI_SH />
          </div>
          <div className={$style.accountInfo}>
            <p>안신한</p>
            <p>
              <span>신한</span>
              <strong>110-120-0708094</strong>
            </p>
          </div>
          <div className={$style.favBtn}>
            <Button type="text">
              <FavStarOff />
            </Button>
          </div>
        </li>

        <li>
          <div className={$style.imgBox}>
            <CI_HANA />
          </div>
          <div className={$style.accountInfo}>
            <p>안신한</p>
            <p>
              <span>신한</span>
              <strong>110-120-0708094</strong>
            </p>
          </div>
          <div className={$style.favBtn}>
            <Button type="text">
              <FavStarOff />
            </Button>
          </div>
        </li>

        <li>
          <div className={$style.imgBox}>
            <CI_KB />
          </div>
          <div className={$style.accountInfo}>
            <p>이국민</p>
            <p>
              <span>KB국민</span>
              <strong>800000-21-900000</strong>
            </p>
          </div>
          <div className={$style.favBtn}>
            <Button type="text">
              <FavStarOn />
            </Button>
          </div>
        </li>

        <li>
          <div className={$style.imgBox}>
            <CI_SH />
          </div>
          <div className={$style.accountInfo}>
            <p>안신한</p>
            <p>
              <span>신한</span>
              <strong>110-120-0708094</strong>
            </p>
          </div>
          <div className={$style.favBtn}>
            <Button type="text">
              <FavStarOff />
            </Button>
          </div>
        </li>

        <li>
          <div className={$style.imgBox}>
            <CI_HANA />
          </div>
          <div className={$style.accountInfo}>
            <p>안신한</p>
            <p>
              <span>신한</span>
              <strong>110-120-0708094</strong>
            </p>
          </div>
          <div className={$style.favBtn}>
            <Button type="text">
              <FavStarOff />
            </Button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AccountListWrap;