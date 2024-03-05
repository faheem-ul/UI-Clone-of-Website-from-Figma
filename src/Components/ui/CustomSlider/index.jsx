import { Box, Image, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomSlider.css";
import slidePic from "../../../assets/Pictures/pic.jpg";
import moveNext from "../../../assets/SVGs/moveNext.svg";
import moveBack from "../../../assets/SVGs/moveBack.svg";

function CustomSlider() {
  const swiper = useSwiper();

  const handlePrevBtn = () => {
    swiper.slidePrev();
  };

  const handleNextBtn = () => {
    swiper.slideNext();
  };

  return (
    <Flex
      width={{ base: "333px", md: "580px", xl: "580px" }}
      align="center"
      position="relative"
      bottom="70px"
      right={{ base: "0px", md: "0px", xl: "25px" }}
    >
      <Image
        className="custom-prev"
        src={moveBack}
        alt="move back"
        onClick={handlePrevBtn}
        cursor="pointer"
        position="absolute"
        left="-28px"
        zIndex="10"
        mt="95px"
      />
      <Swiper
        order={2}
        spaceBetween={50}
        slidesPerGroupSkip={3}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".custom-next",

          prevEl: ".custom-prev",
        }}
        loop={true}
        modules={[Keyboard, Navigation, Scrollbar, Pagination]}
        className="Swiper"
      >
        <SwiperSlide>
          <Image
            src={slidePic}
            alt="this is a slider image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slidePic}
            alt="this is a slider image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={slidePic}
            alt="this is a slider image"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={slidePic}
            alt="this is a slider image"
            width="100p%"
            height="100%"
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>

      <Image
        className="custom-next"
        src={moveNext}
        alt="move next"
        onClick={handleNextBtn}
        cursor="pointer"
        position="absolute"
        right="-36px"
        zIndex="10"
        mt="95px"
      />
      <Box className="custom-pagination"></Box>
    </Flex>
  );
}

export default CustomSlider;
