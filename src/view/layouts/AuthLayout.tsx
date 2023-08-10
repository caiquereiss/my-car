import { Outlet } from 'react-router-dom';
import illustrationCar from '../../assets/illustration-car.png';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
        <div className='w-full max-w-[504px] px-8'>

          <Outlet />

        </div>
      </div>

      <div className="bg-gray-0 h-full justify-center items-center p-8 relative hidden lg:flex">
        <img
          src={illustrationCar}
          className="object-contain w-full h-full   select-none rounded-[32px]" />
      </div>
    </div>
  )
}
