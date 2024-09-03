interface SectionTitleCarouselProps {
  title: string;
  subtitle: string;
}

function SectionTitleCarousel({ title, subtitle }: SectionTitleCarouselProps) {
  return (
    <div className="
    text-center 
    my-8
    ">
      <div className="
      flex 
      items-center 
      justify-center
      ">
        <div className="w-14 h-px bg-[#A9AFBB]"></div>
        <h2 className="text-Salmon-Red font-bold font-kaushan text-xl px-4">
          {title}
        </h2>
        <div className="w-14 h-px bg-[#A9AFBB]"></div>
      </div>
      <h1 className="text-3xl font-extrabold mt-2 font-work-sans">
        {subtitle}
      </h1>
    </div>
  );
}

export default SectionTitleCarousel;
