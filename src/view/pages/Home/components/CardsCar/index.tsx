import { formatCurrency } from '../../../../../app/utils/formatCurrency'
import { StarFilledIcon } from '@radix-ui/react-icons'

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
    <div
      className="p-4 bg-white rounded-2xl h-[300px] flex flex-col justify-center items-center border-b-4 border-b-teal-950 mb-8">
      <div className='flex items-center gap-2'>
        <h3 className="text-lg font-semibold">{car.modelo}</h3>
        <span> {car.marca}</span>
        <p>{car.ano}</p>

      </div>
      <img src={car.img} className="w-8/12 h-8/12" />
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
  )
}
