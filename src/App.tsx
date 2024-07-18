import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [isLess, setIsLess] = useState(false);
  const [day, setDay] = useState(false);
if(day){
  document.body.classList.add("bg-day");
}else{
  document.body.classList.add("bg-night");
}

  return <>
<Header isLess={isLess}  ></Header>
<Main isLess={isLess} setIsLess={setIsLess} day={day} setDay={setDay}></Main>
  </>;
}

export default App;
