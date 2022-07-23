
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slider() {
  const slides = [
    {
      text1: "World class manufacturer of wellness products",
      text2: "Pioneers in research, innovation and best practices",
      image: "/sliderimage/slider1.jpg",
      id: "slide1",
    },
    {
      text1: "40 years of legacy",
      text2: "Unparalleled product portfolio cutting across several categories",
      image: "/sliderimage/slider2.jpg",
      id: "slide2",
    },
    {
      text1: "Trusted by some of the world's biggest brands",
      text2: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      image: "/sliderimage/slider3.jpg",
      id: "slide3",
    },
    {
      text1: "Transforming new-age startups",
      text2: "With formulations, licensing, and state-of-the-art manufacturing",
      image: "/sliderimage/slider4.jpg",
      id: "slide4",
    },
  ];

  return (
    <div className="relative w-auto">
      {/* <div className="w-full h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide"> */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={false}
          autoplay={true}
          loop={true}
          speed={500}
          pagination={{ clickable: true }}

          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map(({ text1, text2, image, id }) => (
            <SwiperSlide key={id}>
              <div className="h-[65vh] w-full relative flex justify-center items-center">
                <Image
                
                  className="object-cover w-full h-full"
                  layout="fill"
                  src={image}
                  alt=""
                />
                <div className="absolute inset-0 bg-green opacity-20"></div>
                <div className="px-4 md:container text-center z-50">
                  <h1 className="text-4xl md:text-5xl  text-white drop-shadow-md py-4">
                    {text1}
                  </h1>
                  <h2 className="text-white leading-snug  text-2xl md:text-3xl drop-shadow-md">
                    {text2}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
