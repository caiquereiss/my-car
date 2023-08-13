import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { toast } from 'react-hot-toast';
import { sleep } from '../../../app/utils/sleep';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const schema = z.object({
  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z.string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve conter pelo menos 8 dígitos'),
});

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const navigate = useNavigate();
  const handleSubmit = hookFormHandleSubmit(async (data) => {

    try {
      setIsLoading(true)
      await sleep(1000);

      if (data.email === 'johndoe@example.com' && data.password === '12345678') {
        toast.success('Logado com sucesso!');
        navigate('/', { replace: true });

      } else {

        throw new Error('Credenciais inválidas');
      }

    } catch {
      toast.error("Credenciais inválidas!")

    } finally {
      setIsLoading(false)
    }

  });
  return { handleSubmit, register, errors, isLoading }

}
