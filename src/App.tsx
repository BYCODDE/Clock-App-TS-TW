import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [isLess, setIsLess] = useState(false);



  return <>
<Header isLess={isLess} ></Header>
<Main isLess={isLess} setIsLess={setIsLess}></Main>
  </>;
}

export default App;
