import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";

export function InitialSearch() {
  const windowWidth = useWindowWidth();

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
          <Select
            placeholder="Selecione o Local de retirada"
            options={[
              {
                value: 'vitoria',
                label: 'Vitória'
              },
              {
                value: 'serra',
                label: 'Serra'
              },
              {
                value: 'cariacica',
                label: 'Cariacica'
              },
              {
                value: 'vilavelha',
                label: 'Vila Velha'
              },
            ]}
          />
          <Select
            placeholder="Selecione o Local de devolução"
            options={[
              {
                value: 'vitoria',
                label: 'Vitória'
              },
              {
                value: 'serra',
                label: 'Serra'
              },
              {
                value: 'cariacica',
                label: 'Cariacica'
              },
              {
                value: 'vilavelha',
                label: 'Vila Velha'
              },
            ]}
          />
          <Input
            type="date"
            name="initial-date"
            className="pt-0"
            placeholder={`${windowWidth < 800 ? 'Data inicial' : ''}`}
          />
          <Input
            type="date"
            name="final-data"
            className="pt-0"
            placeholder={`${windowWidth < 800 ? 'Data data final' : ''}`}
          />

          <a href="#aluguel" className="flex items-center justify-center">
            <Button>Pesquisar Carros</Button>
          </a>
        </form>
      </div>
    </div>
  );
}
