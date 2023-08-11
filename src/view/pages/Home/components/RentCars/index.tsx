
import { Swiper, SwiperSlide } from "swiper/react";
import { CardsCard } from "../CardsCar";
import { SliderNavigation } from "./SliderNavigation";
import { useRentCarsController } from "./useRentCarsController";
import search from '../../../../../assets/search.svg'

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
    <div id="aluguel" className="w-full" >
      <h1 className="text-2xl font-bold mb-4">Carros para Aluguel</h1>
      <div className="mb-4 w-full px-11 lg:px-52">
        <input
          type="text"
          placeholder="Filtrar por marca, modelo ou ano"
          value={filter}
          onChange={handleFilter}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      <div className="w-ful px-4">
        <Swiper
          slidesPerView={windowWidth >= 500 ? 3 : 1}
          spaceBetween={16}
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
            <div className="flex gap-2 items-center justify-center w-full h-40">
              <img src={search} />
              <span>{`Nenhum resultado foi encontrado para "${filter}"`}</span>
            </div>
          )
        }
      </div >
    </div>
  );
}
