import React, { useState, useEffect } from "react";
import './partials/Slider.css';
import { Tour } from "../../axiosClient/types";
import Filters from "./partials/Filters";
import Card from "../Card";
import { getTours, getCityById, getCountryById } from '../../axiosClient/apiClient';

interface CityData {
  id: number;
  name: string;
}

interface CountryData {
  id: number;
  name: string;
}

const TourPage: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [cities, setCities] = useState<Map<number, CityData>>(new Map());
  const [countries, setCountries] = useState<Map<number, CountryData>>(new Map());
  const [loading, setLoading] = useState<boolean>(true);
  const [maxPrice, setMaxPrice] = useState<number>(3000);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await getTours();
        const fetchedTours = response.data;
        setTours(fetchedTours);
        setFilteredTours(fetchedTours);

        const cityIds = new Set<number>(
          fetchedTours
            .map(tour => tour.cityId)
            .filter((id): id is number => id !== undefined)
        );

        const countryIds = new Set<number>(
          fetchedTours
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
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleSearch = (searchTerm: string) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = tours.filter(tour =>
      tour.name.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredTours(filtered);
  };

  const handlePriceChange = (price: number) => {
    setMaxPrice(price);
  };

  const handleSubmit = () => {
    const filtered = tours.filter(tour => tour.price <= maxPrice);
    setFilteredTours(filtered);
  };

  if (loading) return (
    <div className="w-full max-w-5xl mx-auto py-6">
      <p>Loading...</p>
    </div>
  );

  return (
    <div className="mt-32 mx-[130px]">
      <div className="grid grid-cols-12 gap-[32px]">
        <div className="col-span-3">
          <Filters onSearch={handleSearch} onPriceChange={handlePriceChange} onSubmit={handleSubmit} />
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-8">
            {filteredTours.map(tour => (
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
      </div>
    </div>
  );
};

export default TourPage;
