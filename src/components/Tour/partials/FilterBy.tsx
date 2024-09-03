import React, { useState } from "react";

interface FilterByProps {
  onPriceChange: (price: number) => void;
  onSubmit: () => void;
}

const FilterBy: React.FC<FilterByProps> = ({ onPriceChange, onSubmit }) => {
  const [price, setPrice] = useState<number>(3000);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value, 10);
    setPrice(newPrice);
    onPriceChange(newPrice);
  };

  return (
    <div className="mt-16 bg-[#F7F8FA] px-[30px] py-[28px]">
      <h6 className="font-work-sans text-lg font-extrabold">Filter By</h6>
      <div className="relative mt-2">
        <input
          type="range"
          min="0"
          max="3000"
          step="10"
          value={price}
          className="slider"
          onChange={handlePriceChange}
        />
        <div className="flex justify-between mt-2">
          <span className="font-work-sans font-bold text-base">$0</span>
          <span className="font-work-sans font-bold text-base mr-14">${price}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={onSubmit}
        className="
          bg-Salmon-Red
          text-white
          font-work-sans
          text-base
          rounded-[4px]
          w-20
          h-10
          mt-4
          "
      >
        Submit
      </button>
    </div>
  );
};

export default FilterBy;
