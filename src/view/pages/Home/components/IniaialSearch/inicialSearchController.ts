import { FormEvent } from "react";

export function initialSearchController() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

  }
  return { handleSubmit }
}
