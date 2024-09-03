import { ImCheckmark2 } from "react-icons/im";

const WatchNow = () => {
  return (
    <div className="
    grid
    grid-cols-2
    m-20
    "
    >
      <div>
        <img src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/WatchNow.png" alt="watchNow" />
      </div>
      <div className="
      mt-16
      "
      >
        <h1 className="
        text-Salmon-Red 
        font-semibold
        font-kaushan
        text-2xl 
        mb-5
        "
        >
          Why Choose Us
        </h1>
        <h2 className="
        font-work-sans
        text-4xl
        font-bold
        w-[55%]
        "
        >
          Our Experiences Meet High Quality Standarts
        </h2>
        <p className="
        font-inter
        w-[55%]
        text-base
        mt-5
        "
        >
          Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.</p>
        <div className="
        font-sans
        font-semibold
        mt-10
        "
        >
          <div className="
          flex
          ">
          <ImCheckmark2 className="
          text-Salmon-Red
          mr-2
          "
          />
          <p>
            Cheap Rates
          </p>
          <ImCheckmark2 className="
          text-Salmon-Red
          mr-1
          ml-24
          "
          />
          <p>Cheap Rates</p>
          </div>
          <div className="
          flex
          mt-3
          "
          >
          <ImCheckmark2 className="
          text-Salmon-Red
          mr-2
          "
          />
          <p>Hand-picked Tour</p>
          <ImCheckmark2 className="
          text-Salmon-Red
          mr-1
          ml-14
          "
          />
          <p>Private Guide</p>
          </div>
        </div>
        <div>
          <button className="
          mt-10
          border
          rounded-lg
          border-solid
          border-[#A9AFBB]
          px-6
          py-3
          text-base
          font-semibold
          font-inter
          "
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchNow;