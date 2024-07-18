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
        className={`flex items-center justify-between ${isLess ? "hidden" : "block"}`}
        // onChange={() => setIsLess(!isLess)}
      >
        <div className="max-w-[279px]">
          <p>{quote}</p>
          <h3 className="mt-[8px] font-bold">{author}</h3>
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
