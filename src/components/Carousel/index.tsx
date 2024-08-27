import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './partials/carousel.css';

interface CarouselItem {
  imageUrl: string;
  city: string;
  country: string;
  rating: number;
  reviews: number;
  duration: number;
  price: number;
}

interface CarouselComponentProps {
  data: CarouselItem[];
}

function CarouselComponent({ data }: CarouselComponentProps) {
  return (
    <div className="
      w-full 
      max-w-5xl 
      mx-auto 
      py-6
    ">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item: CarouselItem, index: number) => (
          <SwiperSlide key={index}>
            <div className="
              bg-white 
              shadow-md 
              rounded-lg 
              p-4
            ">
              <img
                src={item.imageUrl}
                alt={`${item.city}, ${item.country}`}
                className="
                  w-full 
                  h-32 
                  object-cover 
                  rounded-t-lg
                "
              />
              <div className="
                mt-4 
                text-center
              ">
                <h2 className="
                  text-lg 
                  font-semibold
                ">
                  {item.city}, {item.country}
                </h2>
                <div className="
                  flex 
                  items-center 
                  justify-center 
                  mt-2
                ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`
                        w-4 
                        h-4 
                        fill-current 
                        ${i < item.rating ? 'text-yellow-500' : 'text-gray-300'}
                      `}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L1 7.055l6.561-.955L10 1l2.439 5.1 6.561.955-4.244 4.49 1.122 6.545z" />
                    </svg>
                  ))}
                  <span className="
                    text-gray-600 
                    text-sm 
                    ml-2
                  ">
                    ({item.reviews} reviews)
                  </span>
                </div>
                <p className="
                  text-gray-600 
                  text-sm 
                  mt-2
                ">
                  Duration: {item.duration} days
                </p>
                <p className="
                  text-gray-800 
                  text-base 
                  mt-2 
                  font-semibold
                ">
                  Starting from <span className="text-Salmon-Red">${item.price}</span>
                </p>
              </div>
            </div>
            <div
                className="
              mt-14
              "
              ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselComponent;
