import { FaStar } from "react-icons/fa";
import FormAverage from "./FormAverage";

interface TourInformationsProps {
  price: number;
  duration: string;
  maxPeople: number;
  minAge: string;
  tourType: string;
  averageRating: number;
  reviewsCount: number;
  overview: string;
}

const TourInformations: React.FC<TourInformationsProps> = ({
  price,
  duration,
  maxPeople,
  minAge,
  tourType,
  averageRating,
  reviewsCount,
  overview,
}) => {
  return (
    <div>
      <div
        className="
  flex
  justify-between
  mt-7
  "
      >
        <div className="flex flex-col gap-1">
          <p
            className="
      text-Gray-2
      "
          >
            From
          </p>
          <p
            className="
      text-Salmon-Red
      font-semibold
      font-work-sans
      "
          >
            ${price}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className="
      text-Gray-2
      "
          >
            Duration
          </p>
          <p
            className="
      font-semibold
      font-work-sans
      "
          >
            {duration}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className="
      text-Gray-2
      "
          >
            Max People
          </p>
          <p
            className="
      font-semibold
      font-work-sans
      "
          >
            {maxPeople}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className="
      text-Gray-2
      "
          >
            Min Age
          </p>
          <p
            className="
      font-semibold
      font-work-sans
      "
          >
            {minAge}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className="
      text-Gray-2
      "
          >
            Tour Type
          </p>
          <p
            className="
      font-semibold
      font-work-sans
      "
          >
            {tourType}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className="
      text-Gray-2
      "
          >
            Reviews
          </p>
          <div
            className="
      flex
      gap-1
      "
          >
            <FaStar className="text-Salmon-Red" />
            <p
              className="
      font-semibold
      font-work-sans
      "
            >
              {averageRating}
            </p>
            <p
              className="
        text-Gray-2
        "
            >
              ({reviewsCount} reviews)
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h1
          className="
        font-work-sans
        font-extrabold
        text-2xl
        "
        >
          Overview
        </h1>
        <p
          className="
        font-work-sans
        text-Gray-5
        mt-3
        "
        >
          {overview}
        </p>
        <h1
          className="
        font-work-sans
        font-extrabold
        text-2xl
        mt-7
        "
        >
          Map
        </h1>
        <FormAverage ratings={{
          Services: 4.5,
          Location: 3.8,
          Amenities: 4.0,
          Prices: 3.5,
          Food: 4.2,
          "Room comfort and quality": 4.8,
}} />

      </div>
    </div>
  );
};

export default TourInformations;
