import { useState } from "react";


export function useNavHeaderController() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { handleToggleMenu, isMenuOpen }
}
