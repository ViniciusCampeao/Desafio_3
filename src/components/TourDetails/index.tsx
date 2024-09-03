import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import {
  getTourById,
  getCityById,
  getCountryById,
  getTypeById,
} from "../../axiosClient/apiClient";
import { Tour } from "../../axiosClient/types";
import FormTour from "./ComponentsTour/FormTour";
import { CiShare2, CiHeart } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import TourInformations from "./ComponentsTour/FormTourInfo";
import AddReview from "./ComponentsTour/AddReviewTour";
import LastReviewContainer from "./ComponentsTour/LastReview";
import CarouselComponent from "../Carousel";

interface CityData {
  id: number;
  name: string;
}

interface CountryData {
  id: number;
  name: string;
}

interface TypeData {
  id: number;
  name: string;
}

const TourDetailsComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<Tour | null>(null);
  const [city, setCity] = useState<CityData | null>(null);
  const [country, setCountry] = useState<CountryData | null>(null);
  const [type, setType] = useState<TypeData | null>(null);
  const { currentUser } = useContext(AuthContext) || {};

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await getTourById(parseInt(id ?? ""));
        setTour(response.data);

        if (response.data.cityId) {
          const cityResponse = await getCityById(response.data.cityId);
          setCity(cityResponse.data as CityData);
        }
        if (response.data.countryId) {
          const countryResponse = await getCountryById(response.data.countryId);
          setCountry(countryResponse.data as CountryData);
        }
        if (response.data.typeId) {
          const typeResponse = await getTypeById(response.data.typeId);
          setType(typeResponse.data);
        }
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };

    fetchTour();
  }, [id]);

  const formattedDate = tour
    ? new Date(tour.initialDate).toISOString().split("T")[0]
    : "";

  if (!tour || !city || !country || !type) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div
      className="
      mx-[128px]
      mt-[64px]
      flex
      justify-between
    "
    >
      <div
        className="
      w-[774px]
      "
      >
        <img
          className="
      w-full
      h-[400px]
      "
          src={tour.urlImage}
          alt="img"
        />
        <div
          className="
        flex
        justify-between
        mt-7
        "
        >
          <div
            className="
        flex
        items-center
        text-sm
        font-inter
        gap-1
        "
          >
            <FiMapPin />
            <p>{city.name}</p>
            <p>{country.name}</p>
            <button
              className="
          text-Salmon-Red
          ml-2
          "
            >
              View on map
            </button>
          </div>
          <div
            className="
          flex
          gap-2
          "
          >
            <CiShare2 />
            <CiHeart />
          </div>
        </div>
        <h1
          className="
        mt-3
        font-extrabold
        text-3xl
        font-work-sans
        "
        >
          {tour.name}
        </h1>
        <div
          className="
        h-[1px]
        w-full
        bg-Gray-3
        mt-3
        "
        ></div>
        <TourInformations
          price={tour.price}
          duration={`${tour.duration} days`}
          maxPeople={tour.maxPeople}
          minAge={`${tour.minAge}+`}
          tourType={type.name}
          averageRating={tour.avarageRating ?? 0}
          reviewsCount={15}
          overview={tour.overview}
        />
        <h1
          className="
        mt-7
        font-extrabold
        text-3xl
        font-work-sans
        "
        >
          Showing 1 review
        </h1>
        <LastReviewContainer tourId={tour.id} />
        <AddReview
          tourId={tour.id ?? 0}
          userId={currentUser?.uid ?? ""}
          userName={""}
        />
      </div>
      <div>
        <FormTour
          basePrice={tour.price}
          initialDate={formattedDate}
          Time={tour.duration}
        />
      </div>
    </div>
    <div className="
    mt-28
    "
    >
      <h1
              className="
        mt-3
        font-extrabold
        text-3xl
        font-work-sans
        text-center
        "
            >
              You may also like...
            </h1>
        <CarouselComponent Reload={true} />
    </div>
    </div>
  );
};

export default TourDetailsComponent;
