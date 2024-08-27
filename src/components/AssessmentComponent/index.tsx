import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { assessments } from "./partials/Assessment";
import "./partials/Assessments.css";

const AssessmentCarousel: React.FC = () => {
  return (
    <div
      className="
    grid 
    grid-cols-2 
    m-20
    "
    >
      <div
        className="
      ml-40
      "
      >
        <img
          src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/assessment.png"
          alt="Testimonials"
        />
      </div>

      <div
        className="
      flex 
      flex-col 
      items-center
      justify-center
      mr-40
      "
      >
        <div
          className="
        flex 
        items-center 
        justify-center
        "
        >
          <div
            className="
          h-px 
          bg-[#A9AFBB] 
          w-32
          "
          ></div>
          <h2
            className="
          text-Salmon-Red 
          font-bold 
          font-kaushan 
          text-xl 
          px-4
          "
          >
            Testimonials
          </h2>
          <div
            className="
          h-px 
          bg-[#A9AFBB] 
          w-32
          "
          ></div>
        </div>
        <h1
          className="
        text-3xl 
        font-extrabold 
        mt-2 
        font-work-sans 
        text-center
        "
        >
          What Travelers Say
        </h1>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination]}
          className="w-full mt-4"
        >
          {assessments.map((assessment, index) => (
            <SwiperSlide key={index}>
              <div
                className="
              flex 
              flex-col 
              items-center
              "
              >
                <p
                  className="
                text-center 
                text-Salmon-Red 
                font-extrabold 
                text-7xl
                "
                >
                  "
                </p>
                <p
                  className="
                text-center 
                mt-4 
                font-bold 
                font-sans 
                w-96
                "
                >
                  {assessment.avaliation}
                </p>
                <p
                  className="
                text-center 
                mt-2 
                text-gray-500 
                text-sm 
                font-light
                "
                >
                  by {assessment.author}, {assessment.profession}
                </p>
              </div>
              <div
                className="
              mt-40
              "
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AssessmentCarousel;
