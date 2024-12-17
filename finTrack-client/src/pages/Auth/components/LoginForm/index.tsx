import { useForm } from 'react-hook-form';
import { ButtonLogin, FormConteainer } from './styled';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface FormProps {
  email: string;
  password: string;
}

const FormLoginSchema = z.object({
  email: z.string().email('Insira um e-mail válido.'),
  password: z.string(),
});

export function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormProps>({
    resolver: zodResolver(FormLoginSchema),
  });

  function handleSubmitLogin(data: FormProps) {
    const { email, password } = data;

    console.log(email, password);

    reset();
  }

  return (
    <FormConteainer onSubmit={handleSubmit(handleSubmitLogin)}>
      <div>
        <label htmlFor="">E-mail</label>
        <input type="text" {...register('email')} />
      </div>
      <div>
        <label htmlFor="">Senha </label>
        <input type="text" {...register('password')} />
        {errors && <p>{errors.email?.message}</p>}
      </div>
      <ButtonLogin type="submit" disabled={isSubmitting}>
        ENTRAR
      </ButtonLogin>
    </FormConteainer>
  );
}
