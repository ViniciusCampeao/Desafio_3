import { CiStar } from "react-icons/ci";

interface FormReviewProps {
  date: string;
  userName: string;
  rating: number;
  reviewCount: number;
  description: string;
}

const FormReview: React.FC<FormReviewProps> = ({ date, userName, rating, reviewCount, description }) => {

  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="
      w-full
      h-[207px]
      border
      border-solid
      border-Gray-3
      grid
      grid-cols-5
      p-7
      mt-4
    ">
      <div className="
        mr-4
        rounded-full
        bg-Gray-3
        w-24
        h-24
        col-span-1
        flex
        items-center
        justify-center
        text-5xl
        font-work-sans
        font-extrabold
      ">
        {userInitial}
      </div>
      <div className="
        justify-start
        col-span-4
      ">
        <p className="
          mb-2
          text-Gray-2
          text-sm
          font-inter
        ">
          {date}
        </p>
        <h1 className="
          mb-2
          font-bold
          font-work-sans
          text-lg
        ">
          {userName}
        </h1>
        <div className="flex items-center gap-1 mb-4">
          <div
            className="
              w-[40px]
              h-[22px]
              bg-Salmon-Red
              text-white
              text-xs
              font-inter
              rounded
              flex
              justify-center
              items-center
            "
          >
            <CiStar />
            {rating}
          </div>
          <p className="
            text-sm
            font-inter
            text-Gray-2
          ">
            {reviewCount} review{reviewCount > 1 ? 's' : ''}
          </p>
        </div>
        <p className="
          text-base
          font-inter
          text-Gray-2
        ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FormReview;
