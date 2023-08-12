/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef } from 'react';

export function useInitialSearch() {
  // const aluguelRef = useRef(null);

  function handlePesquisarClick(event: any) {
    event.preventDefault();
    // aluguelRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return { handlePesquisarClick }
}
