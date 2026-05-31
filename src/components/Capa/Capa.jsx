import "./Capa.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import img1 from "./imgs/image1.jpeg";
import img2 from "./imgs/image2.jpeg";
import img3 from "./imgs/image3.jpeg";
import img4 from "./imgs/image4.jpeg";
import img5 from "./imgs/image5.jpeg";
function Capa() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="style-cards" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="style-cards" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="style-cards" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="style-cards" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className="style-cards" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Capa;
