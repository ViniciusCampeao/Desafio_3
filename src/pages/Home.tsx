import ItemsFixe from "../components/FixeItems";
import Header from "../components/Header";
import SectionTitleCarousel from "../components/SectionTitle";
import Travel from "../components/FirstSectionBg";
import WhyChoose from "../components/WhyChooseUs";
import Assessment from "../components/AssessmentComponent";
import TravelGuide from "../components/TravelGuide";
import Footer from "../components/Footer";
import CarouselComponent from "../components/Carousel";
import TypesCarousel from "../components/Carousel2";
import GridDestinations from "../components/GridTopDestinations";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <Travel />
        <div className="mt-40">
          <SectionTitleCarousel title="Tours" subtitle="Most Popular Tours" />
          <CarouselComponent />
          <ItemsFixe />
        </div>
        <div className="mt-36 bg-Gray-4 py-24">
          <SectionTitleCarousel
            title="Destination"
            subtitle="Top Attractions Destinations"
          />
      <GridDestinations />
        </div>
      </div>
      <WhyChoose />
      <div className="mt-36">
        <SectionTitleCarousel
          title="Browse By Category"
          subtitle="Pick a Tour Type"
        />
      </div>
      <TypesCarousel />
      <Assessment />
      <div className="mt-36">
        <SectionTitleCarousel
          title="Updates"
          subtitle="Latest Travel Guide"
        />
      </div>
      <div className="
      mb-20
      "
      >
        <TravelGuide />
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
