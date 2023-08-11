
import { Swiper, SwiperSlide } from "swiper/react";
import { CardsCard } from "../CardsCar";
import { SliderNavigation } from "./SliderNavigation";
import { useRentCarsController } from "./useRentCarsController";
import search from '../../../../../assets/search.svg'
import { Input } from "../../../../components/Input";

export function RentCars() {
  const {
    sliderState,
    windowWidth,
    setSliderState,
    toggleFavorite,
    handleFilter,
    filteredCars,
    filter,
    favorites,
  } = useRentCarsController()

  return (
    <div id="aluguel" className="w-full scroll-smooth md:scroll-auto" >
      <h1 className="text-center font-bold text-3xl tracking-[1px]  mb-10 2xl:mt:5 text-blue-900">Carros para Aluguel</h1>
      <div className="mb-4 w-full px-11 lg:px-52">
        <Input
          type="text"
          placeholder="Filtrar por marca, modelo ou ano"
          name="text"
          onChange={handleFilter}
        />
      </div>

      <div className="w-ful px-4">
        <Swiper
          slidesPerView={windowWidth >= 500 ? 3 : 1}
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
          {filteredCars.length > 0 && (
            filteredCars.map((car, index) => (
              <SwiperSlide key={index}>
                <div>
                  <CardsCard car={car} toggleFavorite={toggleFavorite} favorites={favorites} />
                </div>
              </SwiperSlide >
            ))
          )

          }

        </Swiper >
        {
          filteredCars.length === 0 && (
            <div className="w-ful flex mb-10 gap-2 items-center justify-center  h-[300px]">
              <img src={search} />
              <span className="text-gray-700">{`Nenhum resultado foi encontrado para "${filter}"`}</span>
            </div>
          )
        }
      </div >
    </div>
  );
}
