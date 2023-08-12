import { NavHeader } from "./components/NavHeader";
import 'swiper/css';
import { TopPageCarrousel } from "./components/TopPageCarrousel";
import { RentCars } from "./components/RentCars";
import { InitialSearch } from "./components/IniaialSearch";
import { FooterPage } from "./components/FooterPage";

export function Home() {
  return (
    <>
      <header>
        <NavHeader />
      </header>
      <div>
        <InitialSearch />
      </div>
      <div className="mb-20">
        <TopPageCarrousel />
      </div>

      <div className="flex w-full ">
        <RentCars />
      </div>

      <div className="mt-10">
        <FooterPage />
      </div>
    </>
  )
}
