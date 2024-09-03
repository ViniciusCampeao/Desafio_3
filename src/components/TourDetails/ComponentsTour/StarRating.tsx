import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="bg-transparent border-none outline-none cursor-pointer"
        >
          <FaStar
            size={24}
            color={(hover || rating) >= star ? "#000000" : "#e4e5e9"}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
