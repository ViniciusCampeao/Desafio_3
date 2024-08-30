import React from 'react';
import Search from "../FilterSearch";

interface TravelProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  subtitle2: string;
}

const Bg2: React.FC<TravelProps> = ({ backgroundImage, title, subtitle, subtitle2}) => {
  return (
    <div className="relative">
      <div className="relative">
        <img
          className="h-1/4 w-full object-cover"
          src={backgroundImage}
          alt="background"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40">
          <h2 className="text-white text-5xl font-bold mb-3 font-sans">{title}</h2>
          <div className="
          flex
          flex-row
          gap-1
          "
          >
            <p className="text-white text-sm font-sans font-bold">{subtitle}</p>
            <p className="text-Salmon-Red text-sm font-sans font-bold">{subtitle2}</p>
          </div>
          
        </div>
      </div>
      <div className="absolute w-full left-0 right-0 top-[91%]">
        <Search />
      </div>
    </div>
  );
};

export default Bg2;
