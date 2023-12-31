import { Link } from "react-router-dom";

import { useInfoCar } from "./useInfoCar"
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { DataCar } from "./components/DataCar/ index";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { cn } from "../../../app/utils/cn";


export function InfoCar() {
  const { car } = useInfoCar();
  const windowWidth = useWindowWidth();

  return (
    <div className="h-full w-full overflow-hidden">
      <Link to="/" className="flex items-center gap-2 relative top-8 left-1 z-10">
        <ArrowLeftIcon />
        <span>Voltar</span>
      </Link>
      {car && (
        <div className=" w-full h-full flex flex-col items-center justify-center px-4">
          <div className={cn(
            'bg-white rounded-xl  w-full h-full max-w-lg max-h-[512px] shadow-[1px_1px_20px_-10px_#000]',
            windowWidth < 326 && 'max-h-[600px]'
          )}>
            <div className="h-28 flex items-center justify-center">
              <img className="object-cover absolute  top-0 md:w-2/3  lg:w-1/3 2xl:w-1/4 " src={car.img} />
            </div>
            <DataCar car={car} />
          </div>
        </div>
      )}
    </div>
  )
}
