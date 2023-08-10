import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useLoginController } from "./useLoginController";
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController();

  return (
    <>
      <Link to="/" className="flex items-center gap-2">
        <ArrowLeftIcon />
        <span>Voltar</span>
      </Link>

      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Entre em sua conta
        </h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            to="/"
            className="tracking-[-0.5px] font-medium text-blue-900">
            Crie uma conta
          </Link>
        </p>

      </header>

      <form
        onSubmit={handleSubmit}
        className="mt-[60px] flex flex-col gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register('password')}
        />

        <Button type="submit" className="mt-2" isLoading={isLoading}>Entrar</Button>
      </form>
    </>
  );
}
