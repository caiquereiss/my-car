import iconGear from '../../../../assets/cars/icons/icon-gear.svg'
import iconMotor from '../../../../assets/cars/icons/icon-motor.svg'
import iconPassenger from '../../../../assets/cars/icons/icon-passenger.svg'
import iconRefrigeration from '../../../../assets/cars/icons/icon-refrigeration.svg'
import iconFuel from '../../../../assets/cars/icons/icon-fuel.svg'
import iconDor from '../../../../assets/cars/icons/icon-door.svg'
import { formatCurrency } from '../../../../app/utils/formatCurrency'
import { Button } from '../../../components/Button'




interface DataCarProps {
  car: {
    id: number;
    img: string;
    marca: string;
    modelo: string;
    ano: number;
    preco: number;
    motor: string;
    cambio: string;
    flex: boolean;
    passageiros: number;
    ar_condicionado: boolean;
    porta: number;
  };

}
export function DataCar({ car }: DataCarProps) {
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl tracking-[1px] mt-10 2xl:mt:5 text-blue-950">{car.marca} {car.modelo} {car.ano}</h1>

      <div className="flex flex-col-reverse  items-center justify-center lg:flex-row">

        <div className="w-full lg:w-1/2 h-full  p-4 rounded-md ">
          <h3 className="text-gray-600 font-bold tracking-[1px]">Sobre o Veículo</h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 text-blue-950 font-medium tracking-[-0.5px] ">

            <div className='flex items-center gap-2'>
              <img className="w-9 h-9" src={iconMotor} alt="" />
              <p className="mb-1 flex items-center gap-2 font-bold text-sm tracking-[-0.5px] ">
                {`Motor ${car.motor}`}
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <img className="w-9 h-9" src={iconGear} alt="" />
              <p className="mb-1 flex items-center gap-2 font-bold text-sm tracking-[-0.5px] ">
                {`Câmbio ${car.cambio}`}
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <img className="w-9 h-9" src={iconFuel} alt="" />
              <p className="mb-1 flex items-center gap-2 font-bold text-sm tracking-[-0.5px] ">
                {`Combustível ${car.flex ? 'Flex' : 'Não Flex'}`}
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <img className="w-9 h-9" src={iconPassenger} alt="" />
              <p className="mb-1 flex items-center gap-2 font-bold text-sm tracking-[-0.5px] ">
                {`${car.passageiros} Passageiros`}
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <img className="w-9 h-9" src={iconDor} alt="" />
              <p className="mb-1 flex items-center gap-2 font-bold text-sm tracking-[-0.5px] ">
                {`${car.porta} Portas`}</p>
            </div>

            <div className='flex items-center gap-2'>
              <img className="w-9 h-9" src={iconRefrigeration} alt="" />
              <p className="mb-1 flex items-center gap-2 font-bold text-sm tracking-[-0.5px] ">
                {`${car.passageiros ? 'Ar Condicionado' : ''}`}
              </p>
            </div>

          </div>
        </div>

        <section className="w-2/2 h-full text-gray-700 mt-5 p-4 rounded-md border border-gray-500 ">
          <h3>Monte o seu plano</h3>

          <h3 className="text-blue-900 text-lg font-bold lg:text-3xl tracking-[1px]">
            {formatCurrency(car.preco)}
            <span className="text-gray-500  text-[9px] tracking-[-0.5px]">/ao mês</span>
          </h3>
          <div className="w-full">
            <Button className="w-full bg-orange-700 hover:bg-orange-800">Entre em contato</Button>
          </div>
        </section>

      </div>
    </div>
  )
}
