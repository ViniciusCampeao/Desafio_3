import ItemsFixe from "../components/FixeItems";
import Header from "../components/Header";
import SectionTitleCarousel from "../components/SectionTitle";
import Travel from "../components/Travel";
import ImageGrid from "../components/GridTopDestinations/ImageExport";
import WhyChoose from "../components/WhyChooseUs";
import ExportCarousel2 from "../components/Carousel2/partials/Export";
import ExportCarousel1 from "../components/Carousel/partials/export";
import Assessment from "../components/AssessmentComponent";
import TravelGuide from "../components/TravelGuide";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <Travel />
        <div className="mt-40">
          <SectionTitleCarousel title="Tours" subtitle="Most Popular Tours" />
          <ExportCarousel1 />
          <ItemsFixe />
        </div>
        <div className="mt-36">
          <SectionTitleCarousel
            title="Destination"
            subtitle="Top Attractions Destinations"
          />
        </div>
      </div>
      <ImageGrid />
      <WhyChoose />
      <div className="mt-36">
        <SectionTitleCarousel
          title="Browse By Category"
          subtitle="Pick a Tour Type"
        />
      </div>
      <ExportCarousel2 />
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
