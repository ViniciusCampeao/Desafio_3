import { LuDot } from "react-icons/lu";

const TravelGuide = () => {
  return (
    <div className="grid grid-cols-2 p-4 mr-48 ml-48 gap-40">
      <div className="flex flex-col">
        <div className="grid grid-cols-2 mb-11">
          <img className="w-40 h-32 object-cover" src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/paisagemGuide.jpg" alt="landscape" />
          <div className="flex flex-col p-2 font-inter text-sm">
            <div className="flex items-center text-Gray-2">
              <p className="mr-2">July 13, 2023</p>
              <LuDot/>
              <p className="text-Gray-2">Admin</p>
            </div>
            <p className="mt-2 font-extrabold">
              The Impact of Covid-19 on travel & tourism industry
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <img className="w-40 h-32 object-cover" src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/paisagemGuide.jpg" alt="landscape" />
          <div className="flex flex-col p-2 font-inter text-sm">
            <div className="flex items-center text-Gray-2">
              <p className="mr-2">July 13, 2023</p>
              <LuDot/>
              <p className="text-Gray-2">Admin</p>
            </div>
            <p className="mt-2 font-extrabold">
              The Impact of Covid-19 on travel & tourism industry
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 mb-11">
          <img className="w-40 h-32 object-cover" src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/paisagemGuide.jpg" alt="landscape" />
          <div className="flex flex-col p-2 font-inter text-sm">
            <div className="flex items-center text-Gray-2">
              <p className="mr-2">July 13, 2023</p>
              <LuDot/>
              <p className="text-Gray-2">Admin</p>
            </div>
            <p className="mt-2 font-extrabold">
              The Impact of Covid-19 on travel & tourism industry
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="w-40 h-32 object-cover" src="https://mybucketomyproject.s3.us-east-2.amazonaws.com/paisagemGuide.jpg" alt="landscape" />
          <div className="flex flex-col p-2 font-inter text-sm">
            <div className="flex items-center text-Gray-2">
              <p className="mr-2">July 13, 2023</p>
              <LuDot/>
              <p className="text-Gray-2">Admin</p>
            </div>
            <p className="mt-2 font-extrabold">
              The Impact of Covid-19 on travel & tourism industry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelGuide;
