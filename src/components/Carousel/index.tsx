import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './partials/carousel.css';
import Card from '../Card';

import { getTours, getCityById, getCountryById } from '../../axiosClient/apiClient';
import { Tour } from '../../axiosClient/types';

interface CityData {
  id: number;
  name: string;
}

interface CountryData {
  id: number;
  name: string;
}

interface CarouselComponentProps {
  Reload?: boolean;
}

function CarouselComponent({ Reload = false }: CarouselComponentProps) {
  const [tours, setTours] = useState<Tour[]>([]);
  const [cities, setCities] = useState<Map<number, CityData>>(new Map());
  const [countries, setCountries] = useState<Map<number, CountryData>>(new Map());
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await getTours();
        const toursData = response.data;

        const filteredTours = toursData.filter(tour => (tour.avarageRating ?? 0) >= 4.8);
        setTours(filteredTours);

        const cityIds = new Set<number>(
          filteredTours
            .map(tour => tour.cityId)
            .filter((id): id is number => id !== undefined)
        );
        const countryIds = new Set<number>(
          filteredTours
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

  if (loading) return (
    <div className="w-full max-w-5xl mx-auto py-6">
      <p>Loading...</p>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto py-6">
      <Swiper
        slidesPerView={4}
        spaceBetween={150}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <Card 
              CardImg={tour.urlImage || ''} 
              TourCity={cities.get(tour.cityId)?.name || 'Unknown City'}
              TourCountry={countries.get(tour.countryId)?.name || 'Unknown Country'}
              TourTitle={tour.name}
              TourAvaliation={tour.avarageRating ?? 0}
              AmountReview={15} 
              TourDuration={tour.duration}
              TourPrice={tour.price}
              TourId={tour.id ?? 0}
              Reload={Reload}
            />
          </SwiperSlide>
        ))}
      <div className="mt-10">

      </div>
      </Swiper>
    </div>
  );
}

export default CarouselComponent;
