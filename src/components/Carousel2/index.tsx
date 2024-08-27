import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface CarouselItem {
  category: string;
  tours: number;
  price: number;
  imageUrl: string;
}

interface CarrosselComponentProps {
  data: CarouselItem[];
}

function SecondCarrosselComponent({ data }: CarrosselComponentProps) {
  return (
    <div
      className="
        w-full 
        max-w-5xl 
        mx-auto 
        py-6
      "
    >
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item: CarouselItem, index: number) => (
          <SwiperSlide key={index}>
            <div
              className="
                bg-white 
                p-4 
                border
                rounded-lg
                border-solid
                border-[#A9AFBB]
              "
            >
              <img
                src={item.imageUrl}
                alt={`${item.category}`}
                className="mb-2"
              />
              <div className="mt-4">
                <h2 
                  className="
                    text-base 
                    font-bold 
                    font-sans
                  "
                >
                  {item.category}
                </h2>
                <p 
                  className="
                    text-[#A9AFBB] 
                    text-sm
                  "
                >
                  {item.tours} 
                  Tours+
                </p>
                <div className="flex mt-5">
                  <p 
                    className="
                      text-[#A9AFBB] 
                      text-base 
                      font-semibold 
                      font-sans
                    "
                  >
                    From
                  </p>
                  <p 
                    className="
                      text-Salmon-Red 
                      text-base 
                      font-semibold 
                      font-kaushan 
                      ml-3
                    "
                  >
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SecondCarrosselComponent;
