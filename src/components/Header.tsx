import refresh from "../assets/desktop/icon-refresh.svg";
export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div>
          <p>
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <h3 className="mt-[8px] font-bold">Ada Lovelace</h3>
        </div>
        <img className="mb-[60px]" src={refresh} alt="refresh_svg" />
      </div>
    </header>
  );
}
