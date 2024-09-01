
const GridDestinations = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-7 mb-24 mx-32">
      <div className="relative col-span-3 row-start-1 hover:scale-105 transition-transform duration-400 ease-out filter brightness-75 cursor-pointer">
        <img
          src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Grid1.png"
          alt="destination image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative col-span-3 row-start-1 hover:scale-105 transition-transform duration-400 ease-out filter brightness-75 cursor-pointer">
        <img
          src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Grid1.png"
          alt="destination image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative col-span-3 row-start-1 hover:scale-105 transition-transform duration-400 ease-out filter brightness-75 cursor-pointer">
        <img
          src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Grid1.png"
          alt="destination image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative col-span-4 row-start-2 hover:scale-105 transition-transform duration-400 ease-out filter brightness-75 cursor-pointer">
        <img
          src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Grid2.png"
          alt="destination image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative col-span-5 row-start-2 hover:scale-105 transition-transform duration-400 ease-out filter brightness-75 cursor-pointer">
        <img
          src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Grid3.png"
          alt="destination image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative col-span-3 row-span-2 hover:scale-105 transition-transform duration-400 ease-out filter brightness-75 cursor-pointer">
        <img
          src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Grid4.png"
          alt="destination image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GridDestinations;
