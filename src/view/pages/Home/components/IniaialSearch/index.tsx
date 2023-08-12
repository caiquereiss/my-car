import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

export function InitialSearch() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5">
      <div className="max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">
          Explore o mundo ao seu próprio ritmo
        </h1>
        <p className="text-gray-700 text-center mb-8">
          Com nosso serviço de aluguel de carros, você está no controle total da sua aventura.
        </p>
        <form className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Local de retirada"
            name="take"
          />
          <Input
            type="text"
            placeholder="Local de devolução"
            name="back"
          />
          <Input
            type="date"
            name="initial-date"
            className="pt-0"
          />
          <Input
            type="date"
            name="final-data"
            className="pt-0"
          />
          <Button>Pesquisar Carros</Button>
        </form>
      </div>
    </div>
  );
}
