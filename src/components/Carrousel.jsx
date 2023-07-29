import Carousel from "react-bootstrap/Carousel";
import CarrouselImg from "./CarrouselImg";
import "../styles/components/carrousel.css";
import apadrinhe from '../img/apadrinhe.png'
import devs from '../img/pc.png'
import receita from '../img/pc2.png'
import dog from '../img/Dog.png'

function Carrousel() {
  return (
    <div className="div-pai-carousel">
      <Carousel className="main-carousel">
       
        <Carousel.Item className="carousel-item">
        <a target="_blank" href="https://apadrinhe.vercel.app/">
          <CarrouselImg
            classname="carousel-img"
            text="First slide"
            src={apadrinhe}
          />
        </a>
          <Carousel.Caption>
            <h3>Apadrinhe um Sorriso</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
        <a target="_blank" href="https://www.devs4good.com.br/">
          <CarrouselImg
            classname="carousel-img"
            text="Second slide"
            src={devs}
          />
          </a>
          <Carousel.Caption>
            <h3>Devs4Good</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
        <a target="_blank" href="https://app-de-receitas-group-project.vercel.app/">
          <CarrouselImg
            classname="carousel-img"
            text="Third slide"
            src={receita}
          />
          </a>
          <Carousel.Caption>
            <h3>App de Receitas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
        <a target="_blank" href="https://templatedogs-vite.vercel.app/">
          <CarrouselImg
            classname="carousel-img"
            text="Third slide"
            src={dog}
          />
          </a>
          <Carousel.Caption>
            <h3>ONGDogs</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    </div>
  );
}

export default Carrousel;
