import  { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import './partials/Slider.css';
import { Tour } from "../../axiosClient/types";
import Card from "../Card";

import { getTours, getCityById, getCountryById} from '../../axiosClient/apiClient';

interface CityData {
  id: number;
  name: string;
}

interface CountryData {
  id: number;
  name: string;
}

const TourPage = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [cities, setCities] = useState<Map<number, CityData>>(new Map());
  const [countries, setCountries] = useState<Map<number, CountryData>>(new Map());
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await getTours();
        const limitedTours = response.data.slice(0, 30);
        setTours(limitedTours);

        const cityIds = new Set<number>(
          limitedTours
            .map(tour => tour.cityId)
            .filter((id): id is number => id !== undefined)
        );

        const countryIds = new Set<number>(
          limitedTours
            .map(tour => tour.countryId)
            .filter((id): id is number => id !== undefined)
        );

        const cityPromises = Array.from(cityIds).map(id => getCityById(id));
        const cityResponses = await Promise.all(cityPromises);
        const cityMap = new Map<number, CityData>(
          cityResponses
            .map(res => res.data)
            .filter(data => data.id && data.name)
            .map(data => [data.id, data] as [number, CityData])
        );
        setCities(cityMap);

        const countryPromises = Array.from(countryIds).map(id => getCountryById(id));
        const countryResponses = await Promise.all(countryPromises);
        const countryMap = new Map<number, CountryData>(
          countryResponses
            .map(res => res.data)
            .filter(data => data.id && data.name)
            .map(data => [data.id, data] as [number, CountryData])
        );
        setCountries(countryMap);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return (
    <div className="w-full max-w-5xl mx-auto py-6">
      <p>Loading...</p>
    </div>
  );

  return (
    <div className="mt-32 mx-[130px]">
      <form className="grid grid-cols-12 gap-[32px]">
        <div className="col-span-3">
          <div className="bg-[#F7F8FA] px-[30px] py-[28px]">
            <h6 className="font-work-sans text-lg font-extrabold">Search</h6>
            <div className="relative flex">
              <input
                className="text-Gray-2 font-work-sans p-2 pr-10 mt-1"
                type="text"
                placeholder="Type anything..."
              />
              <CiSearch className="absolute top-3 right-10 w-5 h-5 text-Gray-2" />
            </div>
          </div>

          <div className="mt-16 bg-[#F7F8FA] px-[30px] py-[28px]">
            <h6 className="font-work-sans text-lg font-extrabold">Filter By</h6>
            <div className="relative mt-2">
              <input
                type="range"
                min="0"
                max="3000"
                step="10"
                className="slider"
              />
              <div className="flex justify-between mt-2">
                <span className="font-work-sans font-bold text-base">$0</span>
                <span className="font-work-sans font-bold text-base mr-14">$3000</span>
              </div>
            </div>
            <button
              type="submit"
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

          <div className="mt-16 bg-[#F7F8FA] px-[30px] py-[28px]">
            <h6 className="font-work-sans text-lg font-extrabold">Categories</h6>
            <div className="mt-2">
              {/* Placeholder para os checkboxes de categorias, atualmente desabilitados */}
              <div className="flex items-center mt-2">
                <input type="checkbox" disabled className="mr-2" />
                <label className="font-work-sans text-base">Category 1</label>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" disabled className="mr-2" />
                <label className="font-work-sans text-base">Category 2</label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-8">
            {tours.map(tour => (
              <Card
                key={tour.id}
                TourId={tour.id ?? 0}
                CardImg={tour.urlImage || ''}
                TourCity={cities.get(tour.cityId)?.name || 'Unknown City'}
                TourCountry={countries.get(tour.countryId)?.name || 'Unknown Country'}
                TourTitle={tour.name}
                TourAvaliation={tour.avarageRating ?? 0}
                AmountReview={15}
                TourDuration={tour.duration}
                TourPrice={tour.price}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TourPage;
