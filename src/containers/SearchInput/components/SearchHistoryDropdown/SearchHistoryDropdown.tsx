type SearchHistoryDropdownProps = {
  searchHistory: string[];
};

const SearchHistoryDropdown = ({
  searchHistory,
}: SearchHistoryDropdownProps) =>
  searchHistory.length > 0 ? (
    <div className="absolute left-0 top-10 h-60 w-full overflow-y-auto rounded-lg bg-white shadow-lg">
      {searchHistory.map((history) => (
        <div
          key={history}
          className="flex items-center justify-between border-b border-slate-100 px-6 py-2 text-slate-700"
        >
          <span>{history}</span>
        </div>
      ))}
    </div>
  ) : null;

export default SearchHistoryDropdown;
