import { useEffect, useState } from "react";
import arrowDown from "/desktop/icon-arrow-down.svg";
import moon from "/desktop/icon-moon.svg";

interface MainProps {
  isLess: boolean;
  setIsLess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Main({ isLess, setIsLess }: MainProps) {
  const [timeData, setTimeData] = useState({
    date: "",
    datetime: "",
    week: "",
    year: "",
    city: "",
    api: "",
    country_code: "",
    country_code_iso3: "",
    country_capital: "",
  });

  const [time, setTime] = useState({
    datetime: "",
  });

  const fetchTime = async () => {
    try {
      const response = await fetch("http://worldtimeapi.org/api/ip");
      const data = await response.json();
      setTime(data);
      console.log(time);
    } catch (error) {
      console.error("Error fetching time data:", error);
    }
  };

  const fetchApi = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const ipAddress = data.ip;

      const response2 = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      const data2 = await response2.json();
      setTimeData({ ...data2, api: ipAddress });
      console.log(data2);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  useEffect(() => {
    fetchTime();
    fetchApi();
  }, []);

  return (
    <main
      className={`${
        isLess ? "mt-[-12rem]" : "mt-[40%]"
      } flex flex-col justify-items-start`}
    >
      <div className="flex gap-[20px] items-center">
        <img src={moon} alt="icon-moon" />
        <h2 className="text-[15px] leading-[25px] uppercase  tracking-[3px]">
          GOOD EVENING, IT’S CURRENTLY
        </h2>
      </div>
      <div className="">
        <div className="mt-[16px] flex items-end gap-[13px]">
          <p className="text-[100px] leading-[100px] uppercase  tracking-[-2.5px] font-bold">
            {time.datetime.slice(11, 16)}
          </p>
          <span className="text-[15px] leading-[28px] uppercase  font-[300]">
            {timeData.country_code_iso3}
          </span>
        </div>
        <p className="font-bold text-[15px] leading-[28px] uppercase  tracking-[3px]  mt-[16px] mb-[48px]">
          IN {timeData.country_capital}, {timeData.country_code}
        </p>
      </div>
      <button
        className="bg-[#FFF] rounded-[28px] flex p-[13px] pr-[4px] max-h-[39px] justify-between items-center gap-[15px] max-w-[115px] cursor-pointer"
        type="button"
        onClick={() => setIsLess(!isLess)}
      >
        <span className="text-[#000] font-bold leading-[14px] tracking-[3.75px] uppercase opacity-50">
          {isLess ? "LESS" : "MORE"}
        </span>
        <div className="rounded-[50%] bg-[#303030] w-[32px] h-[32px] flex items-center justify-center">
          <img
            src={arrowDown}
            alt="icon-arrow-down"
            className={`${
              isLess ? "rotate-180" : " "
            } flex justify-center items-center`}
          />
        </div>
      </button>
      {isLess && (
        <div
          className="bg-custom-black pt-[48px] pb-[48px] pr-[26px] pl-[26px] flex flex-col gap-[16px] mt-[52px]  absolute bottom-0 w-full  left-0"
        >
          <div className="flex justify-between">
            <p>CURRENT TIMEZONE</p>
            <p>Europe/London</p>
          </div>
          <div className="flex justify-between">
            <p>Day of the year</p>
            <p>295</p>
          </div>
          <div className="flex justify-between">
            <p>Day of the week</p>
            <p>5</p>
          </div>
          <div className="flex justify-between">
            <p>Week number</p>
            <p>42</p>
          </div>
        </div>
      )}
    </main>
  );
}
