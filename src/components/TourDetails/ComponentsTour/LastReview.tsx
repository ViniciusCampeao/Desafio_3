import React, { useEffect, useState } from "react";
import axios from "axios";
import FormReview from "./FormReview";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface User {
  name: string;
}

interface ReviewData {
  services: number;
  location: number;
  amenities: number;
  prices: number;
  comfort: number;
  description: string;
  createdAt: string;
  user?: User;
}

const LastReviewContainer: React.FC<{ tourId: number }> = ({ tourId }) => {
  const [review, setReview] = useState<ReviewData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastReview = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tours/${tourId}/last-review`);
        console.log(response.data);
        setReview(response.data);
      } catch (error) {
        console.error("Failed to fetch the last review", error);
        setError("Failed to fetch the review.");
      }
    };

    fetchLastReview();
  }, [tourId]);

  if (error) {
    return (
    <div className="
    flex 
    flex-col 
    items-center 
    justify-center 
    text-red-600 
    p-4
    "
    >
      <AiOutlineInfoCircle size={50} />
      <p className="
      mt-2 
      text-lg 
      font-bold
      "
      >
        There aren't enough reviews
        </p>
      <p className="text-sm">{error}</p>
    </div>
  );
}

  if (!review) {
    return (
      <div className="
      flex 
      flex-col 
      items-center 
      justify-center 
      text-gray-500
      p-4
      "
      >
        <AiOutlineInfoCircle size={50} />
        <p className="
        mt-2 
        text-lg 
        font-bold
        "
        >
          No reviews found.
          </p>
        <p className="
        text-sm
        "
        >
          Be the first to review this tour!
          </p>
      </div>
    );
  }

  const formattedDate = new Date(review.createdAt).toLocaleDateString();
  const averageRating = (
    (review.services + review.location + review.amenities + review.prices + review.comfort) / 5
  ).toFixed(1);

  return (
    <FormReview
      date={formattedDate}
      userName={review.user?.name || 'Anonymous'}
      rating={parseFloat(averageRating)}
      reviewCount={1}
      description={review.description || 'No description provided.'}
    />
  );
};

export default LastReviewContainer;
