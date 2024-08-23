import CarrosselComponent from "../components/Carousel";
import Header from "../components/Header";
import SectionTitleCarousel from "../components/SectionTitleCarousel";
import Travel from "../components/Travel";

const data = [
  {
    imageUrl: 'url-da-imagem-1',
    city: 'Paris',
    country: 'France',
    rating: 4,
    reviews: 120,
    duration: 7,
    price: 1299,
  },
  {
    imageUrl: 'url-da-imagem-1',
    city: 'Paris',
    country: 'France',
    rating: 4,
    reviews: 120,
    duration: 7,
    price: 1299,
  },{
    imageUrl: 'url-da-imagem-1',
    city: 'Paris',
    country: 'France',
    rating: 4,
    reviews: 120,
    duration: 7,
    price: 1299,
  },{
    imageUrl: 'url-da-imagem-1',
    city: 'Paris',
    country: 'France',
    rating: 4,
    reviews: 120,
    duration: 7,
    price: 1299,
  },{
    imageUrl: 'url-da-imagem-1',
    city: 'Paris',
    country: 'France',
    rating: 4,
    reviews: 120,
    duration: 7,
    price: 1299,
  },
];

function Home() {
  return (
    <div className="relative">
      <Header />
      <Travel />
      <div className="mt-40">
        <SectionTitleCarousel />
        <CarrosselComponent data={data} />
      </div>
    </div>
  );
}

export default Home;
