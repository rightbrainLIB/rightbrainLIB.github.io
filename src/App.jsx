import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>KB 사용자 테스트 123</div>
      <Link to="/test">test</Link>
      <br />
      <Link to="/transit">transit</Link>
      <br />
      <Link to="/accountTransfer">accountTransfer</Link>
      <br />
      <Link to="/transferInput">TransferInput</Link>
      <br />
      <Link to="/transitCompleteConfirm">TransitCompleteConfirm</Link>
      <br />
      <Link to="/transitChange">TransitChange(Task3)</Link>
      <br />
    </>
  );
}

export default App;
