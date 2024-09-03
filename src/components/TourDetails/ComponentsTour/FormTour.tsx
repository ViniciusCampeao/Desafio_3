import React, { useState, useEffect } from "react";

interface FormTourProps {
  basePrice: number;
  initialDate?: string;
  Time?: number;
}

const FormTour: React.FC<FormTourProps> = ({ basePrice, initialDate = "", Time = "" }) => {
  const [countAdults, setCountAdults] = useState(0);
  const [countKids, setCountKids] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const adultsPrice = countAdults * basePrice;
      const kidsPrice = countKids * (basePrice * 0.75);
      const childrenPrice = countChildren * (basePrice * 0.5);
      setTotalPrice(adultsPrice + kidsPrice + childrenPrice);
    };

    calculateTotalPrice();
  }, [countAdults, countKids, countChildren, basePrice]);

  const incrementAdults = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCountAdults(countAdults + 1);
  };

  const decrementAdults = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (countAdults > 0) setCountAdults(countAdults - 1);
  };

  const incrementKids = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCountKids(countKids + 1);
  };

  const decrementKids = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (countKids > 0) setCountKids(countKids - 1);
  };

  const incrementChildren = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCountChildren(countChildren + 1);
  };

  const decrementChildren = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (countChildren > 0) setCountChildren(countChildren - 1);
  };

  return (
    <div className="
    h-[60%]
    "
    >
      <form className="
        ml-[45px] 
        bg-Gray-4 
        p-8 
        w-[369px]
        ">
        <div className="
          flex 
          gap-1 
          justify-start 
          items-center
          ">
          <p className="
            font-work-sans 
            font-bold 
            text-2xl
            ">
            ${basePrice}
          </p>
          <p> / per person</p>
        </div>
        <div className="
          mt-5 
          h-[1px] 
          w-full 
          bg-Gray-3
          "></div>

        <h1 className="
          font-inter 
          text-sm 
          font-semibold 
          mt-7
          ">
          Date
        </h1>
        <input
          type="date"
          defaultValue={initialDate}
          className="
            mt-1 
            w-full 
            h-[40px] 
            bg-Gray-4 
            border-2 
            border-Gray-3 
            rounded-md 
            p-2
            "
            disabled
        />

        <h1 className="
          font-inter 
          text-sm 
          font-semibold 
          mt-5
          ">
          Time
        </h1>
        <input
          type="text"
          defaultValue={Time}
          className="
            mt-1 
            w-full 
            h-[40px] 
            bg-Gray-4 
            border-2 
            border-Gray-3 
            rounded-md 
            p-2
            "
            disabled
        />

        <h1 className="
          font-inter 
          text-sm 
          font-semibold 
          mt-5
          ">
          Ticket
        </h1>

        <div className="
          flex 
          gap-2 
          mt-2 
          justify-between
          ">
          <p className="
            font-inter 
            text-sm
            ">
            Adults (18+ years)
          </p>
          <div className="
            flex 
            gap-2
            ">
            <button onClick={decrementAdults} className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg
              ">
              -
            </button>
            <div className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg 
              text-center
              ">
              {countAdults}
            </div>
            <button onClick={incrementAdults} className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg
              ">
              +
            </button>
          </div>
        </div>

        <div className="
          flex 
          gap-2 
          mt-2 
          justify-between
          ">
          <p className="
            font-inter 
            text-sm
            ">
            Kids (12+ years)
          </p>
          <div className="
            flex 
            gap-2
            ">
            <button onClick={decrementKids} className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg
              ">
              -
            </button>
            <div className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg 
              text-center
              ">
              {countKids}
            </div>
            <button onClick={incrementKids} className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg
              ">
              +
            </button>
          </div>
        </div>

        <div className="
          flex 
          gap-2 
          mt-2 
          justify-between
          ">
          <p className="
            font-inter 
            text-sm
            ">
            Children (3+ years)
          </p>
          <div className="
            flex 
            gap-2
            ">
            <button onClick={decrementChildren} className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg
              ">
              -
            </button>
            <div className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg 
              text-center
              ">
              {countChildren}
            </div>
            <button onClick={incrementChildren} className="
              h-8 
              w-8 
              border 
              border-solid 
              border-Gray-3 
              text-lg
              ">
              +
            </button>
          </div>
        </div>

        <div className="
          h-[1px] 
          w-full 
          bg-Gray-3 
          mt-5
          "></div>
        <div className="
          flex 
          justify-between 
          mt-5 
          items-center
          ">
          <h1 className="
            font-inter 
            text-sm
            ">
            Total</h1>
          <p className="
            font-work-sans 
            font-bold 
            text-2xl 
            text-Salmon-Red
            ">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
        <button className="
          bg-Salmon-Red 
          text-white 
          w-full 
          h-9 
          rounded-md 
          mt-5 
          text-center 
          font-inter 
          text-sm
          ">
          Book now
        </button>
      </form>
    </div>
  );
};

export default FormTour;
