import KBHeader from "@components/KBHeader.jsx";
import KBContainer from "@components/KBContainer.jsx";
import UserTransitInput from "@components/transit/UserTransitInput.jsx";
import AccountListWrap from "@components/transit/AccountListWrap.jsx";

const TransitView = () => {
  return (
    <>
      <KBContainer>
        <KBHeader />
        <UserTransitInput />
        <AccountListWrap />
      </KBContainer>
    </>
  )
}

export default TransitView;