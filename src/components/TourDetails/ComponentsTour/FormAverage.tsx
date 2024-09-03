import { FaStar } from "react-icons/fa";

interface FormAverageProps {
  ratings: { [key: string]: number };
}

const FormAverage: React.FC<FormAverageProps> = ({ ratings }) => {
  const averageRating = Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length;

  return (
    <div>
      <h1
        className="
        font-work-sans
        font-extrabold
        text-2xl
        mt-7
      "
      >
        Average Reviews
      </h1>
      <div
        className="
        mt-3
        p-8
        bg-Gray-4
        flex
        justify-between
      "
      >
        <div
          className="
          bg-Salmon-Red
          w-[180px]
          h-[201px]
          flex
          flex-col
          justify-center
          text-center
          text-white
        "
        >
          <h1
            className="
            font-work-sans
            font-bold
            text-6xl
          "
          >
            {averageRating.toFixed(1)}
          </h1>
          <div
            className="
            flex
            gap-1
            justify-center
            font-work-sans
          "
          >
            <FaStar className="text-white" />
            <p>Excellent</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-[502px] py-5">
          {Object.keys(ratings).map((category) => (
            <div key={category} className="w-full">
              <p
                className="
                font-work-sans
                text-sm
                w-full
                mb-1
              "
              >
                {category}
              </p>

              <div className="
              flex
              items-center
              gap-2
              "
              >
              <div className="w-[202px] bg-gray-200 h-2 rounded flex items-center">
                <div
                  className="bg-red-500 h-full rounded"
                  style={{ width: `${(ratings[category] / 5) * 100}%` }}
                ></div>
              </div>
              {ratings[category].toFixed(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormAverage;
