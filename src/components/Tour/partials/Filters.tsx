import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import FilterBy from "./FilterBy"

interface FiltersProps {
  onSearch: (searchTerm: string) => void;
  onPriceChange: (price: number) => void;
  onSubmit: () => void;
}

const Filters: React.FC<FiltersProps> = ({ onSearch, onPriceChange, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <div className="bg-[#F7F8FA] px-[30px] py-[28px]">
        <h6 className="font-work-sans text-lg font-extrabold">Search</h6>
        <div className="relative flex">
          <input
            className="text-Gray-2 font-work-sans p-2 pr-10 mt-1"
            type="text"
            placeholder="Type anything..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="absolute top-3 right-10 w-5 h-5 text-Gray-2"
          >
            <CiSearch />
          </button>
        </div>
      </div>

      <FilterBy onPriceChange={onPriceChange} onSubmit={onSubmit} />

      <div className="mt-16 bg-[#F7F8FA] px-[30px] py-[28px]">
        <h6 className="font-work-sans text-lg font-extrabold">Categories</h6>
        <div className="mt-2">
          {/* Placeholder para os checkboxes de categorias, atualmente desabilitados */}
          <div className="flex items-center mt-2">
            <input type="checkbox" disabled className="mr-2" />
            <label className="font-work-sans text-base">Category 1</label>
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" disabled className="mr-2" />
            <label className="font-work-sans text-base">Category 2</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
