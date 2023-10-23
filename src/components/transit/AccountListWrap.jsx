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
      <div className={$style.btnContainer}>
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
      </div>

      <ul className={$style.accountList}>
        <li>
          <div className={$style.imgBox}>
            <CI_KB />
          </div>
          <div className={$style.accountInfo}>
            <p>김소희</p>
            <p>
              <span>KB국민</span>
              <strong>096302-04-191291</strong>
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
            <p>안수현</p>
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
            <p>고현재</p>
            <p>
              <span>하나</span>
              <strong>500-920000-91234</strong>
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
            <p>이주영</p>
            <p>
              <span>KB국민</span>
              <strong>096207-21-192548</strong>
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
            <p>박은지</p>
            <p>
              <span>신한</span>
              <strong>110-507-180999</strong>
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
            <p>임미정</p>
            <p>
              <span>KB국민</span>
              <strong>075802-04-321271</strong>
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
            <CI_SH />
          </div>
          <div className={$style.accountInfo}>
            <p>전새연</p>
            <p>
              <span>신한</span>
              <strong>110-502-160788</strong>
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
            <CI_HANA />
          </div>
          <div className={$style.accountInfo}>
            <p>김가현</p>
            <p>
              <span>하나</span>
              <strong>281-910444-01207</strong>
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
            <p>김슬기</p>
            <p>
              <span>KB국민</span>
              <strong>156087-21-124580</strong>
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
            <CI_SH />
          </div>
          <div className={$style.accountInfo}>
            <p>강은주</p>
            <p>
              <span>신한</span>
              <strong>110-507-180447</strong>
            </p>
          </div>
          <div className={$style.favBtn}>
            <Button type="text">
              <FavStarOn />
            </Button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AccountListWrap;