import { useEffect, useState } from "react";
import refresh from "/desktop/icon-refresh.svg";
export default function Header({ isLess }: { isLess: boolean }) {
  const [quote, setQuote] = useState([
    "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
  ]);
  const [author, setAuthor] = useState(["Ada Lovelace"]);
  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://recite.onrender.com/random/quote-from-db"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <header>
      <div
        className={`flex items-center justify-between ${
          isLess ? "hidden" : "block"
        } md:gap-[15px]`}
      >
        <div className="md:max-w-[540px]    max-w-[279px]">
          <p className="md:text-[18px]">{quote}</p>
          <h3 className="md:text-[18px] mt-[8px] font-bold">
            {author}
          </h3>
        </div>
        <img
          className="mb-[20px] mr-[10px] cursor-pointer"
          src={refresh}
          alt="refresh_svg"
          onClick={fetchQuote}
        />
      </div>
    </header>
  );
}
