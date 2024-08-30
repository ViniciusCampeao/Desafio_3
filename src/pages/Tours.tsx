import Card from "../components/Card";
import Header from "../components/Header";
import Bg2 from "../components/SecondSectionBg";

const Tours = () => {
  return (
    <div>
      <Header />
      <Bg2 
        backgroundImage="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Background2.png"
        title="Tour Package"
        subtitle="Home /"
        subtitle2="Tour Package"
      />
      <Card 
      CardImg="https://mybucketomyproject.s3.us-east-2.amazonaws.com/Bg2.png" 
      TourCity="Budapest"
      TourCountry="Hungary" 
      TourTitle="Wonder of the West Coast & Kimberley"
      TourAvaliation={4.5}
      AmountReview={20}
      TourDuration={7}
      TourPrice={520}
      />
    </div>
  );
}

export default Tours;