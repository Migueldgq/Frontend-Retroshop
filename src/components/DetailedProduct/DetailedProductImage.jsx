import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const DetailedProductImage = ({ productImg1, productImg2 }) => {
  return (
    <Slide
      arrows={false}
      autoplay={false}
      onChange={function noRefCheck() {}}
      onStartChange={function noRefCheck() {}}
      transitionDuration={500}
      className="relative z-[1]"
      indicators={{}}
    >
      <div className="each-slide-effect">
        <img
          src={`http://${import.meta.env.VITE_BASE_URL}:3001/${productImg1}`}
          alt="ProductImage1"
          className="min-h-72 max-h-72 w-screen  object-cover"
        />
      </div>
      <div className="each-slide-effect">
        <img
          src={`http://${import.meta.env.VITE_BASE_URL}:3001/${productImg2}`}
          alt="ProductImage1"
          className="min-h-72 max-h-72 w-screen  object-cover"
        />
      </div>
    </Slide>
  );
};
