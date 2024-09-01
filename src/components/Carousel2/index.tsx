import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { getTypesCount } from "../../axiosClient/apiClient";

interface Type {
  id: number;
  name: string;
  tours: number;
}

const TypesCarousel: React.FC = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await getTypesCount();
        setTypes(response.data);
      } catch (error) {
        console.error("Error fetching types:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const duplicatedTypes = [...types, ...types, ...types];

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
        {duplicatedTypes.map((type) => (
          <SwiperSlide key={type.id}>
            <div
              className="
          bg-white
          p-4
          border
          rounded-lg
          border-solid
          border-Gray-2
          "
            >
              <img src="" alt="" className="mb-2" />
              <div className="mt-4">
                <h2
                  className="
              text-base
              font-bold
              font-sans
              "
                >
                  {type.name}
                </h2>
                <div
                  className="
                    text-[#A9AFBB] 
                    text-sm
                    flex
                    gap-1
                  "
                >
                  <p>
                  {type.tours}
                  </p>
                  <p>
                  Tours+
                  </p>
                </div>
                <div
                  className="
              flex
              mt-5
              "
                >
                  <p
                    className="
                text-Gray-2
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
                    $1000
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TypesCarousel;
