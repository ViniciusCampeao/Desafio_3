import { CiStar } from "react-icons/ci";

const FormReview = () => {
  return(
    <div className="
    w-full
    h-[207px]
    border
    border-solid
    border-Gray-3
    grid
    grid-cols-5
    p-7
    mt-4
    "
    >
      <div className="
      mr-4
      rounded-full
      bg-Gray-3
      w-24
      h-24
      col-span-1
      "
      >
        
      </div>
      <div className="
      justify-start
      col-span-4
      "
      >
        <p className="
        mb-2
        text-Gray-2
        text-sm
        font-inter
        "
        >
          March 20, 2022</p>
        <h1 className="
        mb-2
        font-bold
        font-work-sans
        text-lg
        "
        >
          Sindy Simmons</h1>
        <div className="flex items-center gap-1 mb-4">
        <div
            className="
          w-[40px]
          h-[22px]
          bg-Salmon-Red
          text-white
          text-xs
          font-inter
          rounded
          flex
          justify-center
          items-center
          "
          >
            <CiStar />
            4.6
          </div>
          <p className="
          text-sm
          font-inter
          text-Gray-2
          "
          >
            15 reviews</p>
        </div>
        <p className="
        text-base
        font-inter
        text-Gray-2
        "
        >
          Objectively productivate just in time information with dynamic channels. Energistcally exploit seamless growth strategies after 24/7 experiences.</p>
      </div>
    </div>
  )
}

export default FormReview;