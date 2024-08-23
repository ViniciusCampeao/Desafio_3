import { CiFlag1, CiCalendarDate } from "react-icons/ci";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";

const Search = () => {
  return (
    <div
      className="
      p-4 
      border-2 
      border-gray-200 
      rounded-lg 
      shadow-md 
      max-w-5xl 
      mx-auto
      bg-white
      "
    >
      <div
        className="
        grid 
        grid-cols-5 
        gap-4
        "
      >
        <div className="col-span-1">
          <h1 className="text-gray-700 mb-2">Destination</h1>
          <div className="relative">
            <IoPaperPlaneOutline
              className="
              absolute 
              left-2 
              top-1/2 
              transform 
              -translate-y-1/2 
              text-gray-400
              "
            />
            <input
              type="text"
              placeholder="Where to go?"
              className="
              w-full 
              p-2 
              pl-8 
              border-2 
              border-gray-200 
              rounded-lg
              "
            />
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-gray-700 mb-2">Type</h1>
          <div className="relative">
            <CiFlag1
              className="
              absolute 
              left-2 
              top-1/2 
              transform 
              -translate-y-1/2 
              text-gray-400
              "
            />
            <input
              type="text"
              placeholder="Activity"
              className="
              w-full 
              p-2 
              pl-8 
              border-2 
              border-gray-200 
              rounded-lg
              "
            />
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-gray-700 mb-2">When</h1>
          <div className="relative">
            <CiCalendarDate
              className="
              absolute 
              left-2 
              top-1/2 
              transform 
              -translate-y-1/2 
              text-gray-400
              "
            />
            <input
              type="Date"
              className="
              w-full 
              p-2 
              pl-8 
              border-2 
              border-gray-200 
              rounded-lg
              "
            />
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-gray-700 mb-2">Guests</h1>
          <div className="relative">
            <GoPeople
              className="
              absolute 
              left-2 
              top-1/2 
              transform 
              -translate-y-1/2 
              text-gray-400
              "
            />
            <input
              type="number"
              placeholder="Guests"
              className="
              w-full 
              p-2 
              pl-8 
              border-2 
              border-gray-200 
              rounded-lg
              "
              min="1"
            />
          </div>
        </div>

        <div className="col-span-1 flex items-end">
          <button
            className="
            w-full 
            p-2 
            bg-Salmon-Red
            text-white 
            rounded-lg 
            font-bold 
            text-lg
            "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
