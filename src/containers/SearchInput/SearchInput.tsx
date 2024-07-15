import { useCallback, useEffect, useRef, useState } from "react";
import { Search, X as ClearIcon } from "react-feather";
import { IconButton, Input } from "@/components";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { SearchHistoryDropdown } from "./components";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { updateSearchValueParam, deleteSearchValueParam } =
    useUpdateSearchParams();

  const handleSearchSubmit = useCallback(() => {
    updateSearchValueParam(searchValue);
    setSearchHistory((prev) => {
      if (prev.includes(searchValue)) return prev;
      return [searchValue, ...prev];
    });
  }, [searchValue, updateSearchValueParam]);

  const handleClearSearch = useCallback(() => {
    setSearchValue("");
    deleteSearchValueParam();
  }, [deleteSearchValueParam]);

  useEffect(() => {
    const enterListener = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearchSubmit();
      } else if (e.key === "Escape") {
        handleClearSearch();
      }
    };
    inputRef.current?.addEventListener("keydown", enterListener);
    return () => {
      inputRef.current?.removeEventListener("keydown", enterListener);
    };
  }, [inputRef, handleSearchSubmit, handleClearSearch]);

  useEffect(() => {
    const focusListener = () => {
      setIsDropdownOpen(true);
    };
    const blurListener = () => {
      setIsDropdownOpen(false);
    };
    inputRef.current?.addEventListener("focus", focusListener);
    inputRef.current?.addEventListener("blur", blurListener);
    return () => {
      inputRef.current?.removeEventListener("focus", focusListener);
      inputRef.current?.removeEventListener("blur", blurListener);
    };
  }, []);

  return (
    <div className="relative w-full">
      <Input
        value={searchValue}
        aria-placeholder="Search"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onSubmit={handleSearchSubmit}
        startAdornment={<Search className="text-slate-400" size={16} />}
        endAdornment={
          searchValue && (
            <IconButton
              icon={<ClearIcon size={16} />}
              onClick={handleClearSearch}
              className="text-slate-400"
            />
          )
        }
        placeholder="Type to search..."
        ref={inputRef}
      />
      {isDropdownOpen ? (
        <SearchHistoryDropdown searchHistory={searchHistory} />
      ) : null}
    </div>
  );
};

export default SearchInput;
