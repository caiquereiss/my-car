import { useState } from "react"

export function useTopPageCarrouselController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })


  return {
    sliderState,
    setSliderState
  }
}
