import SecondCarrosselComponent from "..";

const data = [
  {
    category: "Adventure",
    tours: 120,
    price: 1299,
    imageUrl: "url-da-imagem-1",
  },
  {
    category: "Adventure",
    tours: 120,
    price: 1299,
    imageUrl: "url-da-imagem-1",
  },
  {
    category: "Adventure",
    tours: 120,
    price: 1299,
    imageUrl: "url-da-imagem-1",
  },
  {
    category: "Adventure",
    tours: 120,
    price: 1299,
    imageUrl: "url-da-imagem-1",
  },
  {
    category: "Adventure",
    tours: 120,
    price: 1299,
    imageUrl: "url-da-imagem-1",
  },
];

const ExportCarousel2 = () => {
  return <SecondCarrosselComponent data={data} />;
}
export default ExportCarousel2;