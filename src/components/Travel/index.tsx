import Search from "../FilterSearch";

function Travel() {
  return (
    <div className="relative">
      <div className="relative">
        <img
          className="h-1/4 w-full object-cover"
          src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/background-2+1.png"
          alt="background"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40">
          <h1 className="text-Salmon-Red font-lobster text-3xl mb-2">Save 15% Off Worldwide</h1>
          <h2 className="text-white text-6xl font-bold mb-3 font-sans">Travel & Adventures</h2>
          <p className="text-white text-sm font-sans font-bold">Find awesome hotel, tour, car, and activities in London</p>
        </div>
      </div>
      <div className="absolute w-full left-0 right-0 top-[91%]">
        <Search />
      </div>
    </div>
  );
}
export default Travel;
