import {Link, NavLink} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <div>KB 사용자 테스트 123</div>
        <Link to={{ pathname: "/kb/test", state: { from: true }}}>test</Link><br />
        <Link to={{ pathname: "/kb/accountTransfer", state: { from: true }}}>accountTransfer</Link>
      </AnimatePresence>
    </>
  )
}

export default App
