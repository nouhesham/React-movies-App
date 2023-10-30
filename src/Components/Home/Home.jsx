import Movies from "../Movies/Movies";
import InputGroup from "../InputGroup/InputGroup";
import CarouselFadeExample from "../Caroussel/Caroussel";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <CarouselFadeExample />
      <InputGroup />
      <Movies />
      <Footer />
    </div>
  );
};

export default Home;
