import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useMediaQuery } from "@uidotdev/usehooks";
function App() {
    const isSmallDevice = useMediaQuery("only screen and (min-width : 768px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  const [isLess, setIsLess] = useState(false);
  const [day, setDay] = useState(false);
if(day){
  document.body.classList.add("bg-day");
}
else{
  document.body.classList.add("bg-night");
}



if(isSmallDevice && !day){
  document.body.classList.add("bg-night2");

}
else if(isSmallDevice && day){
  document.body.classList.add("bg-day2");
}

if(isLargeDevice && !day){
  document.body.classList.add("bg-night3");
}
else if(isLargeDevice && day){
  document.body.classList.add("bg-day3");
}




  return (
    <>
      <Header isLess={isLess}></Header>
      <Main
        isSmallDevice = {isSmallDevice}
        isLess={isLess}
        setIsLess={setIsLess}
        day={day}
        setDay={setDay}
      ></Main>
    </>
  );
}

export default App;
