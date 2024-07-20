import { useEffect, useState } from "react";
import arrowDown from "/desktop/icon-arrow-down.svg";
import moon from "/desktop/icon-moon.svg";
import sun from "/desktop/icon-sun.svg";
interface MainProps {
  isLess: boolean;
  setIsLess: React.Dispatch<React.SetStateAction<boolean>>;
  day: boolean;
  setDay: React.Dispatch<React.SetStateAction<boolean>>;
  isSmallDevice: boolean;
}

export default function Main({
  isLess,
  setIsLess,
  day,
  setDay,
  isSmallDevice,
}: MainProps) {
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
    timezone: "",
  });

  const [time, setTime] = useState({
    datetime: "",
    day_of_week: "",
    day_of_year: "",
    week_number: "",
  });

  const fetchTime = async () => {
    try {
      const response = await fetch("http://worldtimeapi.org/api/ip");
      const data = await response.json();
      setTime(data);
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

  useEffect(() => {
    const currentTime = time.datetime.slice(11, 16);

    if (currentTime === "06:00" || currentTime === "18:00") {
      setDay((prevDay) => !prevDay);
    }
  }, [time.datetime]);

  let message = "";
  if (day && isSmallDevice) {
    message = "GOOD MORNING, IT’S CURRENTLY";
  } else if (!day && isSmallDevice) {
    message = "GOOD EVENING, IT’S CURRENTLY";
  } else if (day) {
    message = "GOOD MORNING";
  } else {
    message = "GOOD EVENING";
  }

  return (
    <main
      className={`${
        isLess ? "mt-[-12rem]" : "mt-[40%]"
      } flex flex-col justify-items-start`}
    >
      <div className="md:mb-[20px] flex gap-[20px] items-center">
        {day ? (
          <img src={sun} alt="icon-sun" />
        ) : (
          <img src={moon} alt="icon-moon" />
        )}

        <h2 className=" lg:text-[20px] md:text-[18px] text-[15px] leading-[25px] uppercase tracking-[3px]">
          {message}
        </h2>
      </div>
      <div className="">
        <div className="lg:mt-[32px]  mt-[16px] flex items-end gap-[13px]">
          <p className=" lg:text-[200px]   md:text-[175px]    text-[100px] leading-[100px] uppercase  tracking-[-2.5px] font-bold">
            {time.datetime.slice(11, 16)}
          </p>
          <span className="lg:text-[40px]   md:text-[32px] text-[15px] leading-[28px] uppercase  font-[300]">
            {timeData.country_code_iso3}
          </span>
        </div>
        <p className=" lg:text-[24px]  lg:mt-[60px] md:mt-[40px] md:text-[18px] font-bold text-[15px] leading-[28px] uppercase  tracking-[3px]  mt-[16px] mb-[48px]">
          IN {timeData.country_capital}, {timeData.country_code}
        </p>
      </div>
      <button
        className={`${
          isLess ? "lg:top-[22rem]" : "lg:top-[36rem]"
        }    lg:absolute lg:bottom-0 lg:right-[3rem]  md:max-w-[146px] md:max-h-[46px]  bg-[#FFF] rounded-[28px] flex p-[13px] pr-[4px] max-h-[39px] justify-between items-center gap-[15px] max-w-[115px] cursor-pointer`}
        type="button"
        onClick={() => setIsLess(!isLess)}
      >
        <span className="      md:text-[22px]   text-[#000] font-bold leading-[14px] tracking-[3.75px] uppercase opacity-50">
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
          id={"blur"}
          className={`${isLess && isSmallDevice ? "hidden" : "block"} ${
            day
              ? " bg-custom-white text-[#303030]"
              : "bg-custom-black text-[#FFF]"
          } pt-[48px] pb-[48px] pr-[26px] pl-[26px] flex flex-col gap-[16px] mt-[52px]  absolute bottom-0 w-full  left-0  `}
        >
          <div className="flex justify-between">
            <p className="font-[400] leading-[28px] tracking-[2px] opacity-80  uppercase">
              CURRENT TIMEZONE
            </p>
            <p className="font-bold text-[20px]">{timeData.timezone}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-[400] leading-[28px] tracking-[2px] uppercase opacity-80 ">
              Day of the year
            </p>
            <p className="font-bold text-[20px]">{time.day_of_year}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-[400] leading-[28px] tracking-[2px] uppercase opacity-80">
              Day of the week
            </p>
            <p className="font-bold text-[20px]">{time.day_of_week}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-[400] leading-[28px] tracking-[2px] uppercase opacity-80">
              Week number
            </p>
            <p className="font-bold text-[20px]">{time.week_number}</p>
          </div>
        </div>
      )}
      {isLess && isSmallDevice && (
        <div
          id={"blur"}
          className={`${
            day
              ? " bg-custom-white text-[#303030]"
              : "bg-custom-black text-[#FFF]"
          }  pt-[48px] pb-[48px] pr-[26px] pl-[26px] flex justify-evenly	 gap-[16px] mt-[52px]  absolute bottom-0 w-full  left-0  `}
        >
          <div className="flex flex-col gap-[50px]">
            <div className="flex justify-between flex-col items-start">
              <p className="lg:mb-[10px]    lg:ml-[13px] lg:text-[15px] font-[400] leading-[28px] tracking-[3px] opacity-80  uppercase">
                CURRENT TIMEZONE
              </p>
              <p className=" lg:text-[56px] md:mt-[10px]    font-bold text-[20px]">
                {timeData.timezone}
              </p>
            </div>
            <div className="flex justify-between flex-col">
              <p className="lg:text-[15px] lg:mb-[30px]  font-[400] leading-[28px] tracking-[3px] uppercase opacity-80 ">
                Day of the year
              </p>
              <p className="lg:text-[56px] md:mt-[10px]   font-bold text-[20px]">
                {time.day_of_year}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[50px]">
            <div className="flex justify-between flex-col ">
              <p className=" lg:text-[15px]   font-[400] leading-[28px] tracking-[3px] uppercase opacity-80 lg:mb-[30px]">
                Day of the week
              </p>
              <p className="lg:text-[56px]  md:mt-[10px]  font-bold text-[20px]">
                {time.day_of_week}
              </p>
            </div>
            <div className="flex justify-between flex-col">
              <p className=" lg:mb-[30px] lg:text-[15px]   font-[400] leading-[28px] tracking-[3px] uppercase opacity-80">
                Week number
              </p>
              <p className=" lg:text-[56px] md:mt-[10px]   font-bold text-[20px]">
                {time.week_number}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
