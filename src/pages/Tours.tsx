import Header from "../components/Header";
import Bg2 from "../components/SecondSectionBg";
import Tour from "../components/Tour";

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
      <Tour/>
    </div>
  );
}

export default Tours;