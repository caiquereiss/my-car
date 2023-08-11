import { formatCurrency } from '../../../../../app/utils/formatCurrency'
import { StarFilledIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom';

interface CardsCardProps {
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
  };
  toggleFavorite: (id: number) => void;
  favorites: number[]
}


export function CardsCard({ car, toggleFavorite, favorites }: CardsCardProps) {
  return (
    <>
      <Link to={`/info-car/${car.id}`}
        className='bg-blue-900 hover:bg-blue-800  absolute right-0 px-2 h-9 rounded-2xl font-medium text-white transition-all flex items-center justify-center'

      >
        <OpenInNewWindowIcon className='w-6 h-6' />
      </Link>
      <div
        className="p-4 bg-white rounded-2xl h-[300px] flex flex-col justify-center items-center border-b-4 border-b-teal-950 mb-8">
        <div className='flex items-center gap-2'>
          <h3 className="text-lg font-semibold">{car.modelo}</h3>
          <span> {car.marca}</span>
          <p>{car.ano}</p>

        </div>
        <img src={car.img} className="w-8/12 h-8/12 2xl:w-7/12" />
        <p>{formatCurrency(car.preco)}</p>

        <button
          className="flex items-center"
          onClick={() => toggleFavorite(car.id)}
        >

          <StarFilledIcon
            width={20}
            height={20}
            className={`mr-1 ${favorites.includes(car.id) ? 'text-yellow-500' : 'text-gray-400'}`}

          />
          Favorito
        </button>
      </div >
    </>
  )
}
