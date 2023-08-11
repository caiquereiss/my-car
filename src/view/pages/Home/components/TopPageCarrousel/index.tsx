import { Swiper, SwiperSlide } from "swiper/react";

import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import wave from '../../../../../assets/wave.svg'
import { SliderNavigation } from "./SliderNavigation";
import { TOPCARS } from "../../../../../app/config/mockCars";
import { useTopPageCarrouselController } from "./useTopPageCarrouselController";

export function TopPageCarrousel() {
  const { sliderState,
    setSliderState } = useTopPageCarrouselController()
  return (
    <div id="top-cars" className="w-full h-full scroll-smooth md:scroll-auto ">
      <h3 className="text-center font-bold text-3xl tracking-[1px] mt-10 2xl:mt:5 text-blue-900">TOP 3 CARROS MAIS ALUGADOS</h3>
      <div className="w-full">
        <Swiper

          slidesPerView={1}
          centeredSlides
          spaceBetween={16}
          className="w-full lg:w-4/5 mt-20  px-4"
          onSlideChange={swiper => {
            setSliderState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd
            })
          }}
        >
          <SliderNavigation
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}

          />
          {
            TOPCARS.map((car, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 flex flex-col items-center justify-center bg-white bg-opacity-75 rounded-2xl h-full w-full border-b-4">
                  <div className="flex gap-2 lg:gap-10 lg:mb-20">
                    <h1 className="text-gray-700 font-bold lg:text-3xl tracking-[-0.5px]">{car.marca}</h1>
                    <h2 className="text-gray-700 font-bold lg:text-3xl tracking-[-0.5px]">{car.modelo}</h2>
                    <h3 className="text-blue-900 font-bold lg:text-3xl tracking-[1px]">
                      {formatCurrency(car.preco)}
                      <span className="text-gray-500 text-[9px] tracking-[-0.5px]">/ao mês</span>
                    </h3>

                  </div>
                  <img className="h-1/2 w-1/2 " src={car.img} />

                </div>
              </SwiperSlide >
            ))
          }
        </Swiper >
      </div >
      <div className="w-full mt-24 lg:mt-10">
        <img className="w-full" src={wave} />
      </div>
    </div >
  )
}
