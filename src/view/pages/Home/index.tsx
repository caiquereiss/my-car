import { NavHeader } from "./components/NavHeader";
import 'swiper/css';
import { TopPageCarrousel } from "./components/TopPageCarrousel";
import { RentCars } from "./components/RentCars";

export function Home() {
  return (
    <>
      <header>
        <NavHeader />
      </header>

      <div className="mb-20">
        <TopPageCarrousel />
      </div>

      <div className="flex w-full ">
        <RentCars />
      </div>
    </>
  )
}
