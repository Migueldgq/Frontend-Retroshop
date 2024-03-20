import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const ProductImage = ({ productImg1, productImg2 }) => {
  return (
    <Slide
      arrows={false}
      autoplay={false}
      onChange={function noRefCheck() {}}
      onStartChange={function noRefCheck() {}}
      transitionDuration={500}
      className="relative z-[1]"
    >
      <div className="each-slide-effect">
        <img
          src={`http://${import.meta.env.VITE_BASE_URL}:3001/${productImg1}`}
          alt="ProductImage1"
          className="rounded-t-[10px] min-h-[158px] max-h-[158px] min-w-[150px] max-w-[150px] object-cover"
        />
      </div>
      <div className="each-slide-effect">
        <img
          src={`http://${import.meta.env.VITE_BASE_URL}:3001/${productImg2}`}
          alt="ProductImage1"
          className="rounded-t-[10px] min-h-[158px] max-h-[158px] min-w-[150px] max-w-[150px] object-cover"
        />
      </div>
    </Slide>
  );
};
