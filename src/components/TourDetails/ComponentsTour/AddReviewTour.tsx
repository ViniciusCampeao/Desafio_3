import { useState } from "react";
import StarRating from "./StarRating";
import { createReview } from "../../../axiosClient/apiClient";
import { Review } from "../../../axiosClient/types";

interface AddReviewProps {
  tourId: number;
  userId: string;
}

const AddReview: React.FC<AddReviewProps> = ({ tourId, userId }) => {
  const [serviceRating, setServiceRating] = useState(0);
  const [locationRating, setLocationRating] = useState(0);
  const [amenitiesRating, setAmenitiesRating] = useState(0);
  const [pricesRating, setPricesRating] = useState(0);
  const [comfortRating, setComfortRating] = useState(0);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!name || !email || !description) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    const newReview: Review = {
      services: serviceRating,
      location: locationRating,
      amenities: amenitiesRating,
      prices: pricesRating,
      comfort: comfortRating,
      description,
      tourId,
      userId,
    };

    try {
      console.log(newReview)
      await createReview(newReview);
      setSuccessMessage("Review submitted successfully!");
      setServiceRating(0);
      setLocationRating(0);
      setAmenitiesRating(0);
      setPricesRating(0);
      setComfortRating(0);
      setDescription("");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
    w-full 
    p-8 
    bg-gray-100 
    mt-7 
    rounded-lg
    "
    >
      <h1 className="
      font-work-sans 
      font-bold 
      text-xl 
      mb-5
      "
      >
        Add a Review
        </h1>
      {error && <p className="
      text-red-500 
      mb-4
      "
      >
        {error}
        </p>}
      {successMessage && <p className="
      text-green-500 
      mb-4
      "
      >
        {successMessage}
        </p>}
      <form onSubmit={handleSubmit}>
        <div className="
        grid 
        grid-cols-2 
        gap-4 
        mb-6
        "
        >
          <div>
            <p className="
            mb-2 
            font-inter 
            text-sm
            "
            >
              Services
              </p>
            <StarRating rating={serviceRating} onRatingChange={setServiceRating} />
          </div>
          <div>
            <p className="
            mb-2 
            font-inter 
            text-sm
            "
            >
              Location
              </p>
            <StarRating rating={locationRating} onRatingChange={setLocationRating} />
          </div>
          <div>
            <p className="
            mb-2 
            font-inter 
            text-sm
            "
            >
              Amenities
              </p>
            <StarRating rating={amenitiesRating} onRatingChange={setAmenitiesRating} />
          </div>
          <div>
            <p className="
            mb-2 
            font-inter 
            text-sm
            "
            >
              Prices
              </p>
            <StarRating rating={pricesRating} onRatingChange={setPricesRating} />
          </div>
          <div className="col-span-2">
            <p className="
            mb-2 
            font-inter 
            text-sm
            "
            >
              Room Comfort and Quality
              </p>
            <StarRating rating={comfortRating} onRatingChange={setComfortRating} />
          </div>
        </div>

        <div className="
        grid 
        grid-cols-2 
        gap-4 
        mb-4
        "
        >
          <input
            type="text"
            placeholder="Your Name"
            className="
            p-2 
            border 
            border-gray-300 
            rounded 
            w-full
            "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="
            p-2 
            border 
            border-gray-300 
            rounded 
            w-full
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          placeholder="Write your comment"
          className="
          w-full 
          p-2 
          border 
          border-gray-300 
          rounded 
          mb-4
          "
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="
          px-6 
          py-2 
          bg-red-500 
          text-white 
          font-work-sans 
          rounded 
          hover:bg-red-600 
          transition-colors 
          disabled:opacity-50
          "
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default AddReview;