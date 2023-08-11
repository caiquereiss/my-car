import { useNavigate, useParams } from "react-router-dom";
import { RENTCARS } from "../../../app/config/mockCars"
import { toast } from "react-hot-toast";
import { useEffect } from "react";



export function useInfoCar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = RENTCARS.find((car) => car.id === Number(id));
  console.log('car')

  useEffect(() => {
    console.log('Ta bom né?')
    if (!id || !car) {
      toast.error('Carro não encontrado')
      navigate('/', { replace: true });
    }

  }, [car, navigate, id]);


  return { car }
}
