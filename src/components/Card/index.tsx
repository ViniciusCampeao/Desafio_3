import React from "react";
import { useNavigate} from "react-router-dom";
import { CiClock1, CiHeart, CiStar } from "react-icons/ci";

interface CardProps {
  CardImg: string;
  TourCountry: string;
  TourCity: string;
  TourTitle: string;
  TourAvaliation: number;
  AmountReview: number;
  TourDuration: number;
  TourPrice: number;
  TourId: number;
  Reload?: boolean;
}

const Card: React.FC<CardProps> = ({
  CardImg,
  TourCountry,
  TourCity,
  TourTitle,
  TourAvaliation,
  AmountReview,
  TourDuration,
  TourPrice,
  TourId,
  Reload = false,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/tour/${TourId}`);
    if (Reload)
        {
            window.location.reload();
        }
  };

  return (
    <div
      className="
    w-[270px]
    h-[401px]
    relative
    cursor-pointer
    hover:shadow-lg
    bg-Gray-4
    "
    onClick={handleCardClick}
    >
      <div className="
      absolute
      rounded-full
      bg-Gray-4
      flex
      justify-center
      items-center
      w-10
      h-10
      top-2
      right-3
      hover:bg-Salmon-Red
      "
      >
        <CiHeart />
      </div>
      <img
        className="
      h-[220px]
      w-[270px]
      "
        src={CardImg}
        alt="CardImage"
      />
      <div
        className="
      mx-4
      "
      >
        <div
          className="
      font-inter
      text-sm
      text-Gray-2
      mt-2
      flex
      gap-1
      "
        >
          <p>{TourCity},</p>
          <p>{TourCountry}</p>
        </div>
        <h1
          className="
      text-lg
      font-extrabold
      font-work-sans
      mt-2
      "
        >
          {TourTitle}
        </h1>
        <div
          className="
        flex
        gap-1
        flex-row
        mt-3
        "
        >
          <div
            className="
          w-[40px]
          h-[22px]
          bg-Salmon-Red
          text-white
          text-xs
          font-inter
          rounded-[4px]
          flex
          justify-center
          items-center
          "
          >
            <CiStar />
            {TourAvaliation}
          </div>
          <p
            className="
          text-Gray-2
          text-sm
          font-inter
          "
          >
            {AmountReview} reviews
          </p>
          <p
            className="
          text-Gray-2
          text-sm
          font-inter
          ml-auto
          flex
          items-center
          gap-1
          "
          >
            <CiClock1 />
            {TourDuration}
            days
          </p>
        </div>
        <div className="
        h-[1px] 
        w-[238px]
        bg-Gray-3
        mt-2
        "
        >
        </div>
        <div className="
        flex
        flex-row
        mt-4
        "
        >
        <p className="
        font-inter
        text-sm
        text-Gray-2
        "
        >
          Starting From
        </p>
        <p className="
        ml-auto
        font-kaushan
        text-xl
        "
        >
          ${TourPrice}
        </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
