import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import moon from "../assets/desktop/icon-moon.svg";


export default function Main() {
  return (
    <main className="mt-[70%] flex flex-col justify-items-start">
      <div className="flex gap-[20px]">
        <img src={moon} alt="icon-moon" />
        <h2 className="text-[15px] leading-[25px] uppercase  tracking-[3px]">
          GOOD EVENING
        </h2>
      </div>
      <div className="">
        <div className="mt-[16px] flex items-end gap-[13px]">
          <p className="text-[100px] leading-[100px] uppercase  tracking-[-2.5px] font-bold">
            23:14
          </p>
          <span className="text-[15px] leading-[28px] uppercase  font-[300]">
            BST
          </span>
        </div>
        <p className="font-bold text-[15px] leading-[28px] uppercase  tracking-[3px]  mt-[16px] mb-[48px]">
          IN LONDON, UK
        </p>
      </div>
      <button
        className="bg-[#FFF] rounded-[28px] flex p-[13px] pr-[4px] max-h-[39px] justify-between items-center gap-[15px] max-w-[115px]"
        type="button"
      >
        <span className="text-[#000] font-bold leading-[14px] tracking-[3.75px] uppercase opacity-50">
          MORE
        </span>
        <div className="rounded-[50%] bg-[#303030] w-[32px] h-[32px] flex items-center justify-center">
          <img src={arrowDown} alt="icon-arrow-down" />
        </div>
      </button>
    </main>
  );
}
