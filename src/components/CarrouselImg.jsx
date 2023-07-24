import "../styles/components/carrousel.css";

// eslint-disable-next-line react/prop-types
export default function CarrouselImg({ src }) {
  return (
    <div className="div-carousel-img">
      <img src={src} alt="carousel" className="carousel-img" />
    </div>
  );
}
