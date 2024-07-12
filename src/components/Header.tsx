import { useEffect, useState } from "react";
import refresh from "/desktop/icon-refresh.svg";
export default function Header() {
  const [quote, setQuote] = useState([
    "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
  ]);
  const [author, setAuthor] = useState(["Ada Lovelace"]);
  const fetchQuote = async () => {
    const response = await fetch(
      "https://recite.onrender.com/random/quote-from-db"
    );
    const data = await response.json();
    setQuote(data.quote);
    setAuthor(data.author);
    console.log(data.author);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <header>
      <div className="flex items-center justify-between ">
        <div className="max-w-[279px]">
          <p>{quote}</p>
          <h3 className="mt-[8px] font-bold">{author}</h3>
        </div>
        <img
          className="mb-[60px] cursor-pointer"
          src={refresh}
          alt="refresh_svg"
          onClick={fetchQuote}
        />
      </div>
    </header>
  );
}
