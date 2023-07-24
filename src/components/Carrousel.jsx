import Carousel from "react-bootstrap/Carousel";
import CarrouselImg from "./CarrouselImg";
import "../styles/components/carrousel.css";
import apadrinhe from '../img/apadrinhe.png'
import devs from '../img/pc.png'
import receita from '../img/pc2.png'

function Carrousel() {
  return (
    <div className="div-pai-carousel">
      <Carousel className="main-carousel">
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname="carousel-img"
            text="First slide"
            src={apadrinhe}
          />
          <Carousel.Caption>
            <h3>Apadrinhe um Sorriso</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname="carousel-img"
            text="Second slide"
            src={devs}
          />
          <Carousel.Caption>
            <h3>Devs4Good</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <CarrouselImg
            classname="carousel-img"
            text="Third slide"
            src={receita}
          />
          <Carousel.Caption>
            <h3>App de Receitas</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    </div>
  );
}

export default Carrousel;
