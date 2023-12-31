import { Outlet } from 'react-router-dom';
import illustrationCar from '../../assets/illustration-car.png';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
        <div className='w-full max-w-[504px] px-8'>

          <Outlet />

        </div>
      </div>

      <div className="w-1/2 bg-gray-0 h-full justify-center items-center p-8 relative hidden lg:flex">
        <div className='bg-blue-600 w-3/5 h-4/5  rounded-2xl relative'>
        </div>
        <img
          src={illustrationCar}
          className="object-contain w-full h-full absolute select-none rounded-[32px]" />
      </div>
    </div>
  )
}
