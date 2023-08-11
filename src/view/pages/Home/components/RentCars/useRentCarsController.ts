import { ChangeEvent, useEffect, useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { RENTCARS } from "../../../../../app/config/mockCars";

export function useRentCarsController() {
  const [cars] = useState(RENTCARS);
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedAccessFavorite = localStorage.getItem('favorites');
    return storedAccessFavorite ? JSON.parse(storedAccessFavorite) : [];
  });
  const [filter, setFilter] = useState<string>('');
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })
  const windowWidth = useWindowWidth()

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites !== null) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    // Armazenar os favoritos no localStorage sempre que forem atualizados
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (carId: number) => {
    if (favorites.includes(carId)) {
      setFavorites(favorites.filter(id => id !== carId));
      // Remover o carro desmarcado do LocalStorage
      const updatedFavorites = favorites.filter(id => id !== carId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      setFavorites([...favorites, carId]);
      // Adicionar o carro marcado como favorito ao LocalStorage
      const updatedFavorites = [...favorites, carId];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value || '';
    setFilter(inputValue);
  };

  const filteredCars = cars.filter(car =>
    car.marca.toLowerCase().includes(filter.toLowerCase()) ||
    car.modelo.toLowerCase().includes(filter.toLowerCase()) ||
    car.ano.toString().includes(filter)
  );

  return {
    sliderState,
    windowWidth,
    setSliderState,
    toggleFavorite,
    handleFilter,
    filteredCars,
    filter,
    favorites,
  }
}
